import React from "react";
import ReactDOM from "react-dom/client";
import RootRouter from "./Routers/RootRouter";
import "./Styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>
);
