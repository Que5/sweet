import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function Receive() {
  const textRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState(null);

  const handleCopyClick = () => {
    textRef.current.select();
    document.execCommand("copy");
    setCopySuccess("Copied!");
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center my-4">
        <img
          src="https://i.ibb.co/smfNztD/walletQr.png"
          alt="walletQr"
          border="0"
        />
      </div>
      <div className="flex items-center justify-center my-4">
        <button className="btn btn-primary ml-2 py-2" onClick={handleCopyClick}>
          Copy
        </button>
        <input
          ref={textRef}
          className="input-rounded input ml-2 py-2" // Adjusted py-2 here
          value="0x141e7D44439213c935dC645dc3D5BcF5e291aCC6"
          readOnly
        />
        {copySuccess && <p className="ml-2">{copySuccess}</p>}
      </div>
      <div className="divider divider-horizontal">OR</div>
      <div className="flex items-center justify-center my-4">
        <Link to="/Nfc" className="btn btn-primary ml-2 py-2">
          NFC
        </Link>{" "}
        <button className="btn btn-primary ml-2 py-2">Share</button>
      </div>
    </div>
  );
}

export default Receive;
