 import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
 import Title from './Title';
import { useEffect } from 'react';
import ProductItem from './ProductItem';
 const LatestCollection = () => {

   const {products} = useContext(ShopContext);
   const [latestproducts,setLatestProducts] = useState([]);

   useEffect(()=>{
       setLatestProducts(products.slice(0,10));
   },[products])
//    console.log(products);

   return (
     <div className='my-10'>
     <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}></Title>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          "Our e-commerce platform showcases the latest products added to the store, ensuring customers always have access to the newest trends. The system automatically fetches and displays the most recent items, providing a dynamic and up-to-date shopping experience."
        </p>
     </div>

     {/* rendering the products */}
     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        latestproducts.map((item,index)=>{
             return(
                <>
                    <ProductItem key={index} id= {item._id} image={item.image} name={item.name} price={item.price}></ProductItem>
                </>
             )
        })
      }

     </div>
     </div>
   )
 }
 
 export default LatestCollection