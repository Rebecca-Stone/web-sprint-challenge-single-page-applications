import React, { useState, useEffect } from "react";
//using Route to be able to navigate to different pages
import { Route } from "react-router-dom";
//components used for the different routes
import Home from "./components/Home";
import Form from "./components/Form";
import Ordered from "./components/Ordered";
//this imports my schema which uses yup
import schema from "./validation/formSchema";
import * as yup from "yup";

//to rest the form values
const initialFormValues = {
  size: "",
  pepperoni: false,
  cheese: false,
  olives: false,
  peppers: false,
  special: "",
  name: "",
};

//we only need two errors in this form
const initialFormErrors = {
  size: "",
  name: "",
};

//I decided to add a disabled functionality to the button. that way all required info needs to be entered before submitting
const initialDisabled = true;

const App = () => {

  //this state is used to keep track of the orders
  const [orders, setOrders] = useState([]);
  //this state is to keep track of each forms values
  const [formValues, setFormValues] = useState(initialFormValues);
  //this state is to keep track of form errors
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  //this state disabled the button if required inputs are missing
  const [disabled, setDisabled] = useState(initialDisabled);

  //this validates that the inputs are acceptable to the schema
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  //this setFormValues and sends them to validate with schema
  const updateForm = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };


  //this creates a newOrder when submitting the validated inputs and then adds it to the orders state
  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ["pepperoni", "cheese", "olives", "peppers"].filter(
        (hobby) => formValues[hobby]
      ),
      special: formValues.special.trim(),
    };
    setOrders(newOrder);
  };

  //this enables and disables the submit button based on if the input is valid or not
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <Form
        //passing the information down to Form
          values={formValues}
          update={updateForm}
          submit={submitForm}
          disabled={disabled}
          errors={formErrors}
        />
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
