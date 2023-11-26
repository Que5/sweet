
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

                <input className="input-rounded input py-8" value={name} onChange={handleUserChange} placeholder="Name" />
                <button className="btn btn-primary ml-2 py-2" onClick={call}>Register</button>
            </div>
        </div>)
}





