import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="text-gray-700 cursor-pointer group block transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="overflow-hidden rounded-xl shadow-md bg-white flex items-center justify-center p-4">
        <img
          className="w-full h-60 sm:h-64 md:h-72 lg:h-64 xl:h-72 object-contain transition-transform duration-300 group-hover:scale-105"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 text-sm sm:text-base font-medium text-gray-800 truncate">{name}</p>
      <p className="text-sm sm:text-base font-semibold text-gray-900">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;
