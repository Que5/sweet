import React from "react";
import { Link } from "react-router-dom";

function Invest() {
  return (
    <Link
      to="/Invest"
      className="card max-w-full items-center justify-center m-3 bg-gray-950 text-white"
    >
      Invest
    </Link>
  );
}

export default Invest;
