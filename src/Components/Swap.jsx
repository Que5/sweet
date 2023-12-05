import React, { useState, useEffect } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

function Swap() {
  const [data, setData] = useState(0);
  const { contract } = useContract("0xEd1CD02Dc4782482c30c59392596151bDFFE904b");
  const { data: contractData, isLoading } = useContractRead(contract, "cZARToken", []);
 
  useEffect(() => {
    if (!isLoading && contractData) {
      const newData = contractData.toString();
      setData(newData);
    }
  }, [isLoading, contractData]);
 
  return (
    <div className="flex items-center justify-center my-4">
      <input className="input-rounded input py-8" placeholder="ZAR(R)" />
      <button className="btn btn-primary ml-2 py-2">Swap</button>
      <input className="input-rounded input ml-2 py-8" placeholder="USD($)" />
      {isLoading ? <p>Loading...</p> : <p>Contract Data: {data}</p>}
    </div>
  );
 }
 export default Swap;
 