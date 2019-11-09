import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";

const App = () => (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
);

window.addEventListener("DOMContentLoaded", () => {
  const entry = document.getElementById("root");
  render(<App />, entry);
});
