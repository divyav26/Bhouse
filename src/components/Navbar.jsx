import React, { useState } from 'react'
import header from '../imgs/nav/headerlogo.svg'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { links } from '../Data/Info';
import { FaPhoneAlt } from "react-icons/fa";

import Nav from './Nav';

const Navbar = () => {
   
    const [open ,setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);

   
  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleSublink = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  

  return (
    <>
      <div className=''>
            <div className='bg-[#262626] py-[0.5rem] flex justify-between items-center px-[2rem]'>
                <img src={header} alt='' className='lg:w-[15%] md:w-[15%] w-[40%]' />
                <button className='bg-[#82B440] text-white p-[5px] text-sm rounded shadow-md'>Buy now</button>
            </div>

            <div className='bg-black text-white flex justify-between items-center px-[2rem] py-2'> 
                <div className='flex md:justify-between gap-[1rem] text-sm'>
                    <p className='flex items-center gap-2'><MdOutlineMailOutline className='text-blue-500' />aaradhyaproperties3@gmail.com</p>
                    <p className='flex items-center gap-2'><FaPhoneAlt className='text-blue-500' />+91 84540 50179</p>
                </div>

                <div className='lg:flex gap-[1rem] md:hidden sm:block hidden'>
                    <TiSocialFacebook  />
                    <FaTwitter />
                    <FaInstagram />
                    <FaVimeoV />
                </div>
            </div>

            <div className='lg:flex lg:justify-between lg:items-center px-[2rem] lg:py-4 py-[1rem] lg:gap-0 gap-[2rem] shadow-md w-full'>
                <div className='z-50'>
                    <img src='https://preetheme.com/html/bhouse/assets/img/logo.png' alt='' className='mx-auto w-[100px]' />
                </div>

                <div className='sm:block hidden z-10 '>
                    <Nav />
                </div>

                <div className='flex justify-center items-center gap-[2rem] lg:py-0 py-4'>
                    <IoIosMenu className='shadow-md text-4xl p-1 lg:hidden' onClick={()=>setOpen(!open)} /> 
                    <HiOutlineShoppingCart className='shadow-md text-4xl p-1' />
                    <IoIosSearch className='shadow-md text-4xl p-1'  />
                    <NavLink to='/signin'><CiUser className='shadow-md text-4xl p-1 font-thin'  /></NavLink>
                </div>
            </div>

        </div>

        {
            open && (
                <div className={`lg:hidden md:hidden bg-white w-[80%] z-10 fixed top-0 overflow-y-auto bottom-0 py-10 pl-4 ${open ? 'block' : 'hidden'}`}>
      <div className='z-10 pb-[2rem] flex justify-between items-center pr-6'>
      <img src='https://preetheme.com/html/bhouse/assets/img/logo.png' alt='' className='mx-auto w-[100px]' />
        <div>
          <RxCross2 className='text-2xl font-bold' onClick={() => setOpen(false)} />
        </div>
      </div>
      <div className="md:hidden">
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link, index) => (
            <li key={link.id} className="relative">
              <NavLink to={link.path} onClick={() => toggleDropdown(index)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-400">
                {link.title}
              </NavLink>
              {link.sublink && activeIndex === index && (
                <ul className="pl-4 space-y-1">
                  {link.sublink.map((sublink, subIndex) => (
                    <li key={subIndex}>
                      <NavLink to={sublink.link} onClick={() => toggleSublink(index)} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-400">{sublink.name}</NavLink>
                      {sublink.children && activeIndex === index && (
                        <ul className="pl-4 space-y-1">
                          {sublink.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              <NavLink to={child.link} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-800">{child.name}</NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
             )
        }
        
        
    </>
  )
}

export default Navbar