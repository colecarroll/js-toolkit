import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

class IndividualLesson extends Component {
  fetchLesson() {
    let currentLesson = {};
    let lessonArray = this.props.lessons;
    let param = parseInt(this.props.match.params.id);
    for (let lesson of lessonArray) {
      if (lesson.orderId === param) {
        currentLesson = lesson;
      }
    }

    return currentLesson;
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
            source={this.fetchLesson().content_1}
            allowTypes={["breaks"]}
          />
          <iframe
            width="450"
            height="253"
            className="embed-responsive-item"
            frameborder="0"
            src={this.fetchLesson().youtube_url}
          />
          <h3>First Code Challenge</h3>
          <ReactMarkdown
            source={this.fetchLesson().challenge_desc_1}
            allowTypes={["breaks"]}
          />
          <h3>Enter Your Solution</h3>
          <textarea name="solution_1" cols="65" rows="5" />
          <button type="button" className="btn btn-warning">
            <i class="fa fa-check-square-o" aria-hidden="true" /> Run Test
          </button>
          <h3>Final Code Challenge</h3>
          <ReactMarkdown
            source={this.fetchLesson().challenge_desc_2}
            allowTypes={["breaks"]}
          />
          <h3>Enter Your Solution</h3>
          <textarea name="solution_1" cols="65" rows="5" />
          <button type="button" className="btn btn-warning">
            <i class="fa fa-check-square-o" aria-hidden="true" /> Run Test
          </button>
          <h3>Wrap Up</h3>
          <ReactMarkdown
            source={this.fetchLesson().content_2}
            allowTypes={["breaks"]}
          />
        </div>
        <div className="back-to-dash">
          <Link to="/dashboard">
            <button type="button" className="btn btn-info">
              Back to Dashboard <i class="fa fa-undo" aria-hidden="true" />
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

export default connect(mapStateToProps)(IndividualLesson);
