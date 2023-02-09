import React from 'react';
import { useEffect, useState } from 'react';
import Reviewpopup from '../components/Reviewpopup';
import Loginpopup from '../components/LoginPopup';
import { CheckLoggedInUser } from '../session/user';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import { BsFillHandThumbsDownFill } from 'react-icons/bs';

const Recension = ({ data }) => {
    const [Showreviewpopup, setShowreviewpopup] = useState(false);
    const [isLoggedin, setisLoggedin] = useState(false);
    useEffect(() => {
        setisLoggedin(CheckLoggedInUser());
    }, []);

    return (
        <div>
            <div>
                <div className="relative">
                    <section id="hero" class=" pb-10"></section>
                    <h2 className="text-3xl ml-3 font-bold">Reviews</h2>{' '}
                    {/* lägg till variabel för totala recensioner */}
                    <hr className="my-2 border-blue-300"></hr>
                </div>

                {Showreviewpopup && <Reviewpopup />}

                {isLoggedin ? (
                    <button
                        className="bg-blue-500 ml-3 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full text-white"
                        onClick={() => setShowreviewpopup(true)}
                    >
                        Leave a review
                    </button>
                ) : (
                    <button className="bg-blue-500 ml-3  hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full ">
                        <a href="/login" className="text-white">
                            Sign in
                        </a>
                    </button>
                )}
            </div>

            <div className="flex items-center">
                {data.length > 0 && (
                    <ul>
                        {data.map((post) => (
                            <li key={post.id}>
                                {/* 
                                FINS EJ I DATABASEN(profilePicture) LÄGG TILL ELLER TA BORT 
                                <img
                                    src={profilePicture}
                                    class="w-12 h-12 rounded-full"
                                    alt="Profile"
                                /> */}
                                <div class="ml-4">
                                    <section id="hero" class=" pb-3"></section>
                                    <div className="flex container w-3/4 mx-20 px-4 border-4 rounded-lg  border-blue-500 bg-white">
                                        <div class="flex flex-col">
                                            <h3 class="text-lg font-medium mt-2">
                                                {post.username}
                                            </h3>
                                            <h2 class="text-xl font-bold">
                                                {post.title}
                                                {post.rating ? (
                                                    <BsFillHandThumbsUpFill className="bg-green-500 border-green-500 border-2 rounded" />
                                                ) : (
                                                    <BsFillHandThumbsDownFill className="bg-red-500 border-red-500 border-2 rounded" />
                                                )}
                                            </h2>
                                            {/* post.rating ska bytas ut/länkas till en tumme upp eller 
                                        tumme ner beronde på true eller false (True=Upp, False=Ner)*/}

                                            <p class="text-gray-600">
                                                {post.description}
                                            </p>
                                            <section
                                                id="hero"
                                                class=" pb-5"
                                            ></section>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Recension;
