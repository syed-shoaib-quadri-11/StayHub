import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10' >
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
                {/*...........Left Section.................*/}
                <div>
                    <img className='w-40 mb-5 'src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600  leading-6'>
                        At StayHub, we make booking your perfect stay simple and reliable. With 100+ trusted listings, we offer safe, affordable, and comfortable stays for students, professionals, and travelers.
                    </p>
                </div>


                <div>
                    {/*...........Middile  Section.................*/}

                    <p className=' text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gape-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us </li>
                        <li>Contact Us</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>

                <div>
                    {/*...........right Section.................*/}
                    <p  className=' text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gape-2 text-gray-600'>
                        <li>+91 8971442162</li>
                        <li>syedshoaibquadri92@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025 @StayHub - All Right Reserved</p>
            </div>

        </div>
    )
}

export default Footer