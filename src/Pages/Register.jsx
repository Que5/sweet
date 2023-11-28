import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import Navbar from "../Components/Navbar"
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Component() {
    const [name, setName] = useState("")
    const { contract } = useContract("0xEd1CD02Dc4782482c30c59392596151bDFFE904b");
    const { mutateAsync: registerUser, isLoading } = useContractWrite(contract, "registerUser")

    const call = async () => {
        try {
            const data = await registerUser({ args: [name] });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }
    const handleUserChange = (e) => {
        setName(e.target.value)
    }
    return (
        < div className="bg-gradient-to-t from-green-500  to-cyan-400 h-screen">
            <Navbar />
            <div className="flex w-full justify-center gap-4">
<div><p>Register or login by connecting to your Metamask</p></div>
              
                <  ConnectWallet />
              
            </div>
        </div>)
}





