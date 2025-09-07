import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestproducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <div className="my-10 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-800">
                <div className="text-3xl font-bold py-8">
                    <Title text1="LATEST" text2="COLLECTIONS" />
                </div>
                <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    "Our e-commerce platform showcases the latest products added to the store, ensuring customers always have access to the newest trends. The system automatically fetches and displays the most recent items, providing a dynamic and up-to-date shopping experience."
                </p>
            </div>

            {/* Rendering the products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-8">
                {latestproducts.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
