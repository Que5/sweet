import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  useAddress,
  useMetamask,
  useLogin,
  useLogout,
  useUser,
  ConnectWallet,
} from "@thirdweb-dev/react";

function Register() {
  const address = useAddress();
  const connect = useMetamask();
  const { login } = useLogin();
  const { logout } = useLogout();
  const { user, isLoggedIn } = useUser();
  const navigate = useNavigate();

  const handleConnectWallet = () => {
    navigate("/home");
  };

  return (
    <div className="bg-gradient-to-t from-green-500 to-cyan-400 h-screen flex flex-col items-center justify-center">
      <div className="mt-8">
        <p className="text-center m-4 font-black text-3xl">
          Register or login by connecting to your Metamask
        </p>
      </div>
      <ConnectWallet />
      <div className="text-center">
        {isLoggedIn ? (
          <button
            onClick={() => logout()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        ) : address ? (
          <button
            onClick={handleConnectWallet}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 py-2 px-4 rounded"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={() => connect()}
            className="  font-bold py-2 px-4 rounded"
          >
            Connect with Metamask
          </button>
        )}

        <pre className="mt-4 flex-wrap">Connected Wallet: {address}</pre>
      </div>
    </div>
  );
}

export default Register;
