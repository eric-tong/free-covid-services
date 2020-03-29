import "../styles/footer.scss";

import React from "react";
import { getColorsFromIndex } from "../utils/colors";

export default function Footer() {
  return (
    <footer
      className="middle"
      style={
        { "--primary": getColorsFromIndex(0).primary } as React.CSSProperties
      }
    >
      <h2>
        We aim to connect organizations offering high-quality free or discounted
        services to people during the crisis. If you represent such an
        organization, or know of one in your community, please contribute by
        clicking on this button.
      </h2>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button"
        href="https://airtable.com/shrXH3xUFypxOS6yb"
      >
        Contribute
      </a>
    </footer>
  );
}
