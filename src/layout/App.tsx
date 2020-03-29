import "../styles/normalize.scss";
import "../styles/main-styles.scss";

import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import Sections from "./Sections";

function App() {
  return (
    <>
      <Header />
      <Sections />
      <Footer />
    </>
  );
}

export default App;
