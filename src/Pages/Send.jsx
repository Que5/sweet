import React, { useState } from "react";
import Navbar from "../Components/Navbar";

import { ethers } from "ethers";
import { useContract, useContractWrite, useAddress } from "@thirdweb-dev/react";

function Receive() {
  const [zarAmount, setAmount] = useState(0);
  const walletUser = useAddress();
  const { contract } = useContract(
    "0xf4386b25Ef558A7EF39961B0C9d558D6eF6BB94F"
  );
  const { mutateAsync: approve, isLoading } = useContractWrite(
    contract,
    "burnFrom"
  );

  const call = async () => {
    const multiply = ethers.utils.parseUnits(zarAmount.toString(), 18);
    try {
      const data = await approve({ args: [walletUser, multiply] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const handleValue = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="bg-gradient-to-t from-green-500 to-cyan-400 h-screen">
      <Navbar />
      <div className="flex items-center justify-center my-4">
        <img
          width="300"
          height="300"
          src="https://img.icons8.com/ios-glyphs/400/initiate-money-transfer.png"
          alt="initiate-money-transfer"
        />
      </div>
      <div className="flex items-center justify-center my-4 flex-wrap">
        <input
          className="input-rounded input py-8 m-2"
          placeholder="Wallet Address"
        />{" "}
        <br />
        <input
          className="input-rounded input py-8 m-2"
          value={zarAmount}
          placeholder="ZAR(R)"
          onChange={handleValue}
        />{" "}
        <br />
        <button
          className="btn btn-primary ml-2 py-2"
          onClick={call}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Receive;
