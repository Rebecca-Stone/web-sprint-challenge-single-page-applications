import React from "react";
import { Link } from "react-router-dom";

export default function Form(props) {
  //this is the information that was passed down from App
  const { values, update, submit, disabled, errors } = props;

  //this this changes the event.target value based on what is chosen
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    update(name, valueToUse);
  };

  //this prevents the page from reloading and losing all data on submit
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      {/* this is where the errors will be displayed */}
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
      </div>
      {/* this is the dropdown menu to choose the size of the pizza */}
      <div className="sizeArea">
        <label>
          Pizza Size
          <select
            value={values.size}
            name="size"
            onChange={onChange}
            id="size-dropdown"
          >
            <option value="">---Select a Size---</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
      </div>

      {/* this is the checkboxes where you choose your toppings */}
      <div className="toppingArea">
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>
        <label>
          Cheese
          <input
            type="checkbox"
            name="cheese"
            checked={values.cheese}
            onChange={onChange}
          />
        </label>
        <label>
          Olives
          <input
            type="checkbox"
            name="olives"
            checked={values.olives}
            onChange={onChange}
          />
        </label>
        <label>
          Peppers
          <input
            type="checkbox"
            name="peppers"
            checked={values.peppers}
            onChange={onChange}
          />
        </label>
      </div>

      {/* this is the area where you enter your name and any special instructions */}
      <div className="textAreas">
        <label>
          Name
          <input
            name="name"
            placeholder="Name"
            maxLength="10"
            value={values.username}
            onChange={onChange}
            type="text"
            id="name-input"
          />
        </label>

        <label>
          Special Instructions
          <input
            placeholder="Anything to add?"
            type="text"
            id="special-text"
            name="special"
            value={values.special}
            onChange={onChange}
          />
        </label>
      </div>

      {/* this is the submit button, it only works if you have entered all needed inputs */}
      <Link to="/orderComplete">
        <button disabled={disabled} id="order-button">
          Place order
        </button>
      </Link>
    </form>
  );
}

//Form.js '/pizza'

// Data should look something like

//name: string, key string
//size: string, key string
//topping1: bool, checkbox, name each separately!, key bool
//topping2: bool, checkbox, name each separately!, key bool
//topping3: bool, checkbox, name each separately!, key bool
//topping4: bool, checkbox, name each separately!, key bool
//special: string, key string
//submit: button, id of "order-button",

//error message is "name must be at least 2 characters"
