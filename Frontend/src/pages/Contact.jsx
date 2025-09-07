import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Contact Title */}
      <div className="text-center text-3xl font-bold py-8">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Contact Info Section */}
      <div className="my-10 flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16 mb-28">
        <img
          className="w-full md:w-2/5 rounded-lg shadow-md"
          src={assets.contact_img}
          alt="Contact Us"
        />
        <div className="flex flex-col justify-center items-start gap-4 md:w-3/5 text-gray-600">
          <p className="font-semibold text-xl sm:text-2xl text-gray-700">Our Store</p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            54709 Willms Station<br />
            Suite 350, Washington, US
          </p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Tel: (415) 555-0132 <br />
            Email: admin@forever.com
          </p>

          <p className="font-semibold text-xl sm:text-2xl text-gray-700 mt-4">Careers at Forever</p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
};

export default Contact;
