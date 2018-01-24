import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className="nav-links">
            <a className="nav-menu" href="/about">
              about
            </a>
            <a className="nav-menu" href="/pricing">
              pricing
            </a>
            <a className="nav-menu" href="/auth/google">
              sign in
            </a>
          </div>
        );
      default:
        return (
          <div className="nav-links">
            <span className="user-name-header">
              <i className="fa fa-user-o" aria-hidden="true" />{" "}
              {this.props.auth.name}
            </span>
            <a className="nav-menu" href="/lessons">
              <i className="fa fa-bookmark-o" aria-hidden="true" /> lessons
            </a>
            <a className="nav-menu" href="/api/logout">
              <i className="fa fa-sign-out" aria-hidden="true" /> log out
            </a>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <nav className="nav-menu-div">
          <Link to={this.props.auth ? "/dashboard" : "/"} className="logo">
            <img
              src="logo-blue.png"
              alt="js toolkit logo"
              width={175}
              height={80}
            />
          </Link>

          <div>{this.renderContent()}</div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
