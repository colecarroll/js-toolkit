import React, { Component } from "react";
import { connect } from "react-redux";
import IndividualLessonMethodName from "./IndividualLessonMethodName";

class LeftColumnDashboard extends Component {
  render() {
    return (
      <div className="dashboard-left-column">
        <h2 className="dashboard-header">Lessons</h2>
        {this.props.lessons
          .reverse()
          .map(lesson => (
            <IndividualLessonMethodName key={lesson.orderId} lesson={lesson} />
          ))}
      </div>
    );
  }
}

function mapStateToProps({ auth, lessons }) {
  return { auth, lessons };
}

export default connect(mapStateToProps)(LeftColumnDashboard);
