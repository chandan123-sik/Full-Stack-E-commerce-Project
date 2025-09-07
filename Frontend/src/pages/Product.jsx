import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t-2 pt-10 px-4 sm:px-8 lg:px-16 transition-opacity duration-500 opacity-100">
      {/* Product Section */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
        {/* Images */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-1">
          <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto sm:w-[80px]">
            {productData.image.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${productData.name} ${idx}`}
                onClick={() => setImage(img)}
                className="w-20 sm:w-full h-20 sm:h-20 object-contain cursor-pointer border rounded-md hover:border-orange-500 transition"
              />
            ))}
          </div>

          <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg p-4">
            <img
              className="w-full max-w-[300px] h-[300px] sm:max-w-[400px] sm:h-[400px] md:max-w-[450px] md:h-[450px] object-contain"
              src={image}
              alt={productData.name}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col">
          <h1 className="font-semibold text-2xl sm:text-3xl">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3, 4].map((_, i) => (
              <img key={i} src={assets.star_icon} className="w-4 sm:w-5" alt="star" />
            ))}
            <img src={assets.star_dull_icon} className="w-4 sm:w-5" alt="star" />
            <p className="pl-2 text-sm sm:text-base">(122)</p>
          </div>

          <p className="mt-5 text-3xl sm:text-4xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-600 sm:w-4/5">{productData.description}</p>

          {/* Size Selection */}
          <div className="flex flex-col gap-4 my-6">
            <p className="font-medium">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSize(item)}
                  className={`border rounded-md px-4 py-2 transition ${
                    item === size ? 'border-orange-500 bg-orange-100' : 'bg-gray-100'
                  } hover:border-orange-500`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button aligned left below sizes */}
          <div className="mt-4">
            <button
              onClick={() => addToCart(productData._id, size)}
              className="bg-black text-white px-6 py-3 text-sm sm:text-base rounded-md hover:bg-gray-800 transition-colors"
            >
              ADD TO CART
            </button>
          </div>

          <hr className="mt-8 sm:w-4/5" />

          {/* Highlights */}
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 sm:text-base">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="mt-16">
        <div className="flex border-b">
          <b className="px-5 py-3 text-sm sm:text-base">Description</b>
          <p className="px-5 py-3 text-sm sm:text-base">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm sm:text-base text-gray-600">
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet.</p>
          <p>E-commerce websites typically display products or services along with detailed description, images, prices, and any available variations.</p>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  );
};

export default Product;
