import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class Dashboard extends Component {
  render() {
    return <div>Dashboard</div>;
  }
}

export default connect(null, actions)(Dashboard);
