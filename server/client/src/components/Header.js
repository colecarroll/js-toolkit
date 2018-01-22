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
            <a className="nav-menu" href="#">
              about
            </a>
            <a className="nav-menu" href="#">
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
            <a className="nav-menu" href="#">
              lessons
            </a>
            <a className="nav-menu" href="/api/logout">
              log out
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
