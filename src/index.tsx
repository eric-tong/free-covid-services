import App from "./layout/App";
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Missing root element");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
