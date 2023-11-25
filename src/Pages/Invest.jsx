import React from "react";
import Navbar from "../Components/Navbar";
import CurrentAmount from "../Components/CurrentAmount";
import { Link } from "react-router-dom";

function Invest() {
  return (
    <div>
      <Navbar />
      <CurrentAmount />
      <div className="flex w-full justify-center gap-4">
        <Link
          to="/Invest"
          className="card max-w-full items-center justify-center m-3"
        >
          Stake
        </Link>
        <div className="divider divider-vertical mx-0 h-44"></div>
        <Link
          to="/Invest"
          className="card max-w-full items-center justify-center m-3"
        >
          Unstake
        </Link>
      </div>
    </div>
  );
}

export default Invest;
