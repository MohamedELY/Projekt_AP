import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { SlUserFollow } from 'react-icons/sl';
import { BsPencil } from 'react-icons/bs';
import { MdOutlinePlace } from 'react-icons/md';
import { TfiUser } from 'react-icons/tfi';
import { CheckLoggedInUser, LogOutUser } from '../session/user';

const NavBar = () => {
    const [isLoggedin, setisLoggedin] = useState(false);
    useEffect(() => {
        setisLoggedin(CheckLoggedInUser());
    }, []);

    return (
        <nav className="relative  mx-auto p-4 bg-gradient-to-r from-blue-500 to-neutral-900">
            <div className="flex items-center justify-between">
                <div className="h-16 w-28 relative bg-gradient-to-tr from-white to-blue-500 hover:from-blue-500 hover:to-white rounded-lg">
                    <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-start text-lg ">
                        <p className="pt-14 flex justify-center opacity-0 hover:opacity-100 text-white"></p>
                    </div>
                    <div className="m-1 absolute inset-0 bg-cover bg-center z-0">
                        <img
                            src="/img/AP.jpg"
                            alt=""
                            className="h-14 rounded-lg hover:opacity-75"
                        />
                    </div>
                </div>

                <div className="hidden md:flex space-x-10 text-xl ">
                    <div className=" flex flex-col items-center">
                        <AiOutlineHome className="text-white text-3xl" />
                        <a href="/" className=" text-white flex flex-row">
                            Home
                        </a>
                    </div>

                    {isLoggedin ? (
                        <div className=" flex flex-col items-center">
                            <MdOutlinePlace className="text-white text-3xl" />
                            <a
                                href="/createplace"
                                className=" text-white flex flex-row"
                            >
                                New Location
                            </a>
                        </div>
                    ) : (
                        <div className=" flex flex-col items-center">
                            <SlUserFollow className="text-white text-3xl" />
                            <a
                                href="/createaccount"
                                className=" text-white flex flex-row"
                            >
                                New Account
                            </a>
                        </div>
                    )}
                </div>
                <div className="hidden md:block p-1 rounded-full bg-gradient-to-tr from-white to-blue-500 hover:from-blue-500 hover:to-white">
                    {isLoggedin ? (
                        <a
                            href="/"
                            onClick={LogOutUser}
                            className="hidden p-2
                        rounded-full h-16 baseline bg-white md:block"
                        >
                            <TfiUser className="text-blue-500 text-3xl ml-2 " />
                            <p className=" text-blue-900 text-xs font-bold text-center p-2 pt-0">
                                Logout
                            </p>
                        </a>
                    ) : (
                        <a
                            href="/login"
                            className="hidden p-2
                        rounded-full h-16 baseline bg-white md:block"
                        >
                            <TfiUser className="text-blue-500 text-3xl ml-2 " />
                            <p className=" text-blue-900 text-xs font-bold text-center p-2 pt-0">
                                Login
                            </p>
                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
