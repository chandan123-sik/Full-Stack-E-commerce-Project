import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cardItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cardItems) {
        for (const item in cardItems[items]) {
          if (cardItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cardItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cardItems, products]);

  return (
    <div className="border-t pt-14 px-4 sm:px-8 lg:px-16">
      {/* Cart Title */}
      <div className="text-3xl font-bold py-8">
        <Title text1="YOUR" text2="CART" />
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-4">
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_1fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <img className="w-16 sm:w-20 rounded-md" src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-3 sm:gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 rounded">{item.size}</p>
                  </div>
                </div>
              </div>

              <input
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === '' || e.target.value === '0'
                    ? null
                    : updateQuantity(item._id, item.size, Number(e.target.value))
                }
                className="border max-w-[60px] sm:max-w-[80px] px-2 py-1 rounded text-center"
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 sm:w-5 cursor-pointer ml-2 sm:ml-4"
                src={assets.bin_icon}
                alt="Remove item"
              />
            </div>
          );
        })}
      </div>

      {/* Cart Total & Checkout */}
      <div className="flex justify-end my-12">
        <div className="w-full sm:w-[450px]">
          <CartTotal />

          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-black text-white text-sm sm:text-base my-6 px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-gray-800 transition-colors duration-300"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
