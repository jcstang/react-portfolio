import React from "react";
import "bulma/css/bulma.css";
import "./index.css";
import Social from "../Social";

export default function Footer() {
  return (
    <footer className="container is-fluid footer btm-footer">
      <div className="content has-text-centered">
        <div className="content">
          <p className="title is-5 has-text-centered">
            “If I had asked people what they wanted, they would have said faster
            horses.”
          </p>
          <p className="subtitle has-text-centered">- Henry Ford</p>
        </div>

        <p className="find-me">
          <span className="my-name-footer">Jacob Stanger</span> Find me on
          Linkedin, GitHub & Twitter
        </p>
        <Social />
      </div>
    </footer>
  );
}
