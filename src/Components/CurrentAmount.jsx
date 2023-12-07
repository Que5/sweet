import React, { useState, useEffect } from "react";
import { useContract, useContractRead, useAddress } from "@thirdweb-dev/react";

function CurrentAmount() {
  const walletUser = useAddress();
  const [data, setData] = useState(0);
  const { contract } = useContract(
    "0xf4386b25Ef558A7EF39961B0C9d558D6eF6BB94F"
  );
  const { data: contractData, isLoading } = useContractRead(
    contract,
    "balanceOf",
    [walletUser]
  );

  const display = (data / 1000000000000000000).toFixed(2);
  useEffect(() => {
    // Update the state with the contract data when it's available
    if (!isLoading && contractData) {
      // Assuming contractData is a BigNumber, convert it to a string
      const newData = contractData.toString();
      setData(newData);
    }
  }, [isLoading, contractData]);

  return (
    <div className="flex items-center justify-center m-3 p-0 border-0">
      <div className="card w-full">
        <div className="card-body flex flex-row items-center justify-center">
          <div className="text-center">
            {isLoading ? (
              <>
                <div className="spinner-simple"></div>
              </>
            ) : (
              <>
                {" "}
                <div className="text-xl font-bold">cR{display}</div>
                <div className="text-xl font-bold">Balance</div>
              </>
            )}
          </div>
          <div className="divider divider-vertical mx-2 h-44"></div>
          <div className="text-center">
            <div className="text-slate-300 text-xl font-bold">cR24</div>
            <div className="text-slate-300 text-xl font-bold">Rewards</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentAmount;
