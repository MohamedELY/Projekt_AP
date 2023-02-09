const LoginPopup = () => {
    return (
        <section className="py-20 pb-[35rem]">
            <div className="modal-container">
                <button
                    type="button"
                    className="px-6 py-1 border rounded-full bg-blue-500 hover:bg-blue-700 text-white text-lg"
                >
                    Leave a comment
                </button>

                <div className="bg-modal bg-black bg-opacity-70 grid place-items-center absolute top-0 bottom-0 right-0 left-0">
                    <div className="modal w-[30vw] p-9 shadow-2x1 rounded-lg bg-white">
                        <div className="flex flex-wrap justify-center">
                            <img
                                src="/img/LogIn.jpg"
                                className="h-20 rounded-full"
                                alt="LogIn picture"
                            />
                        </div>
                        <p className="flex flex-wrap justify-center text-lg text-bold">
                            Login
                        </p>
                        <div className="flex flex-wrap justify-center pt-6">
                            <input
                                type="text"
                                id="Username"
                                className="pl-4 pr-10 py-1 border rounded-full bg-white border-black text-black placeholder:italic placeholder:text-slate-400 text-lg"
                                placeholder="Username"
                                required
                            ></input>
                        </div>
                        <div className="flex flex-wrap justify-center pt-4">
                            <input
                                type="text"
                                id="Password"
                                className="pl-4 pr-10 py-1 border rounded-full bg-white border-black text-black placeholder:italic placeholder:text-slate-400 text-lg"
                                placeholder="Password"
                                required
                            ></input>
                        </div>
                        <div className="flex flex-wrap flex-row justify-center pt-10">
                            <input
                                type="submit"
                                value="Login"
                                className="px-6 py-1 border rounded-full bg-blue-500 hover:bg-blue-700 text-white text-lg"
                            />
                            <button className="px-6 py-1 border rounded-full bg-blue-500 hover:bg-blue-700 text-white text-lg">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPopup;
