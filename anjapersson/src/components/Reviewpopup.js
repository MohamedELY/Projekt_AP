import React, { useState } from 'react';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import { BsFillHandThumbsDownFill } from 'react-icons/bs';

const Reviewpopup = ({
    locationPicture = '/img/profilepicture.png',
    locationName = "Anja's hotel",
    locationAddress = 'Snögatan 42, Stockholm, Sweden',
    commentTitel,
    commentDescription,
}) => {
    const [showreviewpopup, setShowreviewpopup] = useState(true);
    const [Rating, setRating] = React.useState(true);

    const submitClick = () => {
        window.location.reload();
        setShowreviewpopup(false);
    };

    const cancelClick = () => {
        window.location.reload();
        setShowreviewpopup(false);
    };

    const upClick = () => {
        setRating(true);
    };
    const downClick = () => {
        setRating(false);
    };

    return (
        <div>
            {showreviewpopup && (
                <div className="flex container fixed top-50 left-0 right-0 bottom-50 z-50 w-96  mx-auto px-4 border-8 rounded-lg  border-blue-500 shadow-2xl bg-slate-200">
                    <div className="py-4">
                        <h2 className="font-bold">Rating</h2>

                        <div className="flex py-2">
                            <button
                                className={`hover:bg-green-400 hover:border-green-400 text-green font-bold py-2 px-4 border-4 border-green-300 rounded ${
                                    Rating
                                        ? 'bg-green-400 border-green-400'
                                        : ''
                                }`}
                                onClick={upClick}
                            >
                                <BsFillHandThumbsUpFill />
                            </button>

                            <button
                                className={`ml-3 hover:bg-red-500 hover:border-red-500 text-red font-bold py-2 px-4 border-4 border-red-400 rounded ${
                                    Rating ? '' : 'bg-red-500 border-red-500'
                                }`}
                                onClick={downClick}
                            >
                                <BsFillHandThumbsDownFill />
                            </button>
                        </div>

                        <form action="/action_page.php">
                            <div className="mt-2">
                                <h2 className="font-bold">Title</h2>
                                <input
                                    id="reviewtitle"
                                    type="text"
                                    className="w-full border-2 border-black py-2 px-3 placeholder-gray-600"
                                    placeholder="Summarize your visit"
                                ></input>
                            </div>

                            <div className="py-4">
                                <h2 className="font-bold">Comment</h2>
                                <textarea
                                    id="reviewcomment"
                                    className="w-80 h-32 mt-2 border-2 border-black py-2 px-3 placeholder-gray-600"
                                    placeholder="Share details of your experience for future visitors, thank you!"
                                ></textarea>

                                <div className="flex py-4">
                                    <button
                                        className=" mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={cancelClick}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        className=" mt-4 ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={submitClick}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

// reviewtitle
// reviewcomment

export default Reviewpopup;
