import React from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* About Section */}
      <div className="text-center text-3xl font-bold py-8">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        <img
          className="w-full md:w-2/5 rounded-lg shadow-md"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-4 md:w-3/5 text-gray-600">
          <p className="break-words text-base sm:text-lg leading-relaxed">
            "We provide a seamless and enjoyable online shopping experience, our
            products are carefully curated for quality and style."
          </p>
          <p className="break-words text-base sm:text-lg leading-relaxed">
            "Customer satisfaction and trust are our top priorities, we stay
            updated with the latest trends to serve you better."
          </p>
          <b className="text-gray-800 text-lg sm:text-xl mt-2">Our Mission</b>
          <p className="break-words text-base sm:text-lg leading-relaxed">
            "Our mission is to deliver high-quality products that enrich our
            customers' lives. We aim to provide a seamless, reliable, and
            enjoyable shopping experience for everyone."
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-20">
        <div className="border px-6 sm:px-10 md:px-12 py-6 sm:py-10 flex flex-col gap-3 flex-1 rounded-lg shadow-sm">
          <b className="text-gray-800 text-base sm:text-lg">Quality Assurance:</b>
          <p className="text-gray-600 break-words text-sm sm:text-base leading-relaxed">
            "We are committed to maintaining the highest standards of quality in every product. Each item is carefully inspected to ensure reliability, durability, and customer satisfaction."
          </p>
        </div>

        <div className="border px-6 sm:px-10 md:px-12 py-6 sm:py-10 flex flex-col gap-3 flex-1 rounded-lg shadow-sm">
          <b className="text-gray-800 text-base sm:text-lg">Convenience:</b>
          <p className="text-gray-600 break-words text-sm sm:text-base leading-relaxed">
            "We make shopping easy and hassle-free with a user-friendly interface and smooth checkout process. Enjoy shopping from anywhere, anytime, with just a few clicks."
          </p>
        </div>

        <div className="border px-6 sm:px-10 md:px-12 py-6 sm:py-10 flex flex-col gap-3 flex-1 rounded-lg shadow-sm">
          <b className="text-gray-800 text-base sm:text-lg">
            Exceptional Customer Service:
          </b>
          <p className="text-gray-600 break-words text-sm sm:text-base leading-relaxed">
            "Our dedicated support team is always ready to assist you, ensuring a seamless and satisfying shopping experience. We prioritize your needs and strive to exceed expectations at every step."
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterBox />
    </div>
  );
};

export default About;
