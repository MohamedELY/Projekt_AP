import { useState } from 'react';
import { APICreatePlace } from '../api/place';
import { CheckLoggedInUser } from '../session/user';


const CreatePageForm = ({ categorys }) => {
    const [placeInfo, setPlaceInfo] = useState({
        name: '',
        location: '',
        address: '',
        category: 'Restaurant',
        country: '',
        pic: '',
    });

    
    const submitHandler = (e) => {
        e.preventDefault();

            APICreatePlace(placeInfo);

            if(window.confirm("Your Location has been created")){
                window.history.back();
              } 
       
        
    };

    return (
        <form onSubmit={submitHandler}>
            <section className="pt-24 mb-56">
                <div className="mx-20 md:mx-60">
                    <div className="bg-gradient-to-r from-blue-500 to-neutral-900 p-2 rounded-md drop-shadow-lg">
                        <p className="text-white font-bold drop-shadow-lg">
                            ADD NEW LOCATION
                        </p>
                    </div>

                    <div className="flex flex-row flex-wrap justify-center ">
                        <div className="w-96 flex flex-col  px-4 ">
                            <p className="mt-2 font-medium text-lg">Name</p>
                            <input
                                onChange={(e) =>
                                    setPlaceInfo({
                                        ...placeInfo,
                                        name: e.target.value,
                                    })
                                }
                                value={placeInfo.name}
                                type="text"
                                id="Username"
                                className="py-1 border rounded-lg bg-white border-black text-black text-lg"
                                required
                            ></input>
                            <p className="my-2 font-medium text-lg">
                                Picture linq
                            </p>
                            <input
                                onChange={(e) =>
                                    setPlaceInfo({
                                        ...placeInfo,
                                        pic: e.target.value,
                                    })
                                }
                                value={placeInfo.pic}
                                type="text"
                                id="Pic"
                                className="py-1 border rounded-lg bg-white border-black text-black text-lg"
                                required
                            ></input>
                        </div>

                        <div className="w-96 flex flex-col px-4">
                            <p className="mt-2 font-medium text-lg">Address</p>
                            <input
                                onChange={(e) =>
                                    setPlaceInfo({
                                        ...placeInfo,
                                        address: e.target.value,
                                    })
                                }
                                value={placeInfo.address}
                                type="text"
                                id="Username"
                                className="py-1 border rounded-lg bg-white border-black text-black text-lg"
                                required
                            ></input>
                            <p className="my-2 font-medium text-lg">City</p>
                            <input
                                onChange={(e) =>
                                    setPlaceInfo({
                                        ...placeInfo,
                                        location: e.target.value,
                                    })
                                }
                                value={placeInfo.location}
                                type="text"
                                id="Username"
                                className="py-1 border rounded-lg bg-white border-black text-black text-lg"
                                required
                            ></input>
                            <div className="flex flex-row">
                                <div>
                                    <p className="mt-2 font-medium text-lg">
                                        Country
                                    </p>
                                    <input
                                        onChange={(e) =>
                                            setPlaceInfo({
                                                ...placeInfo,
                                                country: e.target.value,
                                            })
                                        }
                                        value={placeInfo.country}
                                        type="text"
                                        id="Username"
                                        className="py-1 w-52 border rounded-lg bg-white border-black text-black text-lg"
                                        required
                                    ></input>
                                </div>
                                <div>
                                    <p className="mt-2 ml-4 font-medium text-lg">
                                        Category
                                    </p>
                                    <select
                                        className="py-1.5 ml-4 w-32 border rounded-lg bg-white border-black text-black text-lg"
                                        name="Categories"
                                        id="slctCat"
                                        onChange={(e) =>
                                            setPlaceInfo({
                                                ...placeInfo,
                                                category: e.target.value,                                               
                                            })
                                        }
                                    >
                                        {categorys.map((cat) => {
                                            return <option>{cat}</option>;
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end mt-6">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 p-2 mt-10 rounded-md text-white font-bold text-lg drop-shadow-lg"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default CreatePageForm;
