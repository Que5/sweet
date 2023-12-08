import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Receive from "./Receive";
import Invest from "./Invest";
import Deposit from "./Deposit";
import Liquidity from "./Liquidity";
import Withdraw from "./Withdraw";
import Nfc from "./Nfc";
import Register from "./Register";
import PaymentInfo from "./PaymentInfo";
import Send from "./Send";

import Home from "./Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Receive" element={<Receive />} />
        <Route path="/Invest" element={<Invest />} />
        <Route path="/Deposit" element={<Deposit />} />
        <Route path="/Liquidity" element={<Liquidity />} />
        <Route path="/Withdraw" element={<Withdraw />} />
        <Route path="/Nfc" element={<Nfc />} />
        <Route path="/" element={<Register />} />
        <Route path="/PaymentInfo" element={<PaymentInfo />} />
        <Route path="/Send" element={<Send />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
