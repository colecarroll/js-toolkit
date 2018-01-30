import React from "react";

import MailChimp from "./MailChimp";

const EmailSignUp = () => {
  return (
    <div className="email-sign-up">
      <h1>
        Get one 15 minute-or-less tutorial delivered to your inbox each day!
      </h1>
      <h3 className="subheader">
        You won't receive any spam or offers, only tutorials.
      </h3>
      <MailChimp />
    </div>
  );
};

export default EmailSignUp;
