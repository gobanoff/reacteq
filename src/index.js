import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Time from "./Time";
import Calc from "./Calc";
import Box from "./Box";
import Box1 from "./Box1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Time />
    <Calc />
    <Box />
    <Box1 />
  </React.StrictMode>
);
