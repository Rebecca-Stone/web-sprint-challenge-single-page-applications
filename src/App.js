//import useState, useEffect
//import yup
import { Route } from "react-router-dom";
import React from "react";
//import schema

//components used fro the different routes
import Home from "./components/Home";
import Form from "./components/Form";
import Ordered from "./components/Ordered";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <Form />
      </Route>
      <Route path="/orderComplete">
        <Ordered />
      </Route>
    </>
  );
};
export default App;

//I need to build three pages
//Then start cypress tests
