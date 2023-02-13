import React from 'react';

const Footer = () => {
    return (
        <footer className="bottom-0 w-full relative p-6 mt-44 mb-0 bg-gradient-to-r from-blue-500 to-neutral-900">
            <div className="flex flex-row  justify-between">
                <div>
                    <a href="/alextestsida">
                        <img
                            src="/img/AP.jpg"
                            className="h-14  rounded-lg"
                            alt=""
                        />
                    </a>

                    <p className=" text-white">© 2023 Anja Pärson </p>
                </div>
                <div className="flex space-x-20 justify-end pb-2 pr-10 ">
                    <div className="flex flex-col space-y-1 text-white">
                        <a href="/" className="text-white font-bold">
                            ABOUT ANJA PÄRSON
                        </a>
                        <a href="/" className="text-white hover:opacity-90">
                            About us
                        </a>
                        <a href="/" className="text-white hover:opacity-90">
                            Press
                        </a>
                        <a href="/" className="text-white hover:opacity-90">
                            Contact us
                        </a>
                    </div>
                    <div className="flex flex-col space-y-1 text-white">
                        <a href="/" className="text-white font-bold">
                            EXPLORE
                        </a>
                        <a href="/" className="text-white hover:opacity-90">
                            Write a review
                        </a>
                        <a href="/" className="text-white hover:opacity-90">
                            Add a place
                        </a>
                        <a href="/" className="text-white hover:opacity-90">
                            Help center
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
