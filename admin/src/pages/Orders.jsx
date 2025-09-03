import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendURL, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(
        backendURL + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) setOrders(response.data.orders.reverse());
      else toast.error(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendURL + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) await fetchAllOrders();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]); // eslint-disable-line

  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">Order Page</h3>

      <div className="space-y-3">
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start rounded-2xl border border-slate-200 bg-white/80 p-5 md:p-6 text-xs sm:text-sm text-slate-700 transition hover:shadow-md"
          >
            <img className="w-12" src={assets.parcel_icon} alt="" />

            <div>
              <div className="text-slate-800">
                {order.items.map((item, idx) => (
                  <p className="py-0.5" key={idx}>
                    {item.name} x {item.quantity}{" "}
                    <span className="text-slate-500">{item.size}</span>
                    {idx !== order.items.length - 1 ? "," : ""}
                  </p>
                ))}
              </div>

              <p className="mt-3 mb-1 font-semibold">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="space-y-0.5">
                <p>{order.address.street + " , "}</p>
                <p>
                  {order.address.city +
                    " , " +
                    order.address.state +
                    " , " +
                    order.address.country +
                    " , " +
                    order.address.zipcode}
                </p>
              </div>
              <p className="mt-1">{order.address.phone}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm sm:text-[15px]">
                Items : {order.items.length}
              </p>
              <p className="mt-2">Method : {order.paymentMethod}</p>
              <p>
                Payment :{" "}
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full border text-xs ${
                    order.payment
                      ? "bg-green-100 text-green-700 border-green-200"
                      : "bg-yellow-100 text-yellow-700 border-yellow-200"
                  }`}
                >
                  {order.payment ? "Done" : "Pending"}
                </span>
              </p>
              <p>Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <p className="text-sm sm:text-[15px] font-semibold">
              {currency}
              {order.amount}
            </p>

            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 rounded-xl font-semibold border border-slate-300 bg-white focus:ring-2 focus:ring-violet-400/70"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
