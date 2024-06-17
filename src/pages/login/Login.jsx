import { useState } from "react";
import useLogin from "../../hooks/userLogin";
import { Link } from "react-router-dom";

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }
    
    return(
    <main className="min-h-screen">
    <div className="flex  flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-5 px-4 py-16 ">
        <div className="typewriter">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white">
            Texting people, <span className="text-slate-600">simplified.</span>
          </h1>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
          Log into your account <span className="text-slate-800">now!</span>
        </p>
      </div>
    </div>
    <div className="px-[10vw]">
        <form onSubmit={handleSubmit}>
        <div>
            <label className="label">
                <span className="text-base label-text">Username </span>
            </label>
            <input type="text" placeholder="Enter username (test+(any letter from a to f), example: testa)" className="w-full inout-bordered h-10 border rounded" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
        <label className="label">
                <span className="text-base label-text">Password</span>
        </label>
        <input type="password" placeholder="Enter password (chattie)" className="w-full inout-bordered h-10 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} />  
        </div>   
        <Link to ="/signup" className="text-sm hover:underline hover:text-slate-400 mt-2 inline-block">Got an account?</Link>
        <div>
            <button className="btn btn-block btn-sm mt-5 bg-slate-700" disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span> : "Login"}
                </button>
        </div>
      </form>
    </div>
    </main>
    )
}