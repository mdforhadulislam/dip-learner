import React from "react";
import "react-day-picker/dist/style.css";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import RouterV1 from "./Routers/RouterV1";
import "./Styles/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <RouterV1 />
    </HelmetProvider>
  </Provider>
);
