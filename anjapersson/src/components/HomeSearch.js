import { useState } from 'react';
import SearchBar from './SearchBar';
import { APIGetLocaionBySearch } from '../api/location';

import { SetChoosenPlace } from '../session/choosenPlace';

const HomeSearch = () => {
    const [locations, setLocations] = useState({});

    const getData = async (searchValue) => {
        if (searchValue === undefined || searchValue == null) {
            searchValue = ' ';
        }
        
        const data = await APIGetLocaionBySearch(searchValue);
       
           if (data.length === 0) {
            window.confirm("Sorry, no place found. Search again...")
        }
        console.log(data);
        setLocations(data);

     
    };



    function SelectedPlace(id) {
        SetChoosenPlace(id);
        window.open('/content', '_self');
    }
   


    return (
        <section id="hero" className=" pb-72 ">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col justify-center">
                    <div className="flex items-end justify-center ">
                        <img
                            src="/img/tajmahal.png"
                            alt=""
                            className="h-20  rounded-md  opacity-60"
                        ></img>
                        <img
                            src="/img/frihetsgudinnan.jpg"
                            alt=""
                            className="h-3/6 rounded-md  opacity-60"
                        ></img>
                        <img
                            src="/img/eiffeltornet.jpg"
                            alt=""
                            className="h-3/5 rounded-md  opacity-60"
                        ></img>
                        <img
                            src="/img/bigben.jpg"
                            alt=""
                            className="h-4/5 rounded-md opacity-60 "
                        ></img>
                    </div>
                
                     

                <div className='flex justify-center'>
                    <SearchBar findLocations={getData} />
                </div>                     
                   
                <div className='flex justify-center mt-4'>
                    {locations.length > 0 && (
                        <div className='grid gap-1 grid-cols-2'>
                            {locations.map((place) => (
                                <div value={place.id} key={place.id}>
                                    <div className=" text-white flex flex-col">
                                        <button className='border border-black p-1 bg-gradient-to-r from-blue-400 to-neutral-800 hover:from-blue-500 hover:to-neutral-900 rounded-lg' onClick={() => SelectedPlace(place.id)}>    
                                            <p className='font-bold text-2xl'>{place.place}</p>
                                                <div className='flex flex-row justify-between'>
                                                    <p className='italic'>{place.location}</p>
                                                    <p>{place.country}</p>
                                                </div>
                                        </button>
                                    </div>
                                </div>    
                            ))}
                        </div> 
                    )}
                </div>
                                
                                       



            
                </div>
            </div>
        </section>
    );
};

export default HomeSearch;
