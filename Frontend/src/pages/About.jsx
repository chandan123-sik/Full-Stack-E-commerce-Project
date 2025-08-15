import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img}></img>
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p className="break-words">"We provide a seamless and enjoyable online shopping experience, our products are carefully curated for quality and style."</p>
       <p className="break-words">"Customer satisfaction and trust are our top priorities, we stay updated with the latest trends to serve you better."</p>
       <b className='text-gray-800'>Our Mission</b>
       <p className="break-words">"Our mission is to deliver high-quality products that enrich our customers' lives. We aim to provide a seamless, reliable, and enjoyable shopping experience for everyone."</p>
      </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row gap-6 mb-20'>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1 overflow-hidden'>
           <b>Quality Assurance:</b>
            <p className='text-gray-600 break-words'>"We are committed to maintaining the highest standards of quality in every product. Each item is carefully inspected to ensure reliability, durability, and customer satisfaction."</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1 overflow-hidden'>
           <b>Convenience:</b>
            <p className='text-gray-600 break-words'>"We make shopping easy and hassle-free with a user-friendly interface and smooth checkout process. Enjoy shopping from anywhere, anytime, with just a few clicks."</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1 overflow-hidden'>
           <b>Exceptional Customer Service:</b>
            <p className='text-gray-600 break-words'>"Our dedicated support team is always ready to assist you, ensuring a seamless and satisfying shopping experience. We prioritize your needs and strive to exceed expectations at every step."</p>
           </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About