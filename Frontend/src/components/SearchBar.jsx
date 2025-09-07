import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showsearch, setShowsearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection') && showsearch) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location, showsearch]);

    return showsearch && visible ? (
        <div className="border-t border-b bg-gray-50 text-center py-4">
            <div className="inline-flex items-center justify-center border border-gray-300 px-4 py-2 my-4 mx-3 rounded-full w-11/12 sm:w-3/4 md:w-1/2 bg-white shadow-sm">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 outline-none bg-transparent text-sm sm:text-base px-2"
                    type="text"
                    placeholder="Search"
                />
                <img className="w-5 sm:w-6 cursor-pointer" src={assets.search_icon} alt="Search" />
            </div>
            <img
                onClick={() => setShowsearch(false)}
                className="inline w-5 sm:w-6 cursor-pointer mt-2"
                src={assets.cross_icon}
                alt="Close"
            />
        </div>
    ) : null;
};

export default SearchBar;
