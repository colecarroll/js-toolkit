import React, { Component } from "react";
import { connect } from "react-redux";

class RightColumnDashboard extends Component {
  currentRank() {
    switch (this.props.auth.rank) {
      case 0:
        return (
          <div>
            <h4 className="accomplishment">
              JS Moped <i className="fa fa-motorcycle" aria-hidden="true" />
            </h4>
          </div>
        );

      case 1:
        return (
          <div>
            <h4 className="accomplishment">JS Slugbug</h4>
          </div>
        );

      default:
        return (
          <div>
            <h4 className="accomplishment">JS Ferrari</h4>
          </div>
        );
    }
  }

  render() {
    return (
      <div className="dashboard-right-column">
        <h2 className="dashboard-header">Accomplishments</h2>
        <h3 className="dash-right-accomplishments-cat">
          <i className="fa fa-tachometer" aria-hidden="true" /> Current Score:{" "}
          <span className="accomplishment">{this.props.auth.score} </span>
        </h3>
        <h3 className="dash-right-accomplishments-cat">
          <i className="fa fa-fighter-jet" aria-hidden="true" /> Rank:{" "}
          {this.currentRank(this.props.auth.score)}
        </h3>
        <h3 className="dash-right-accomplishments-cat">
          <i className="fa fa-thermometer-half" aria-hidden="true" /> Points
          needed to reach next rank:{" "}
          <span className="accomplishment">{10 - this.props.auth.score}</span>
        </h3>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(RightColumnDashboard);
