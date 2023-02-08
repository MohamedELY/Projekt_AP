import React from 'react';

const HomeSearch = () => {
    return (
        <section id="hero" className=" pb-72">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col text-center">
                    <div className="flex items-end justify-end">
                        <img
                            src="/img/tajmahal.png"
                            alt=""
                            className="h-2/6 rounded-md mr-2 opacity-60"
                        ></img>
                        <img
                            src="/img/frihetsgudinnan.jpg"
                            alt=""
                            className="h-3/6 rounded-md mr-2 opacity-60"
                        ></img>
                        <img
                            src="/img/eiffeltornet.jpg"
                            alt=""
                            className="h-3/5 rounded-md mr-2 opacity-60"
                        ></img>
                        <img
                            src="/img/bigben.jpg"
                            alt=""
                            className="h-4/5 rounded-md mr-2 opacity-60"
                        ></img>
                    </div>

                    <div className="rounded-md shadow-sm">
                        <input
                            type="search"
                            className="form-input py-2 px-3 block w-full leading-5 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-full placeholder-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                            placeholder="Where do you want to visit?"
                        ></input>
                    </div>

                    <div className="flex items-center justify-center mt-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                            Hotel
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full ml-2">
                            Things to do
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full ml-2">
                            Restaurants
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full ml-2">
                            <a href="/createNewPlace" className="text-white">
                                Add a location
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSearch;
