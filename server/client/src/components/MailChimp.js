import React from "react";
import { Link } from "react-router-dom";

const MailChimp = () => {
  return (
    <div>
      <form action="/api/mailchimp" method="POST">
        <label htmlFor="email">Email</label>
        <input type="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MailChimp;
