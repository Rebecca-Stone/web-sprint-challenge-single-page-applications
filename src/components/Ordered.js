import React from "react";
import { Link } from "react-router-dom";

export default function Ordered() {
  return (
    <div>
      <h2>Congrats! Your Pizza is on its Way!</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
