import React from "react";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;

//I need to build three pages

// home '/'
//needs a button with id of "order-pizza"

//form '/pizza'
// Data should look something like
//     name: string, text input, id of "name-input", key string
//     size: string, dropdown, id of "size-dropdown", key string
//     topping1: bool, checkbox, name each separately!, key bool
//     topping2: bool, checkbox, name each separately!, key bool
//     topping3: bool, checkbox, name each separately!, key bool
//     topping4: bool, checkbox, name each separately!, key bool
//     special: string, text input id of "special-text", key string
//     submit: button, id of "order-button", 

//     error message is "name must be at least 2 characters"

//order placed 


//Then start cypress tests