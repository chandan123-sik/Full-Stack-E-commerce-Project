import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 bg-white">
      
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-8 sm:py-16 px-5 sm:px-10">
        <div className="text-[#414141] text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start mb-4">
            <div className="w-8 md:w-11 h-[2px] bg-[#414141]"></div>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-6">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <p className="font-semibold text-sm md:text-base hover:text-blue-500 cursor-pointer">
              SHOP NOW
            </p>
            <div className="w-8 md:w-11 h-[1px] bg-[#414141]"></div>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2">
        <img
          src={assets.hero_img}
          alt="Hero"
          className="w-full h-auto object-cover"
        />
      </div>

    </div>
  );
};

export default Hero;
