import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-10 sm:gap-6 text-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm md:text-base text-gray-700 bg-gray-50 rounded-lg shadow-sm">
      
      {/* Easy Exchange Policy */}
      <div className="flex flex-col items-center max-w-xs mx-auto">
        <img src={assets.exchange_icon} alt="Exchange" className="w-12 mb-4" />
        <p className="font-semibold mb-2">Easy Exchange Policy</p>
        <p className="text-gray-500 text-sm">We offer hassle free exchange policy</p>
      </div>

      {/* 7 Days Return Policy */}
      <div className="flex flex-col items-center max-w-xs mx-auto">
        <img src={assets.quality_icon} alt="Return" className="w-12 mb-4" />
        <p className="font-semibold mb-2">7 Days Return Policy</p>
        <p className="text-gray-500 text-sm">We provide 7 days free return policy</p>
      </div>

      {/* Best Customer Support */}
      <div className="flex flex-col items-center max-w-xs mx-auto">
        <img src={assets.support_img} alt="Support" className="w-12 mb-4" />
        <p className="font-semibold mb-2">Best Customer Support</p>
        <p className="text-gray-500 text-sm">We provide 24/7 customer support</p>
      </div>

    </div>
  );
};

export default OurPolicy;
