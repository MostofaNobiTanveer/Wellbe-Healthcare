import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FetchProvider } from "./contexts/FetchProvider";

ReactDOM.render(
  <React.StrictMode>
    <FetchProvider>
      <App />
    </FetchProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
