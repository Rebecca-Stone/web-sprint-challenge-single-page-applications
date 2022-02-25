//import useState, useEffect
//import yup
//import browserRouter as router
import React from 'react';
//import schema
import Home from './components/Home'
import Form from './components/Form'
import Ordered from './components/Ordered'


const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Home />
      <Form />
      <Ordered />
    </>
  );
};
export default App;

//I need to build three pages
//Then start cypress tests