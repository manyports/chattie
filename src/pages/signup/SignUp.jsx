import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

export default function SignUp() {
    const [inputs, setInputs] = useState({ email: "", username: "", password: "" });
    const { loading, signup } = useSignup();
    const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

    return (
        <main className="min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <div className="container flex flex-col items-center justify-center gap-5 px-4 py-16">
                    <div className="typewriter">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white">
                            Texting people, <span className="text-slate-600">simplified.</span>
                        </h1>
                    </div>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
                        Create your account <span className="text-slate-800">now!</span>
                    </p>
                </div>
            </div>
            <div className="px-[10vw]">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">E-mail</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter an email"
                            className="w-full input-bordered h-10 border rounded"
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username (test+(any letter from a to f), example: testa)"
                            className="w-full input-bordered h-10 border rounded"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password (chattie)"
                            className="w-full input-bordered h-10 border rounded"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <Link to="/login" className="text-sm hover:underline hover:text-slate-400 mt-2 inline-block">
                        Got an account?
                    </Link>
                    <a href="/login">
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
                    </a>
                </form>
            </div>
        </main>
    );
}
