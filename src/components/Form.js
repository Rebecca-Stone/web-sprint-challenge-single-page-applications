import React from "react";

export default function Form() {
  return (
    <form id="pizza-form" >
      <div className="toppingArea">
        <label>
          Pepperoni
          <input 
            type="checkbox" 
            name="pepperoni" />
        </label>
        <label>Cheese
            <input 
                type='checkbox'
                name='cheese' />
        </label>
        <label>Olives
            <input 
                type='checkbox'
                name='olives' />
        </label>
        <label>Peppers
            <input 
                type='checkbox'
                name='peppers' />
        </label>
      </div>

      <div className="textAreas">
        <label>
          Name
          <input 
            placeholder="Name" 
            type="text" 
            id="name-input" />
        </label>

        <label>
          Special Instructions
          <input 
            placeholder="Anything to add?" 
            type="text" 
            id="special-text" />
        </label>
      </div>
      <button id="order-button">Place order</button>
    </form>
  );
}

//Form.js '/pizza'

// Data should look something like

//name: string, text input, id of "name-input", key string
//size: string, dropdown, id of "size-dropdown", key string
//topping1: bool, checkbox, name each separately!, key bool
//topping2: bool, checkbox, name each separately!, key bool
//topping3: bool, checkbox, name each separately!, key bool
//topping4: bool, checkbox, name each separately!, key bool
//special: string, text input id of "special-text", key string
//submit: button, id of "order-button",

//error message is "name must be at least 2 characters"
