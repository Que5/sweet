import { React, useState } from "react";
import Navbar from "../Components/Navbar";
import CurrentAmount from "../Components/CurrentAmount";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

import { ethers } from 'ethers';


function Withdraw() {
  const walletUser = "0x24F375746fF3f15D12Ec2E929D9f0bD24C5D059D";
  const [zarAmount, setAmount] = useState(0);

  const { contract } = useContract("0xf4386b25Ef558A7EF39961B0C9d558D6eF6BB94F");
  const { mutateAsync: approve, isLoading } = useContractWrite(contract, "burnFrom")

  const call = async () => {
    const multiply = ethers.utils.parseUnits(zarAmount.toString(), 18);
    try {
      const data = await approve({ args: [walletUser, multiply] });
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
        <input className="input-rounded input py-8" value={zarAmount} placeholder="ZAR(R)" onChange={handleValue} />
        <button className="btn btn-primary ml-2 py-2" onClick={call} disabled={isLoading}>
          {isLoading ? "Loading..." : "Withdraw"}
        </button>
      </div>
    </div>
  );
}

export default Withdraw;

