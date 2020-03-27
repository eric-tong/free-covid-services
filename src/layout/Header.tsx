import "../styles/header.scss";

import React from "react";

export default function Header() {
  return (
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
        directory of companies offering free and discounted services during the
        COVID-19 pandemic.
      </p>
    </header>
  );
}
