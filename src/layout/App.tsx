import "../styles/normalize.scss";
import "../styles/main-styles.scss";

import Header from "./Header";
import React from "react";
import Services from "../services/Services";

function App() {
  return (
    <>
      <Header />
      <Services />
    </>
  );
}

export default App;
