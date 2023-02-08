import { useState } from 'react';

const CreateAccountForm = ({ CreateAcc }) => {
    const [userinfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
    });

    const submitHandler = (e) => {
        e.preventDefault();

        CreateAcc(userinfo);
    };

    return (
        <form onSubmit={submitHandler}>
            <section className="py-20 pb-40">
                <div className="flex flex-wrap justify-center">
                    <img
                        src="/img/LogIn.jpg"
                        className="h-20 rounded-full"
                        alt=""
                    />
                </div>
                <p className="flex flex-wrap justify-center text-lg text-bold">
                    Create New Account
                </p>
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-wrap justify-center pt-6">
                        <input
                            onChange={(e) =>
                                setUserInfo({
                                    ...userinfo,
                                    firstName: e.target.value,
                                })
                            }
                            value={userinfo.firstName}
                            type="text"
                            id="Firstname"
                            className="px-4 py-1 w-40 border rounded-full bg-white border-black text-black placeholder:italic placeholder:text-slate-400 text-lg"
                            placeholder="Firstname"
                            required
                        ></input>
                    </div>
                    <div className="flex flex-wrap justify-center pt-6 pl-2">
                        <input
                            onChange={(e) =>
                                setUserInfo({
                                    ...userinfo,
                                    lastName: e.target.value,
                                })
                            }
                            value={userinfo.lastName}
                            type="text"
                            id="Lastname"
                            className="px-4 py-1 w-40 border rounded-full bg-white border-black text-black placeholder:italic placeholder:text-slate-400 text-lg"
                            placeholder="Lastname"
                            required
                        ></input>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center pt-4">
                    <input
                        onChange={(e) =>
                            setUserInfo({
                                ...userinfo,
                                username: e.target.value,
                            })
                        }
                        value={userinfo.username}
                        type="text"
                        id="Username"
                        className="px-4 py-1 w-80 border rounded-full bg-white border-black text-black placeholder:italic placeholder:text-slate-400 text-lg"
                        placeholder="Username"
                        required
                    ></input>
                </div>
                <div className="flex flex-wrap justify-center pt-4">
                    <input
                        onChange={(e) =>
                            setUserInfo({
                                ...userinfo,
                                password: e.target.value,
                            })
                        }
                        value={userinfo.password}
                        type="password"
                        id="Password"
                        className="px-4 py-1 w-80 border rounded-full bg-white border-black text-black placeholder:italic placeholder:text-slate-400 text-lg"
                        placeholder="Password"
                        required
                    ></input>
                </div>
                <div className="flex flex-wrap justify-center pt-10">
                    <button
                        type="submit"
                        className="px-6 py-1 border rounded-full bg-blue-500 hover:bg-blue-700 text-white text-lg"
                    >
                        Create account
                    </button>
                </div>
            </section>
        </form>
    );
};

export default CreateAccountForm;
