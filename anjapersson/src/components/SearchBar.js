import { useState } from 'react';

const SearchBar = ({ findLocations }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        //console.log(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        findLocations(searchInput);
    };

    const clearSearchValue = (e) => {
        e.preventDefault();
        setSearchInput("");
        findLocations("searchInput");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative grid justify-items-stretch">
                <svg 
                    id="search"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute ml-1 top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0za"
                    />
                </svg>
                <input
                    required
                    minLength="1"
                    placeholder="Where or what do you want to visit?"
                    onChange={handleChange}
                    value={searchInput}
                    className="w-[26rem] py-3 pl-20 pr-4 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-zinc-200 "
                />
                <svg
                    id="close"
                    onClick={clearSearchValue} 
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 mr-1 mt-4 text-gray-400 justify-self-end rotate-45"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path 
                        d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                    />
                </svg>
            </div>
           
        </form>
    );
};

export default SearchBar;
