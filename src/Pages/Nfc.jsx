import React from "react";
import Navbar from "../Components/Navbar";
import Nfcimg from "../img/nfc.gif";

const Nfc = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center my-4">
        <img src={Nfcimg} alt="NFC Image" />
      </div>
    </div>
  );
};

export default Nfc;
