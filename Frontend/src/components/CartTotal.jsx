import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className="w-full bg-white rounded-lg shadow-sm p-5 sm:p-6 text-gray-700">
            <div className="text-3xl font-bold py-8">
                <Title text1="CART" text2="TOTALS" />
            </div>

            <div className="flex flex-col gap-4 text-sm sm:text-base">
                
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                    <p>Subtotal</p>
                    <p>{currency} {getCartAmount()}.00</p>
                </div>
                
                <hr className="border-gray-200" />

                {/* Shipping Fee */}
                <div className="flex justify-between items-center">
                    <p>Shipping Fee</p>
                    <p>{currency} {delivery_fee}.00</p>
                </div>
                
                <hr className="border-gray-200" />

                {/* Total */}
                <div className="flex justify-between items-center font-semibold text-base">
                    <p>Total</p>
                    <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
