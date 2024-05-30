import React from 'react'
import Layout from '../components/Layout'
import banner from '../imgs/banner.jpg'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { LuStickyNote } from "react-icons/lu";
import { FaDownload } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const MyAccount = () => {
  return (
    <Layout>
      <div className="relative">
       <div className="absolute lg:inset-0 flex left-2 md:py-16 pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:p-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-6">My Account</p>
            <div className="flex gap-2">
              <NavLink to="/" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <NavLink to="/myaccount" className="text-lg ">
                My Account
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={banner} alt="contactus" className="w-full md:h-auto h-[20vh]" />
        </div>
      </div>

      <div className='flex gap-[2rem] px-[2rem] py-[2rem]'>
           <div className='lg:w-[30%] lg:h-[90vh]'>
              <table className="border rounded-lg">
              <tbody>
                  <tr className="border-t border-gray-200">
                      <th className="px-12 py-4 text-left text-white text-sm bg-[#5F3AFC]">Dashboard</th>
                      <td className="px-12 py-4 text-xs text-end bg-[#5F3AFC] text-white"><FaHome className='text-lg' /></td>
                  </tr>
                  <tr className="border-t border-gray-200">
                      <th className="px-12 py-4 text-left text-black text-xs">Orders</th>
                      <td className="px-12 py-4 text-xs text-end"><LuStickyNote className='text-lg' /></td>
                  </tr>
                  <tr className="border-t border-gray-200">
                      <th className="px-12 py-4 text-left text-black text-xs">Downloads</th>
                      <td className="px-12 py-4 text-xs text-end"><FaDownload className='text-lg' /></td>
                  </tr>
                  <tr className="border-t border-gray-200">
                      <th className="px-12 py-4 text-left text-black text-xs">Address</th>
                      <td className="px-12 py-4 text-xs text-end"><FaLocationDot className='text-lg' /></td>
                  </tr>
                  <tr className="border-t border-gray-200">
                      <th className="px-12 py-4 text-left text-black text-xs">Account Details</th>
                      <td className="px-12 py-4 text-xs text-end"><FaUser className='text-lg' /></td>
                  </tr>
                  <tr className="border-t border-gray-200">
                      <th className="px-12 py-4 text-left text-black text-xs">Logout</th>
                      <td className="px-12 py-4 text-xs text-end"><FiLogOut className='text-lg' /></td>
                  </tr>
              </tbody>
                </table>

            </div> 
            <div className='p-[2rem] border-2 border-gray-100 lg:h-[30vh] w-[70%]'>
                <h1 className='my-2 font-bold text-2xl'>Dashboard</h1>
                <p className='text-sm'>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
            </div>

        
      </div>
    </Layout>
  )
}

export default MyAccount
