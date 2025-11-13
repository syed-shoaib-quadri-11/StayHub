import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import '../index.css'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [open, setOpen] = useState(false)
  const [token, setToken] = useState(true)
  const dropdownRef = useRef(null)
  const navigate = useNavigate();


  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='w-48 cursor-pointer' src={assets.logo} alt="" />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'><li className='py-1'>HOME</li></NavLink>
        <NavLink to='/rooms'><li className='py-1'>ROOMS</li></NavLink>
        <NavLink to='/about'><li className='py-1'>ABOUT</li></NavLink>
        <NavLink to='/contact'><li className='py-1'>CONTACT</li></NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {
          token ? (
            <div className='flex items-center gap-2 cursor-pointer relative' ref={dropdownRef}>
              <img
                className='w-8 rounded-full'
                src={assets.profile_pic}
                alt='profile'
                onClick={() => setOpen(!open)}
              />
              <img
                className='w-2.5'
                src={assets.dropdown_icon}
                alt='dropdown'
                onClick={() => setOpen(!open)}
              />

              {open && (
                <div className='absolute top-12 right-0 text-base font-medium text-gray-600 z-20'>
                  <div className='min-w-38 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={() => navigate('my-bookings')} className='hover:text-black cursor-pointer'>My Booking</p>
                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block'
            >
              Create account
            </button>
          )
        }

        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden ' src={assets.menu_icon} alt="" />
        {/*.........Mobile View......*/}

        <div className={`${showMenu ? 'fixed w-full' : 'h-0 hidden  classNmae=""'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hiddden bg-white transition-all  `}>
          <div className='flex items-center justify-between px-5 py-6  '>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '><p></p>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className="px-4 py-2 rounded inline-block">Home</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='rooms'><p className="px-4 py-2 rounded inline-block">Rooms</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='about'><p className="px-4 py-2 rounded inline-block">About</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='contact'><p className="px-4 py-2 rounded inline-block">Contact</p></NavLink>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Navbar
