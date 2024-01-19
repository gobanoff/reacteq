import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Time from "./Time";
import Calc from "./Calc";
import Box from "./Box";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Time />
    <Calc />
    <Box />
  </React.StrictMode>
);
