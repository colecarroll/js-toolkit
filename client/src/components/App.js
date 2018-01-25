import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import EmailSignUp from "./EmailSignUp";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Lessons from "./Lessons";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchLessons();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/emailSubscribe" component={EmailSignUp} />
            <Route exact path="/lessons" component={Lessons} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
