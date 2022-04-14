import React from "react";
import { Link } from "react-router-dom";

export default function Form(props) {
  const { values, update, submit, disabled, errors } = props;
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    update(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
      </div>
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

      <Link to="/orderComplete">
        <button disabled={disabled} id="order-button">
          Place order
        </button>
      </Link>
    </form>
  );
}
