import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FetchProvider } from "./contexts/FetchProvider";
import { AuthProvider } from "./contexts/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FetchProvider>
        <App />
      </FetchProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
