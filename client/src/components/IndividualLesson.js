import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class IndividualLesson extends Component {
  findLesson({ match }) {
    for (let lesson of this.props.lessons) {
      if (lesson.orderId === match.params.id) {
        return lesson.title;
      }
    }
  }

  render() {
    console.log(this.props.lessons);
    return <div>{this.findLesson()}</div>;
  }
}
function mapStateToProps({ auth, lessons }) {
  return { auth, lessons };
}

export default connect(mapStateToProps)(IndividualLesson);
