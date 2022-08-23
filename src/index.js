import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RelayEnvironment from "./RelayEnvironment";
import { loadQuery, RelayEnvironmentProvider } from "react-relay";
import * as AppAllTodosQuery from "./__generated__/AppAllTodosQuery.graphql";

const preloadedQuery = loadQuery(RelayEnvironment, AppAllTodosQuery);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <App preloadedQuery={preloadedQuery} />
  </RelayEnvironmentProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
