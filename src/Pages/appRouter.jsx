import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Receive from "./Receive";
import Invest from "./Invest";
import Deposit from "./Deposit";
import Liquidity from "./Liquidity";
import Withdraw from "./Withdraw";
import Nfc from "./Nfc";

import Home from "./Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Receive" element={<Receive />} />
        <Route path="/Invest" element={<Invest />} />
        <Route path="/Deposit" element={<Deposit />} />
        <Route path="/Liquidity" element={<Liquidity />} />
        <Route path="/Withdraw" element={<Withdraw />} />
        <Route path="/Nfc" element={<Nfc />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
