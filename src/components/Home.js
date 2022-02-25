import React from "react";
//using link to navigate to Form.js
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Link to="/pizza">
      <button id="order-pizza">Pizza?</button>
    </Link>
  );
}

// home '/'
//needs a button with id of "order-pizza"
//onClick, it needs to redirect to Form.js
