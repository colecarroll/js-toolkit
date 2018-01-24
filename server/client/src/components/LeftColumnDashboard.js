import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class LeftColumnDashboard extends Component {
  render() {
    return (
      <div className="dashboard-left-column">
        <h2 className="dashboard-header">Lessons</h2>
      </div>
    );
  }
}

export default connect(null, actions)(LeftColumnDashboard);
