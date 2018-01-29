import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import * as actions from "../actions";

class IndividualLesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codeCheck1: false,
      codeCheck2: false,
      userUpdated: false,
      textArea1: "",
      textArea2: ""
    };
  }

  fetchLesson() {
    let currentLesson = {};
    let lessonArray = this.props.lessons;
    let param = Number(this.props.match.params.id);
    for (let lesson of lessonArray) {
      if (lesson.orderId === param) {
        currentLesson = lesson;
      }
    }
    return currentLesson;
  }

  updateAuth() {
    if (this.state.codeCheck1 && this.state.codeCheck2) {
      const lessonData = {
        points: this.props.lessons[this.fetchLesson().orderId - 1].points_worth
      };
      this.props.lessonComplete(lessonData);
      this.setState({
        userUpdated: true,
        codeCheck1: false,
        codeCheck2: false
      });
    }
  }

  codeCheck1Button() {
    if (this.state.codeCheck1 || this.state.userUpdated) {
      return (
        <button type="button" className="btn btn-success spacing">
          <i className="fa fa-wrench" aria-hidden="true" /> Nice Work!
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-warning spacing"
          onClick={event => {
            if (this.state.textArea1 === this.fetchLesson().code_solution_1) {
              this.setState({ codeCheck1: true });
            }
          }}
        >
          <i className="fa fa-check-square-o" aria-hidden="true" /> Run Test
        </button>
      );
    }
  }

  codeCheck2Button() {
    if (this.state.codeCheck2 || this.state.userUpdated) {
      return (
        <button type="button" className="btn btn-success spacing">
          <i className="fa fa-wrench" aria-hidden="true" /> Nice Work!
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-warning spacing"
          onClick={event => {
            if (this.state.textArea2 === this.fetchLesson().code_solution_2) {
              this.setState({ codeCheck2: true });
            }
          }}
        >
          <i className="fa fa-check-square-o" aria-hidden="true" /> Run Test
        </button>
      );
    }
  }

  completedLessonButton() {
    if (this.state.userUpdated) {
      return (
        <Link className="spacing" to="/dashboard">
          <button type="button" className="btn btn-success">
            Congrats! You've completed this lesson!{" "}
            <i class="fa fa-certificate" aria-hidden="true" />
          </button>
        </Link>
      );
    } else {
      return (
        <Link className="spacing" to="/dashboard">
          <button type="button" className="btn btn-info">
            Back to Dashboard <i className="fa fa-undo" aria-hidden="true" />
          </button>
        </Link>
      );
    }
  }

  render() {
    return (
      <div className="indv-lesson-body">
        <div className="indv-lesson-content">
          <h1>{this.fetchLesson().title}</h1>
          <h3>
            <i className="fa fa-wrench accomplishment" aria-hidden="true" />{" "}
            {this.fetchLesson().method_name} -- worth:{" "}
            <span className="accomplishment">
              {this.fetchLesson().points_worth} points{" "}
            </span>
          </h3>

          <ReactMarkdown
            className="spacing"
            source={this.fetchLesson().content_1}
            allowTypes={["breaks"]}
          />

          <iframe
            title="lesson video"
            width="450"
            height="253"
            className="embed-responsive-item spacing"
            frameBorder="0"
            src={this.fetchLesson().youtube_url}
          />

          <h3>First Code Challenge</h3>

          <ReactMarkdown
            className="spacing"
            source={this.fetchLesson().challenge_desc_1}
            allowTypes={["breaks"]}
          />

          <h3>Enter Your Solution</h3>

          <textarea
            className="spacing"
            name="solution_1"
            cols="65"
            rows="5"
            onChange={event => this.setState({ textArea1: event.target.value })}
          />

          <br />

          {this.codeCheck1Button()}

          <h3 className="spacing">Final Code Challenge</h3>

          <ReactMarkdown
            className="spacing"
            source={this.fetchLesson().challenge_desc_2}
            allowTypes={["breaks"]}
          />

          <h3>Enter Your Solution</h3>

          <textarea
            className="spacing"
            name="solution_1"
            cols="65"
            rows="5"
            onChange={event => this.setState({ textArea2: event.target.value })}
          />

          <br />

          {this.codeCheck2Button()}
          {this.updateAuth()}
          <h3>Wrap Up</h3>

          <ReactMarkdown
            className="spacing"
            source={this.fetchLesson().content_2}
            allowTypes={["breaks"]}
          />

          {this.completedLessonButton()}
        </div>

        <div className="back-to-dash">
          <Link to="/dashboard">
            <button type="button" className="btn btn-info">
              Back to Dashboard <i className="fa fa-undo" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth, lessons }) {
  return { auth, lessons };
}

export default connect(mapStateToProps, actions)(IndividualLesson);
