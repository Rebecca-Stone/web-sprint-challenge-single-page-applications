//import useEffect
//import yup
import React, { useState } from "react";
import { Route } from "react-router-dom";
//import schema

//components used for the different routes
import Home from "./components/Home";
import Form from "./components/Form";
import Ordered from "./components/Ordered";

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
  const [orders, setOrders] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const [disabled, setDisabled] = useState(initialDisabled)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      cheese: formValues.cheese,
      olives: formValues.olives,
      peppers: formValues.peppers,
      special: formValues.special.trim(),
    };
    setOrders(newOrder);
    if (!newOrder.name || !newOrder.size) {
      setFormErrors("Please COMPLETE FORM");
      return;
    }
  };

  return (
    <>
      <h1>Lambda Eats</h1>
      {formErrors && <h2 className="error">{formErrors}</h2>}
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <Form values={formValues} update={updateForm} submit={submitForm} />
      </Route>
      <Route path="/orderComplete">
        <Ordered details={orders}/>
      </Route>
    </>
  );
};
export default App;

//I need to build three pages
//Then start cypress tests
