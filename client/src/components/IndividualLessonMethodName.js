import React, { Component } from "react";
import { connect } from "react-redux";

class IndividualLessonMethodName extends Component {
  render() {
    return <div>{this.props.lesson.method_name}</div>;
  }
}

export default IndividualLessonMethodName;
