import React, { useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";
import { backendURL } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendURL + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setSizes([]);
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const UploadBox = ({ file, onChange, id }) => (
    <label
      htmlFor={id}
      className="relative w-24 h-24 rounded-xl border-2 border-dashed border-slate-300 grid place-content-center text-xs text-slate-500 cursor-pointer transition hover:border-violet-400 hover:bg-violet-50/50"
    >
      {file ? (
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
          src={URL.createObjectURL(file)}
          alt=""
        />
      ) : (
        <>
          <img src={assets.upload_area} className="w-8 opacity-70" alt="" />
          <span className="mt-1">Upload</span>
        </>
      )}
      <input onChange={onChange} type="file" id={id} hidden />
    </label>
  );

  const chip = (label) => (
    <div
      onClick={() =>
        setSizes((prev) =>
          prev.includes(label)
            ? prev.filter((i) => i !== label)
            : [...prev, label]
        )
      }
      className={`px-3 py-1 rounded-full border text-sm transition cursor-pointer select-none ${
        sizes.includes(label)
          ? "bg-violet-600 text-white border-violet-600"
          : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
      }`}
    >
      {label}
    </div>
  );

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-4"
    >
      <div>
        <p className="mb-2 font-medium text-slate-700">Upload Image</p>
        <div className="flex gap-3">
          <UploadBox
            file={image1}
            onChange={(e) => setImage1(e.target.files[0])}
            id="image1"
          />
          <UploadBox
            file={image2}
            onChange={(e) => setImage2(e.target.files[0])}
            id="image2"
          />
          <UploadBox
            file={image3}
            onChange={(e) => setImage3(e.target.files[0])}
            id="image3"
          />
          <UploadBox
            file={image4}
            onChange={(e) => setImage4(e.target.files[0])}
            id="image4"
          />
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2 text-slate-700 font-medium">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2 rounded-xl border border-slate-200 bg-white outline-none transition focus:ring-2 focus:ring-violet-400/70"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2 text-slate-700 font-medium">Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2 rounded-xl border border-slate-200 bg-white outline-none transition focus:ring-2 focus:ring-violet-400/70"
          placeholder="Write Content here"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:gap-8">
        <div>
          <p className="mb-2 text-slate-700 font-medium">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-violet-400/70"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2 text-slate-700 font-medium">Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-violet-400/70"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2 text-slate-700 font-medium">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[140px] rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-violet-400/70"
            type="Number"
            placeholder="25"
          />
        </div>
      </div>

      <div>
        <p className="mb-2 text-slate-700 font-medium">Product Sizes</p>
        <div className="flex flex-wrap gap-2">{["S", "M", "L", "XL", "XXL"].map(chip)}</div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="h-4 w-4 accent-violet-600"
        />
        <label className="cursor-pointer text-slate-700" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      <button
        className="w-32 py-3 mt-2 rounded-xl text-white font-semibold shadow-md transition hover:shadow-lg active:scale-[.99] bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
