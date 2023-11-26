import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import CurrentAmount from "../Components/CurrentAmount";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

function Deposit() {
  const [zarAmount, setZarAmount] = useState(0);
  const [user, setUser] = useState("");
  const { contract } = useContract("0xEd1CD02Dc4782482c30c59392596151bDFFE904b");
  const { mutateAsync: depositAndMint, isLoading } = useContractWrite(contract, "depositAndMint")

  const call = async () => {
    try {
      const data = await depositAndMint({ args: [user, zarAmount] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  const handleValue = (e) => {
    setZarAmount(e.target.value)
  }

  return (
    <div className="bg-gradient-to-t from-green-500  to-cyan-400 h-screen">
      <Navbar />
      <CurrentAmount />
      <div className="flex items-center justify-center m-4">
        {" "}
        <input className="input-rounded input py-8" onChange={handleValue} value={zarAmount} placeholder="ZAR(R)" />
        <button className="btn btn-primary ml-2 py-2" onClick={call}> Deposit</button>
      </div>
    </div>
  );
}

export default Deposit;




