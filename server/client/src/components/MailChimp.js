import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class MailChimp extends Component {
  render() {
    return (
      <div>
        <form action="/api/mailchimp" method="POST">
          <label className="email-signup-label" htmlFor="email">
            Email
          </label>
          <input
            className="email-signup-label email-signup-input"
            type="email"
          />
          <button type="submit" class="btn btn-info">
            Submit
          </button>
        </form>

        <Link
          to="/dashboard"
          className="nav-menu"
          onClick={this.props.changeEmailSub}
        >
          No thanks, take me to the first lesson
        </Link>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(MailChimp);
