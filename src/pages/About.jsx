import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p></div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full max-w-[360px]' src={assets.about_image} alt="" />

        <div className='flex flex-col justify-center gap-6 md:2/4 text-sm text-gray-600 '>
          <p>At Stay Hub, we believe that every stay should feel like home – warm, comfortable, and memorable. Whether you’re traveling for work, leisure, or adventure, our mission is to connect you with the perfect place that matches your lifestyle and needs.</p>
          <p>We bring together a curated selection of stays – from cozy rooms and serviced apartments to premium getaways – making it easier for you to find your ideal destination. With user-friendly search, trusted reviews, and seamless booking, Stay Hub ensures that your journey starts with comfort and confidence.</p>
          <b className='text-gray-800 '>Our Vision</b>
          <p>To redefine the way people experience travel and accommodation by providing accessible, reliable, and personalized stay options everywhere.</p>
        </div>
      </div>

      <div className='text-xl my-4 '>
        <p>WHY <span className='text-gray-700 font-semibold'> CHOOSE US</span></p>
      </div>


      <div className=' flex flex-col md:flex-row mb-20'>

        <div className='border rounded-3xl mt-2 px-10 md:px-16 ml-2 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF]  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer  '>
          <b>Affordable & Flexible:</b>
          <p>Every listing is verified and tailored to suit different lifestyles, from budget-friendly rooms to premium getaways.</p>
        </div>
        <div className='border rounded-3xl mt-2 px-10 md:px-16 ml-2 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF]  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer  '><b>Seamless Experience:</b>
          <p>Transparent pricing and flexible booking options that fit your travel plans.</p>
        </div>
        <div className='border rounded-3xl mt-2 px-10 md:px-16 ml-2 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF]  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer  '><b>Trusted & Secure:</b>
          <p>Easy search, quick booking, and hassle-free check-in to save you time.</p>
        </div>
        <div className='border rounded-3xl mt-2 px-10 md:px-16 ml-2 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF]  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer  '><b>Global Reach, Local Touch:</b>
          <p>Find stays worldwide while enjoying personalized experiences that feel like home.</p>
        </div>
      </div>
    </div>
  )
}

export default About