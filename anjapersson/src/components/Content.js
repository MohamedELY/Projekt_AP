import Reviewpopup from '../components/Reviewpopup';
import { useState } from 'react';

const Content = ({ data }) => {
    //console.log(data);
    const [Showreviewpopup, setShowreviewpopup] = useState(false);

    return (
        <div className="flex center">
            {data.pic && (
                <img
                    className="w-64 h-64 ml-20 rounded-lg"
                    src={data.pic}
                    alt=""
                ></img>
            )}
            <div className="ml-6 center">
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <h2 className="text-xl font-bold mt-2">{data.address}</h2>
            </div>

            {Showreviewpopup && <Reviewpopup />}

            <section id="hero" className=" pb-32"></section>

            <div className="relative">
                <h2 className="text-3xl ml-7 font-bold">Reviews</h2>{' '}
                {/* lägg till variabel för totala recensioner */}
                <hr className="my-2 border-blue-300"></hr>
            </div>

            <button
                class="bg-blue-500 ml-7 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
                className="text-white"
                onClick={() => setShowreviewpopup(true)}
            >
                Leave a review
            </button>

            <button class="bg-blue-500 ml-7  hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full ">
                <a href="/login" className="text-white">
                    Sign in
                </a>
            </button>

            <section id="hero" class=" pb-10"></section>
        </div>
    );
};

export default Content;
