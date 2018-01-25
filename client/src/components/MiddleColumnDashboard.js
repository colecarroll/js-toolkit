import React, { Component } from "react";
import { connect } from "react-redux";

class MiddleColumnDashboard extends Component {
  fetchLessonTitle() {
    let currentLesson = {};
    let lessonArray = this.props.lessons;
    for (let lesson of lessonArray) {
      if (lesson.orderId === this.props.auth.lastCompletedLesson + 1) {
        currentLesson = lesson;
      }
    }

    return currentLesson.title;
  }

  fetchMethodName() {
    let currentLesson = {};
    let lessonArray = this.props.lessons;
    for (let lesson of lessonArray) {
      if (lesson.orderId === this.props.auth.lastCompletedLesson + 1) {
        currentLesson = lesson;
      }
    }
    return currentLesson.method_name;
  }

  fetchTechnicalSummary() {
    let currentLesson = {};
    let lessonArray = this.props.lessons;
    for (let lesson of lessonArray) {
      if (lesson.orderId === this.props.auth.lastCompletedLesson + 1) {
        currentLesson = lesson;
      }
    }
    return currentLesson.technical_summary;
  }

  render() {
    console.log(this.props);
    return (
      <div className="dashboard-middle-column">
        <h1 className="dashboard-header">Today's Lesson</h1>
        <button type="button" className="btn btn-info">
          Start Next Lesson <i className="fa fa-telegram" aria-hidden="true" />
        </button>
        <h3 className="dashboard-subheader">{this.fetchLessonTitle()}</h3>
        <h4 className="accomplishment">{this.fetchMethodName()}</h4>
        <p>{this.fetchTechnicalSummary()}</p>
      </div>
    );
  }
}

function mapStateToProps({ auth, lessons }) {
  return { auth, lessons };
}

export default connect(mapStateToProps)(MiddleColumnDashboard);
