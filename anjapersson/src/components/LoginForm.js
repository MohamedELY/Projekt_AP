import React from 'react';
import { useRef } from 'react';

const LoginForm = ({ Login }) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        const details = {
            username: usernameRef.current.value ?? '',
            password: passwordRef.current.value ?? '',
        };
        console.log(details);
        Login(details);
    };

    return (
        <form onSubmit={submitHandler}>
            <section className="py-20 pb-72">
                <div className="flex flex-wrap justify-center pt-20">
                    <img
                        src="/img/LogIn.jpg"
                        className="h-20 rounded-full"
                        alt=" "
                    />
                </div>
                <p className="flex flex-wrap justify-center text-lg text-bold">
                    Login
                </p>
                <div className="flex flex-wrap justify-center pt-6">
                    <input
                        ref={usernameRef}
                        type="text"
                        id="Username"
                        className="pl-4 pr-10 py-1 border rounded-full bg-white border-black text-black placeholder:italic placeholder:text-slate-400 text-lg"
                        placeholder="Username"
                        required
                    ></input>
                </div>
                <div className="flex flex-wrap justify-center pt-4">
                    <input
                        ref={passwordRef}
                        type="password"
                        id="Password"
                        className="pl-4 pr-10 py-1 border rounded-full bg-white border-black text-black placeholder:italic placeholder:text-slate-400 text-lg"
                        placeholder="Password"
                        required
                    ></input>
                </div>
                <div className="flex flex-wrap justify-center pt-10">
                    <input
                        type="submit"
                        value="Login"
                        className="px-6 py-1 border rounded-full bg-blue-500 hover:bg-blue-700 text-white text-lg"
                    />
                </div>
            </section>
        </form>
    );
};

export default LoginForm;
