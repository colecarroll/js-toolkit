import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MiddleColumnDashboard extends Component {
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
      <div className="dashboard-middle-column">
        <h1 className="dashboard-header">Next Lesson</h1>
        <Link to={`/individual_lesson/${this.fetchLesson().orderId}`}>
          <button type="button" className="btn btn-info">
            Start Next Lesson{" "}
            <i className="fa fa-telegram" aria-hidden="true" />
          </button>
        </Link>
        <h3 className="dashboard-subheader">{this.fetchLesson().title}</h3>
        <h4 className="accomplishment">
          <i className="fa fa-wrench" aria-hidden="true" />{" "}
          {this.fetchLesson().method_name}
        </h4>
        <p>{this.fetchLesson().technical_summary}</p>
      </div>
    );
  }
}

function mapStateToProps({ auth, lessons }) {
  return { auth, lessons };
}

export default connect(mapStateToProps)(MiddleColumnDashboard);
