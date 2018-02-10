import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import EmailSignUp from "./EmailSignUp";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Lessons from "./Lessons";
import IndividualLesson from "./IndividualLesson";
import Footer from "./Footer";
import About from "./About";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchLessons();
  }

  isAdmin() {
    if (this.props.auth.email === "colecarroll2@gmail.com") {
      return Lessons;
    }
    return Dashboard;
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route
              exact
              path="/"
              render={props =>
                this.props.auth.email ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Landing />
                )
              }
            />

            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/about" component={About} />
            <Route path="/emailSubscribe" component={EmailSignUp} />
            <Route exact path="/lessons" component={this.isAdmin()} />
            <Route path="/individual_lesson/:id" component={IndividualLesson} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
