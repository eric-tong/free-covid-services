import "../styles/header.scss";

import React from "react";

export default function Header() {
  return (
    <>
      <header className="middle">
        <h1>
          <span role="img" aria-label="Orange heart emoji">
            🧡
          </span>
          F<span className="collapsed">ree</span>C
          <span className="collapsed">ovid</span>S
          <span className="collapsed">ervices</span>
        </h1>
        <p>
          An{" "}
          <a href="https://github.com/eric-tong/free-covid-services">
            open-source
          </a>{" "}
          directory of organisations offering free and discounted services
          during the COVID-19 pandemic.
        </p>
      </header>
      <h2 id="description">
        From free theatre performances to software discounts, we have curated a
        list of free or discounted services that might be helpful to you or your
        business during these difficult times. If you are an organisation
        offering a helpful service and would like to be featured here, please
        fill in <a href="https://airtable.com/shrXH3xUFypxOS6yb">this form</a>.
      </h2>
    </>
  );
}
