import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

//components used for the different routes
import Home from "./components/Home";
import Form from "./components/Form";
import Ordered from "./components/Ordered";
import schema from "./validation/formSchema";
import * as yup from "yup";

const initialFormValues = {
  size: "",
  pepperoni: false,
  cheese: false,
  olives: false,
  peppers: false,
  special: "",
  name: "",
};

const initialFormErrors = {
  size: "",
  name: "",
};

const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const updateForm = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

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
          values={formValues}
          update={updateForm}
          submit={submitForm}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
      <Route path="/orderComplete">
        <Ordered orders={orders} />
      </Route>
    </>
  );
};
export default App;

//I need to build three pages
//Then start cypress tests
