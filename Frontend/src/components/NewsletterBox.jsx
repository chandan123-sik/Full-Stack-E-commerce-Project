import React from 'react';

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center px-4 sm:px-6 lg:px-16 py-10 bg-gray-50 rounded-xl shadow-md">
      <p className="text-2xl sm:text-3xl font-semibold text-gray-800">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed break-words">
        "Join our newsletter today and get an instant 20% off on your first purchase. Stay updated with the latest deals, products, and exclusive offers."
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-2/3 md:w-1/2 flex flex-col sm:flex-row items-center gap-3 mx-auto my-6 border border-gray-300 rounded-lg p-3 bg-white shadow-sm"
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full sm:flex-1 px-3 py-2 text-gray-700 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 sm:px-10 py-2 sm:py-3 rounded-md text-sm sm:text-base hover:bg-gray-800 transition-colors duration-300"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
