import React from "react";
import Navbar from "../Components/Navbar";
import CurrentAmount from "../Components/CurrentAmount";
import { Link } from "react-router-dom";

function Liquidity() {
  return (
    <div  className="bg-gradient-to-t from-green-500  to-cyan-400 h-screen">
      <Navbar />
      <CurrentAmount />
      <div className="flex w-full justify-center gap-4">
        <Link
          to="/Invest" 
          className="card max-w-full items-center justify-center m-3 bg-gray-950 text-white"
        >
          Add Liquidity
        </Link>
        <div className="divider divider-vertical mx-0 h-44"></div>
        <Link
          to="/Invest"
          className="card max-w-full items-center justify-center m-3 bg-gray-950 text-white"
        >
          Remove Liquidity
        </Link>
      </div>
    </div>
  );
}

export default Liquidity;
