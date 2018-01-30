import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class IndividualLessonMethodName extends Component {
  arrow() {
    if (this.props.auth.lastCompletedLesson + 1 === this.props.lesson.orderId) {
      return (
        <Link
          className="nav-menu accomplishment"
          to={`/individual_lesson/${this.props.lesson.orderId}`}
        >
          {this.props.lesson.method_name}{" "}
          <i
            className="fa fa-arrow-circle-o-left accomplishment"
            aria-hidden="true"
          />
        </Link>
      );
    } else {
      return (
        <Link
          className="nav-menu"
          to={`/individual_lesson/${this.props.lesson.orderId}`}
        >
          {this.props.lesson.method_name}
        </Link>
      );
    }
  }

  render() {
    return <div>{this.arrow()}</div>;
  }
}

function mapStateToProps({ auth, lessons }) {
  return { auth, lessons };
}

export default connect(mapStateToProps)(IndividualLessonMethodName);
