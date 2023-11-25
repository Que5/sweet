import React from "react";
import Navbar from "../Components/Navbar";
import CurrentAmount from "../Components/CurrentAmount";

function Deposit() {
  return (
    <div>
      <Navbar />
      <CurrentAmount />
      <div className="flex items-center justify-center m-4">
        {" "}
        <input className="input-rounded input py-8" placeholder="ZAR(R)" />
        <button className="btn btn-primary ml-2 py-2">Deposit</button>
      </div>
    </div>
  );
}

export default Deposit;
