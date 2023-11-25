import React from "react";
import Navbar from "../Components/Navbar";
import CurrentAmount from "../Components/CurrentAmount";
import { Link } from "react-router-dom";

function Liquidity() {
  return (
    <div>
      <Navbar />
      <CurrentAmount />
      <div className="flex w-full justify-center gap-4">
        <Link
          to="/Invest"
          className="card max-w-full items-center justify-center m-3"
        >
          Add Liquidity
        </Link>
        <div className="divider divider-vertical mx-0 h-44"></div>
        <Link
          to="/Invest"
          className="card max-w-full items-center justify-center m-3"
        >
          Remove Liquidity
        </Link>
      </div>
    </div>
  );
}

export default Liquidity;
