import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/index.css";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(<App/>, document.querySelector("#root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
