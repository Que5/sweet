import React from "react";
import { Link } from "react-router-dom";

function Withdraw() {
  return (
    <Link
      to="/Withdraw"
      className="card max-w-full items-center justify-center m-3 bg-gray-950 text-white"
    >
      Withdraw
    </Link>
  );
}

export default Withdraw;
