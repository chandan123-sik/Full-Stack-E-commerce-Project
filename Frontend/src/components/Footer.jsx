import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-white text-gray-700 py-10 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-10">
        
        {/* Logo & Description */}
        <div>
          <img src={assets.logo} alt="Logo" className="mb-5 w-32" />
          <p className="text-gray-600 text-sm md:text-base w-full md:w-2/3 break-words">
            "Connecting you with the best products, offers, and shopping experience online."
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About us</li>
            <li className="hover:text-blue-500 cursor-pointer">Delivery</li>
            <li className="hover:text-blue-500 cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-lg font-semibold mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">+1-212-456-789</li>
            <li className="hover:text-blue-500 cursor-pointer">contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-200">
        <p className="py-5 text-center text-gray-500 text-xs sm:text-sm">
          © 2024 forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
