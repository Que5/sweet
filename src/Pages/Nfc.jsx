import React from "react";
import Navbar from "../Components/Navbar";
import Nfcimg from "../img/nfc.gif";

const Nfc = () => {
  return (
    <div  className="bg-gradient-to-t from-green-500  to-cyan-400 h-screen">
      <Navbar />
      <div className="flex items-center justify-center my-4">
        <img src={Nfcimg} alt="NFC" />
      </div>
    </div>
  );
};

export default Nfc;
