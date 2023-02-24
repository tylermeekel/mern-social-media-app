import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signup, isLoading, error] = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(username, password)
        await signup(username, password)
    }

    return (
        <div className="flex items-center justify-center h-full">
            <form onSubmit={handleSubmit} className="flex flex-col border-2 border-slate-900 shadow-slate-500 p-10 rounded-md items-center gap-6 w-1/2">
                <h3 className=" text-5xl">Sign Up</h3>

                <div>
                    <label>Username:</label>
                    <input className=" overflow-hidden focus:bg-slate-900 focus:text-white border-2 border-black text-3xl w-full self-center rounded-md p-3" type="text" onChange={(e) => setUsername(e.target.value)} value={username}></input>
                </div>
                
                <div>
                    <label>Password:</label>
                    <input className="focus:bg-slate-900 focus:text-white border-2 border-black text-3xl w-full self-center rounded-md p-3" type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                </div>
                

                <button className="text-2xl bg-slate-900 text-white rounded-md p-3 hover:bg-slate-700" disabled={isLoading}>Sign Up</button>
                {error && 
                    <div className=" bg-red-200 p-2 rounded-md text-red-900">
                        {error}
                    </div>
                }
            </form>
        </div>
    )
}

export default Signup;