import React from "react";

function About() {
  return (
    <div>
      <h4 className="center">About</h4>
      <div className="container">
        <p className="center">
          This is a small React JS shopping cart application created by Anthony Bernard.
        </p>
        <p
          className="center"
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          Web technologies used in this project:
        </p>
        <ul className="center">
          <li>
            <span style={{ fontWeight: "bold" }}>React.js</span> (Javascript
            front-end library)
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Redux</span> (State management
            library)
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Materialize</span> (CSS
            Framework)
          </li>
        </ul>
        <p className="center">
          See code for this project{" "}
          <a
            href="https://github.com/apb305/React-ecommerce-app"
            target="noopener noreferrer"
          >
            here.
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
