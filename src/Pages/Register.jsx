import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";



export default function Component() {
  
    return (
        < div className="bg-gradient-to-t from-green-500  to-cyan-400 h-screen">

            <div className="flex w-full justify-center gap-4">
<div><p>Register or login by connecting to your Metamask</p></div>
              
                <  ConnectWallet />
              
            </div>
        </div>)
}





