import { React, useState } from "react";
import Navbar from "../Components/Navbar";
import CurrentAmount from "../Components/CurrentAmount";
import { useContract, useContractWrite } from "@thirdweb-dev/react";



function Withdraw() {
  const [amount, setAmount] = useState(0);
  const { contract } = useContract("0xEd1CD02Dc4782482c30c59392596151bDFFE904b");
  const { mutateAsync: withdrawAndBurn, isLoading } = useContractWrite(contract, "withdrawAndBurn")

  const call = async () => {
    try {
      const data = await withdrawAndBurn({ args: [amount] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  const handleValue = (e) => {
    setAmount(e.target.value)
  }
  return (
    <div className="bg-gradient-to-t from-green-500  to-cyan-400 h-screen">
      <Navbar />
      <CurrentAmount />
      <div className="flex items-center justify-center m-4">
        {" "}
        <input className="input-rounded input py-8" value={amount} placeholder="ZAR(R)" onChange={handleValue} />
        <button className="btn btn-primary ml-2 py-2" onClick={call}>Withdraw</button>
      </div>
    </div>
  );
}

export default Withdraw;

