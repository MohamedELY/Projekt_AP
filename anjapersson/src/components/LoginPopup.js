import React, {useState, useRef} from 'react';


const LoginPopup = ({ Login }) => {
    const [modal, setModal] = useState(false);
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

    const handleModal = () => {
        setModal(!modal);
    };
    return (
        <form onSubmit={submitHandler}>
            <section className="py-20 pb-[35rem]">
                <div className="modal-container">
                    <button
                        type="button"                    
                        className="px-6 py-1 border rounded-full bg-blue-500 hover:bg-blue-700 text-white text-lg"
                        onClick={handleModal}>
                        Leave a comment
                    </button>

                    <div className={modal? "bg-modal bg-black bg-opacity-70 grid place-items-center absolute top-0 bottom-0 right-0 left-0":"hidden"}>
                        <div className="modal w-[30vw] p-9 shadow-2x1 rounded-lg bg-white">
                            <div className="flex flex-wrap justify-center">
                                <img
                                    src="/img/LogIn.jpg"
                                    className="h-20 rounded-full"
                                    alt="LogInPicture"
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
                            <div className="flex flex-wrap flex-row justify-center pt-10">
                                <button
                                    type="submit"
                                    value="Login"
                                    className="px-6 py-1 border rounded-full bg-blue-500 hover:bg-blue-700 text-white text-lg">
                                        Login
                                    </button>
                                <button 
                                    onClick={handleModal}
                                    className="px-6 py-1 border rounded-full bg-blue-500 hover:bg-blue-700 text-white text-lg">
                                        Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};


export default LoginPopup;
