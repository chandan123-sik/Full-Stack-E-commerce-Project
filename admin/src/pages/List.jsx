import React, { useState, useEffect } from "react";
import { backendURL, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list", {
        headers: { token },
      });
      if (response.data.success) setList(response.data.products);
      else toast.error(response.data.message);
    } catch (error) {
      console.error("Error fetching list:", error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendURL + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <p className="mb-3 text-lg font-semibold text-slate-800">
        All Products List
      </p>

      <div className="flex flex-col gap-2">
        {/* header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 rounded-xl border bg-slate-100/80 text-sm font-semibold text-slate-700">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* rows */}
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-3 rounded-xl border border-slate-200 bg-white/80 text-sm transition hover:shadow-md hover:-translate-y-[1px]"
          >
            <img className="w-12 rounded-md" src={item.image[0]} alt="" />
            <p className="text-slate-800">{item.name}</p>
            <p className="text-slate-600">{item.category}</p>
            <p className="font-medium">{currency}{item.price}</p>

            <button
              onClick={() => removeProduct(item._id)}
              className="justify-self-end md:justify-self-center w-8 h-8 grid place-content-center rounded-full border border-red-200 text-red-600 hover:bg-red-50 hover:scale-110 transition"
              title="Delete"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
