import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class IndividualLessonMethodName extends Component {
  fetchLesson() {
    let currentLesson = {};
    let lessonArray = this.props.lessons;
    for (let lesson of lessonArray) {
      if (lesson.orderId === this.props.auth.lastCompletedLesson + 1) {
        currentLesson = lesson;
      }
    }

    return currentLesson;
  }

  render() {
    return (
      <div>
        <Link
          className="nav-menu"
          to={`/individual_lesson/${this.fetchLesson().orderId}`}
        >
          {this.props.lesson.method_name}
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ auth, lessons }) {
  return { auth, lessons };
}

export default connect(mapStateToProps)(IndividualLessonMethodName);
