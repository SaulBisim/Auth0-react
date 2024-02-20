import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pu34vlwchpjz7rnh.us.auth0.com"
      clientId="cZET3II50ROQb264CEPgX72Qjk3BfLcZ"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);