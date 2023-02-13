import React, { useState } from 'react';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import { BsFillHandThumbsDownFill } from 'react-icons/bs';
import { APICreatePost } from '../api/recension';
import { CheckChoosenPlace } from '../session/choosenPlace';
import { CheckLoggedInUser } from '../session/user';

const Reviewpopup = () => {
    const [showreviewpopup, setShowreviewpopup] = useState(true);
    const [goodRating, setGoodRating] = React.useState(true);
    const [badRating, setBadRating] = React.useState(true);

    let loggedInUser = CheckLoggedInUser();
    let currentPlaceId = CheckChoosenPlace();

    const [post, setPost] = useState({
        placeId: currentPlaceId,
        title: '',
        description: '',
        userId: loggedInUser.id,
        rating: '',
    })


    const submitClick = () => {
        window.location.reload();
        setShowreviewpopup(false);
    };

    const cancelClick = () => {
        window.location.reload();
        setShowreviewpopup(false);
    };

    const upClick = () => {
        setGoodRating(false);
        setBadRating(true);
    };

    const downClick = () => {
        setGoodRating(true);
        setBadRating(false);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        APICreatePost(post);
        console.log(post)
    };

    return (
        <div>
            {showreviewpopup && (
                <form onSubmit={submitHandler}>
                    <div className="flex container fixed top-50 left-0 right-0 bottom-50 z-50 w-96  mx-auto px-4 border-8 rounded-lg  border-blue-500 shadow-2xl bg-slate-200">
                        <div className="py-4">
                            <h2 className="font-bold">Rating</h2>

                            <div className="flex py-2">
                                <button
                                    type='button'
                                    className={`hover:bg-green-400 hover:border-green-400 text-green font-bold py-2 px-4 border-4 border-green-300 rounded ${goodRating
                                        ? ''
                                        : 'bg-green-400 border-green-400'
                                        }`}
                                    onClick={() => {
                                        upClick();
                                        setPost({
                                            ...post,
                                            rating: true,
                                        });
                                    }}
                                >
                                    <BsFillHandThumbsUpFill />
                                </button>

                                <button
                                    type='button'
                                    className={`ml-3 hover:bg-red-500 hover:border-red-500 text-red font-bold py-2 px-4 border-4 border-red-400 rounded ${badRating ? '' : 'bg-red-500 border-red-500'
                                        }`}
                                    onClick={() => {
                                        downClick();
                                        setPost({
                                            ...post,
                                            rating: false,
                                        });
                                    }}
                                >
                                    <BsFillHandThumbsDownFill />
                                </button>
                            </div>

                            <div className="mt-2">
                                <h2 className="font-bold">Title</h2>
                                <input
                                    onChange={(e) =>
                                        setPost({
                                            ...post,
                                            title: e.target.value,
                                        })}
                                    value={post.title}
                                    id="reviewtitle"
                                    type="text"
                                    className="w-full border-2 border-black py-2 px-3 placeholder-gray-600"
                                    placeholder="Summarize your visit"
                                    required
                                ></input>
                            </div>

                            <div className="py-4">
                                <h2 className="font-bold">Comment</h2>
                                <input
                                    onChange={(e) =>
                                        setPost({
                                            ...post,
                                            description: e.target.value,
                                        })}
                                    value={post.description}
                                    id="reviewcomment"
                                    className="w-80 h-32 mt-2 border-2 border-black py-2 px-3 placeholder-gray-600"
                                    placeholder="Share details of your experience for future visitors, thank you!"
                                    required
                                ></input>

                                <div className="flex py-4">
                                    <button
                                        type='button'
                                        className=" mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={cancelClick}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className=" mt-4 ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={submitClick}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

// reviewtitle
// reviewcomment

export default Reviewpopup;
