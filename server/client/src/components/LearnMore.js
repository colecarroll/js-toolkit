import React from "react";
import GoogleButton from "./GoogleButton";

const LearnMore = () => {
  return (
    <div className="learn-more">
      <h3 className="learn-more-headers">Learn More</h3>
      <div className="learn-more-container">
        <div>
          <h4>What is jstoolkit.io?</h4>
          <h4>
            Why is it so importnt to learn all of JavaScript's built-in methods?
          </h4>
          <h4>What exactly are built in methods?</h4>
        </div>
        <div>
          <h4>What can't I just use MDN to learn these?</h4>
          <h4>Will knowing these methods impress interviewers?</h4>
          <h4>
            Is $11 worth it when I could scour the internet for information?
          </h4>
        </div>
      </div>
      <GoogleButton />
    </div>
  );
};

export default LearnMore;
