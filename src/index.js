import React from "react";
import { render } from "react-dom";
import "./index.css";
//Importing top-level components
import App from "./App";

//Importing React Router's Router
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
