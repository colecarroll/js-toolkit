import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class MiddleColumnDashboard extends Component {
  render() {
    return (
      <div className="dashboard-middle-column">
        <h1 className="dashboard-header">Today's Lesson</h1>
        <button type="button" className="btn btn-info">
          Start Next Lesson <i className="fa fa-telegram" aria-hidden="true" />
        </button>
        <h3 className="dashboard-subheader">
          Mapping Through Arrays! (lesson title)
        </h3>
        <h4 className="accomplishment">Array.map( ) (method name)</h4>
        <p>
          Array.map( ) is one of the most used methods in existence. It's a
          great way to call a function on every item in an array without
          mutating (changing) the original array data. It's a great alternative
          to a for loop in many situations. Let's get started!(Lesson technical
          summary)
        </p>
      </div>
    );
  }
}

export default connect(null, actions)(MiddleColumnDashboard);
