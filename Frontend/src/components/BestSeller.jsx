import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestproduct = products.filter((item) => item.bestseller);
        setBestSeller(bestproduct.slice(0, 5));
    }, [products]);

    return (
        <div className="my-10 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-800">
                <div className="text-3xl font-bold py-8">
                    <Title text1="BEST" text2="SELLERS" />
                </div>
                <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed break-words">
                    "Discover our top-selling products, loved by customers for their quality and popularity. Stay ahead with items that are trending and in high demand."
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-8">
                {bestSeller.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
