import React from "react";

const Footer = () => {
  return (
    <footer className="nav-links footer-align">
      <span
        className="user-name-header"
        dangerouslySetInnerHTML={{ __html: "&copy; jstoolkit.io" }}
      />
      <a className="nav-menu" href="/">
        terms
      </a>
      <a className="nav-menu" href="/">
        privacy
      </a>
      <a className="nav-menu" href="/">
        contact
      </a>
      <a className="nav-menu" href="https://github.com/colecarroll">
        github
      </a>
      <a className="nav-menu" href="/">
        facebook
      </a>
    </footer>
  );
};

export default Footer;
