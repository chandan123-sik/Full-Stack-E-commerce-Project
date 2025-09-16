import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from "../assets/assets";
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    const { setShowsearch, getCartCount, token, setToken, navigate, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
        setDropdownOpen(false); // Logout par dropdown band ho
    };

    // Bahar click karne par dropdown band ho
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center justify-between py-4 px-5 sm:px-8 font-medium bg-white shadow-sm sticky top-0 z-50">
            {/* Logo */}
            <Link to="/">
                <img src={assets.logo} alt="Logo" className="w-36" />
            </Link>

            {/* Menu Links for larger screens */}
            <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
                <NavLink to="/" className="flex flex-col items-center gap-1 hover:text-blue-500">
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/collection" className="flex flex-col items-center gap-1 hover:text-blue-500">
                    <p>COLLECTION</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/about" className="flex flex-col items-center gap-1 hover:text-blue-500">
                    <p>ABOUT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/contact" className="flex flex-col items-center gap-1 hover:text-blue-500">
                    <p>CONTACT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-5 sm:gap-6">
                <img
                    onClick={() => setShowsearch(true)}
                    src={assets.search_icon}
                    alt="Search"
                    className="w-5 cursor-pointer hover:opacity-75 transition-opacity"
                />

                {/* Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <img
                        onClick={() => {
                            if (token) {
                                setDropdownOpen(prev => !prev); // Toggle dropdown
                            } else {
                                navigate('/login');
                            }
                        }}
                        src={assets.profile_icon}
                        alt="Profile"
                        className="w-5 cursor-pointer hover:opacity-75 transition-opacity"
                    />
                    {token && dropdownOpen &&
                        <div className="absolute right-0 mt-2 w-36 py-3 px-4 bg-gray-100 rounded shadow-lg text-gray-700">
                            <p className="cursor-pointer hover:text-blue-500">My Profile</p>
                            <p onClick={() => navigate("/order")} className="cursor-pointer hover:text-blue-500">Orders</p>
                            <p onClick={logout} className="cursor-pointer hover:text-blue-500">Logout</p>
                        </div>
                    }
                </div>

                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} alt="Cart" className="w-5 min-w-5 hover:opacity-75 transition-opacity" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-[8px] text-center leading-4 bg-black text-white rounded-full aspect-square">{getCartCount()}</p>
                </Link>

                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    alt="Menu"
                    className="w-5 cursor-pointer sm:hidden hover:opacity-75 transition-opacity"
                />
            </div>

            {/* Sidebar for mobile */}
            <div className={`fixed top-0 right-0 bottom-0 bg-white overflow-hidden transition-all duration-300 ease-in-out ${visible ? 'w-64' : 'w-0'}`}>
                <div className="flex flex-col text-gray-700 h-full">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100">
                        <img src={assets.dropdown_icon} alt="Back" className="h-4 rotate-180" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 hover:bg-gray-100 border-t" to="/">HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 hover:bg-gray-100 border-t" to="/collection">COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 hover:bg-gray-100 border-t" to="/about">ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 hover:bg-gray-100 border-t" to="/contact">CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
