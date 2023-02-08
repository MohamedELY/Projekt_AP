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

    return (
        <form className="max-w-sm px-4" onSubmit={handleSubmit}>
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    required
                    minLength="1"
                    type="search"
                    placeholder="Where or what do you want to visit?"
                    onChange={handleChange}
                    value={searchInput}
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-zinc-200"
                />
            </div>
        </form>
    );
};

export default SearchBar;
