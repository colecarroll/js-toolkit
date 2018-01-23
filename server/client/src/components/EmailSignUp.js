import React from "react";
import Footer from "./Footer";
import MailChimp from "./MailChimp";

const EmailSignUp = () => {
  return (
    <div>
      <div className="email-sign-up">
        <h1>
          Get one 15 minute-or-less tutorial delivered to your inbox each day!
        </h1>
        <h3 className="subheader">
          You won't receive any spam or offers, and we never share your
          information.
        </h3>
        <MailChimp />
      </div>
      <Footer />
    </div>
  );
};

export default EmailSignUp;
