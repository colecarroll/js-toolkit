import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class IndividualLessonMethodName extends Component {
  render() {
    return (
      <div>
        <Link
          className="nav-menu"
          to={`/individual_lesson/${this.props.lesson.orderId}`}
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
