import React from "react";

function CurrentAmount() {
  return (
    <div className="flex items-center justify-center m-3 p-0 border-0">
      <div className="card w-full">
        <div className="card-body flex flex-row items-center justify-center">
          <div className="text-center">
            <div className="text-xl font-bold">R-260</div>
            <div className="text-xl font-bold">Balance</div>
          </div>
          <div className="divider divider-vertical mx-2 h-44"></div>
          <div className="text-center">
            <div className="text-slate-300 text-xl font-bold">R24</div>
            <div className="text-slate-300 text-xl font-bold">Rewards</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentAmount;
