import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';
import { toast } from 'react-toastify';

const Order = () => {
  const { backendURL, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendURL + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16 px-4 sm:px-8 lg:px-16">
      <div className="text-3xl font-bold mb-8">
        <Title text1="MY" text2="ORDER" />
      </div>

      <div className="space-y-6">
        {orderData.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          orderData.map((item, index) => (
            <div
              key={index}
              className="py-4 border rounded-md shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4">
                <div className="flex items-start gap-4 sm:gap-6 text-sm sm:text-base">
                  <img
                    className="w-20 h-20 object-contain rounded-md"
                    src={item.image[0]}
                    alt={item.name}
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-700">
                      <p>
                        <span className="font-medium">{currency}</span>
                        {item.price}
                      </p>
                      <p>Qty: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className="mt-2 text-gray-500 text-sm">
                      Date: <span>{new Date(item.date).toDateString()}</span>
                    </p>
                    <p className="mt-1 text-gray-500 text-sm">
                      Payment: <span>{item.paymentMethod}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:gap-4 mt-4 md:mt-0">
                  <div className="flex items-center gap-2 mb-2 md:mb-0">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <p className="text-sm">{item.status}</p>
                  </div>
                  <button
                    onClick={loadOrderData}
                    className="border px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 transition-colors"
                  >
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Order;
