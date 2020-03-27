import "../styles/header.scss";

import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <h1>
          <span role="img" aria-label="Orange heart emoji">
            🧡
          </span>{" "}
          FCS
        </h1>
        <p>
          An{" "}
          <a href="https://github.com/eric-tong/free-covid-services">
            open-source
          </a>{" "}
          directory of companies offering free and discounted services during
          the COVID-19 pandemic.
        </p>
      </header>
      <h2 id="description">
        From free theatre performances to software discounts, we have curated a
        list of free or discounted services that might be helpful to you or your
        business during these difficult times. If you are a small business
        offering a helpful service and would like to be featured here, please{" "}
        <a href="/reach-out">reach out</a> or send{" "}
        <a href="https://github.com/eric-tong/free-covid-services">
          a pull request
        </a>
        .
      </h2>
    </>
  );
}
