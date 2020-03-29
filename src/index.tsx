import * as Sentry from "@sentry/browser";

import App from "./layout/App";
import React from "react";
import ReactDOM from "react-dom";

Sentry.init({
  dsn: "https://47d29ede518243b0bd4303fa287107ac@sentry.io/5178914"
});

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Missing root element");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
