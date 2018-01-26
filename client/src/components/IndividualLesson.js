import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class IndividualLesson extends Component {
  fetchLesson() {
    let currentLesson = {};
    let lessonArray = this.props.lessons;
    let param = parseInt(this.props.match.params.id);
    for (let lesson of lessonArray) {
      if (lesson.orderId === param) {
        currentLesson = lesson;
      }
    }

    return currentLesson;
  }

  render() {
    return (
      <div className="indv-lesson-body">
        <div className="indv-lesson-content">
          <h1>{this.fetchLesson().title}</h1>
          <h3>
            <i className="fa fa-wrench accomplishment" aria-hidden="true" />{" "}
            {this.fetchLesson().method_name} -- worth:{" "}
            <span className="accomplishment">
              {this.fetchLesson().points_worth} points{" "}
            </span>
          </h3>

          <p>{this.fetchLesson().content}</p>
        </div>
        <div className="back-to-dash">
          <Link to="/dashboard">
            <button type="button" className="btn btn-info">
              Back to Dashboard <i class="fa fa-undo" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth, lessons }) {
  return { auth, lessons };
}

export default connect(mapStateToProps)(IndividualLesson);
