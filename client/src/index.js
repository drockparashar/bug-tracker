import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Signup from "./components/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <App></App>
</React.StrictMode>);
