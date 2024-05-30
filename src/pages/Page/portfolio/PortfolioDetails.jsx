import React from 'react'
import Layout from '../../../components/Layout'
import contactus from '../../../imgs/banner.jpg'
import { NavLink } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const PortfolioDetails = () => {
  return (
    <Layout>
        <div className="relative">
       <div className="absolute inset-0 flex left-2 md:py-20 pt-1">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:px-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-4">Portfolio Details</p>
            <div className="flex gap-2">
              <NavLink to="/" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <NavLink to="/portfoliodetals" className="text-lg ">
              Portfolio Details
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={contactus} alt="contactus" className="w-full md:h-auto" />
        </div>
        </div>

        <div className='lg:flex lg:justify-between py-[2rem] px-[2rem] w-full'>
            <div className='lg:w-[70%]'>
                <div className=''>
                    <img src='https://preetheme.com/html/bhouse/assets/img/pd.jpg' alt='' className='lg:h-[80vh]'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte ursint occaecat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte ursint occaecat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>
                    <div className='flex gap-8 pt-[2rem]'>
                        <img src='https://preetheme.com/html/bhouse/assets/img/portfolio/1.jpg' alt='' className='w-[40%]'/>
                        <img src='https://preetheme.com/html/bhouse/assets/img/portfolio/2.jpg' alt='' className='w-[40%]'/>
                    </div>
                        <p className='text-sm py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte ursint occaecat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte ursint occaecat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className='text-sm py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte ursint occaecat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte ursint occaecat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                </div>

            </div>
            <div className='lg:w-[30%] shadow-md lg:h-[80vh]'>
                  <h1 className="text-2xl font-bold m-3">Project Information</h1>

              <table className="border rounded-lg">
              <tbody>
                  <tr className="border-t border-gray-200">
                      <th className="px-2 py-2 text-left text-black text-xs">Customer Name</th>
                      <td className="px-2 py-2 text-xs">Steven John</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                      <th className="px-2 py-2 text-left text-black text-xs">Category</th>
                      <td className="px-2 py-2 text-xs">Design</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                      <th className="px-2 py-2 text-left text-black text-xs">Size</th>
                      <td className="px-2 py-2 text-xs">600 Sq Ft</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                      <th className="px-2 py-2 text-left text-black text-xs">Rooms</th>
                      <td className="px-2 py-2 text-xs">7</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                      <th className="px-2 py-2 text-left text-black text-xs">Baths</th>
                      <td className="px-2 py-2 text-xs">3</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                      <th className="px-2 py-2 text-left text-black text-xs">Date</th>
                      <td className="px-2 py-2 text-xs">23 October 2021</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                      <th className="px-2 py-2 text-left text-black text-xs">Status</th>
                      <td className="px-2 py-2 text-xs">In Process</td>
                  </tr>
                  <tr className="border-t border-gray-200 text-xs">
                      <th className="px-2 py-2 text-left text-black text-xs">Demo Link</th>
                      <td className="px-2 py-2"><NavLink to="https://www.example.com" class="text-blue-500 hover:underline">https://www.example.com</NavLink></td>
                  </tr>
                  <tr className="border-t border-gray-200 text-xs">
                      <th className="px-2 py-2 text-left text-black text-xs">Tags:</th>
                      <td className="px-2 py-2 text-[#0D9EFE]">Html,Css,Php</td>
                  </tr>
                  <tr className="border-t border-gray-200 text-xs">
                      <th className="px-2 py-2 text-left text-black text-xs">Share</th>
                      <td className="px-2 py-2 text-[#0D9EFE] flex gap-6">
                        <FaFacebookF className='border p-1 text-xl bg-[#0D9EFE] text-white hover:bg-white hover:text-[#0D9EFE]'/> 
                        <FaTwitter className='border p-1 text-xl bg-[#0D9EFE] text-white hover:bg-white hover:text-[#0D9EFE]'/>
                        <FaInstagram className='border p-1 text-xl bg-[#0D9EFE] text-white hover:bg-white hover:text-[#0D9EFE]'/>
                        <FaLinkedin className='border p-1 text-xl bg-[#0D9EFE] text-white hover:bg-white hover:text-[#0D9EFE]'/>
                      </td>
                  </tr>
              </tbody>
                </table>

            </div>
        </div>
    </Layout>
  )
}

export default PortfolioDetails
