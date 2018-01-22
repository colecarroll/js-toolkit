import React from "react";
import GoogleButton from "./GoogleButton";

const Landing = () => {
  return (
    <div>
      <div className="landing">
        <h1>
          Solve problems like a JavaScript Professional in only 20 minutes a day
        </h1>
        <h3 className="subheader">
          Integrate all 150+ built-in global object methods into your programmer
          toolkit
        </h3>
      </div>
      <div className="image-section-landing">
        <img
          src="landing-computer2.png"
          alt="computer with code on screen"
          width={731}
          height={400}
        />
        <div className="image-copy">
          <p>
            Drastically improve your ability to write clean, efficient code,
            especially under pressure at hte whiteboard in an interview setting
          </p>
          <hr />
          <p>
            Work your way up to solving those tough problems, while actually{" "}
            <u>understanding</u> how the code is working
          </p>
          <hr />
          <p>
            Absorb content in a systematic and regimented fashion your brain can
            actually handle
          </p>
          <h4 className="button-google">It's free, just sign in.</h4>
          <GoogleButton />
        </div>
      </div>
    </div>
  );
};

export default Landing;
