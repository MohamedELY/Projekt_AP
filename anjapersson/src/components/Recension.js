import React from 'react';
import { useEffect, useState } from 'react';
import Reviewpopup from '../components/Reviewpopup';
import { CheckLoggedInUser } from '../session/user';
import {
    BsFillHandThumbsUpFill,
    BsHandThumbsDown,
    BsHandThumbsUp,
    BsFillHandThumbsDownFill,
} from 'react-icons/bs';

const Recension = ({ data }) => {
    const [likeDis, setlikeDis] = useState({ like: 0, dislike: 0 });
    const [Showreviewpopup, setShowreviewpopup] = useState(false);
    const [isLoggedin, setisLoggedin] = useState(false);
    useEffect(() => {
        setisLoggedin(CheckLoggedInUser());
    }, []);

    useEffect(() => {
        const likesDisliked = { like: 0, dislike: 0 };
        for (let i = 0; i < data.length; i++) {
            if (data[i].rating === true) {
                likesDisliked.like++;
            } else {
                likesDisliked.dislike++;
            }
        }
        setlikeDis(likesDisliked);
    }, [data]);

    return (
        <div>
            <div>
                <div className="relative">
                    <section id="hero" classname=" pb-10 mt-10 flex flex-grow"></section>
                    <div class="flex items-center">
                        <h2 className="text-3xl ml-3 font-bold">
                            Reviews / {likeDis.like}
                        </h2>
                        <BsHandThumbsUp className="w-6 h-6" />
                        <h2 className="text-3xl ml-3 font-bold">
                            - {likeDis.dislike}
                        </h2>
                        <BsHandThumbsDown className="w-6 h-6" />
                    </div>
                    {/* lägg till variabel för totala recensioner */}
                    <hr className="my-2 border-blue-300"></hr>
                </div>

                {Showreviewpopup && <Reviewpopup />}

                {isLoggedin ? (
                    <button
                        className="bg-blue-500 ml-3 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mt-10 "
                        onClick={() => setShowreviewpopup(true)}
                    >
                        Leave a review
                    </button>
                ) : (
                    <button className="bg-blue-500 ml-3  hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mt-10 ">
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
                                {/* {post.rating
                                    ? setWRate(wRate + 1)
                                    : setLRate(lRate + 1)} */}
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
