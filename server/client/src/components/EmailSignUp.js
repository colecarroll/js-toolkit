import React from "react";
import Footer from "./Footer";
import MailChimp from "./MailChimp";

const EmailSignUp = () => {
  return (
    <div className="email-sign-up">
      <div>
        <h1>Stay on track.</h1>
        <h1>Get one 15 minute lesson in your inbox each day!</h1>
        <h5>
          You won't receive any spam or offers, and we never share your
          information.
        </h5>
        <MailChimp />
      </div>
    </div>
  );
};

export default EmailSignUp;
