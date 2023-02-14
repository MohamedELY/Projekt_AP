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
    const [Showreviewpopup, setShowreviewpopup] = useState(false);
    const [isLoggedin, setisLoggedin] = useState(false);
    useEffect(() => {
        setisLoggedin(CheckLoggedInUser());
    }, []);
    
    const [likeDis, setlikeDis] = useState({ like: 0, dislike: 0 });
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
                <div id="reviewsdiv">            
                    <div className="flex items-center">
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

                <div className=" mt-4">
                    {data.length > 0 && (
                        <div className='grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border-red-500' >
                            {data.map((post) => (
                                <div key={post.id}>
                                    {/* {post.rating
                                        ? setWRate(wRate + 1)
                                        : setLRate(lRate + 1)} */}
                                    <div className="flex flex-col m-4">  
                                        <div className=" px-4 py-2 border-4 rounded-lg  border-blue-500  ">
                                            <div className="flex flex-col">
                                                <div className='flex flex-row justify-between font-medium text-2xl my-2'>
                                                    {post.rating ? (
                                                        <BsFillHandThumbsUpFill className="bg-green-500 border-green-500 border-2 rounded" />
                                                    ) : (
                                                        <BsFillHandThumbsDownFill className="bg-red-500 border-red-500 border-2 rounded" />
                                                    )}
                                                <h3 className="text-lg font-medium flex ">
                                                    {post.username}
                                                </h3>
                                                </div>
                                                <h2 className="text-xl font-bold">
                                                    {post.title}
                                                </h2>
                                                <p className="text-gray-600">
                                                    {post.description}
                                                </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
        </div>
    );
};

export default Recension;
