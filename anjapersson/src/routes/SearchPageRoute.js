import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { APIGetLocaionBySearch } from '../api/location';
import { useState, useEffect } from 'react';
import { SetChoosenPlace } from '../session/choosenPlace';

const SearchPageRoute = () => {
    const [locations, setLocations] = useState({});

    const getData = async (searchValue) => {
        if (searchValue === undefined || searchValue == null) {
            searchValue = ' ';
        }

        const data = await APIGetLocaionBySearch(searchValue);
        console.log(data);
        setLocations(data);
    };

    useEffect(() => {
        getData();
    }, []);

    function SelectedPlace(id) {
        SetChoosenPlace(id);
        window.open('/content', '_self');
    }

    return (
        <div>
            <NavBar />
            <section className="pt-20 pb-40">
                <div className="mx-20">
                    <div className="flex flex-row-reverse justify-between items-center bg-gradient-to-r from-blue-500 to-neutral-900 p-2 rounded-md">
                        <SearchBar findLocations={getData} />
                        <p className="text-white font-bold">City</p>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center ">
                        <div className="w-96 flex flex-col  px-4 ">
                            <p
                                className="bg-gradient-to-r from-blue-500 to-neutral-900 p-2 rounded-md 
                                text-white font-bold text-lg flex justify-center mt-6"
                            >
                                Hotels
                            </p>
                            <div id="listview">
                                {locations.length > 0 && (
                                    <ul>
                                        {locations.map((place) => (
                                            <li value={place.id} key={place.id}><button onClick={() => SelectedPlace(place.id)}>{place.place}</button></li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default SearchPageRoute;
