import React from 'react'
import Layout from '../../components/Layout'
import banner from '../../imgs/banner.jpg'
import { NavLink } from 'react-router-dom'
import ShopCatePost from '../../components/ShopComp/ShopCatePost'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";


const Blogdetails = () => {
  return (
    <Layout>
       <div className="relative">
       <div className="absolute lg:inset-0 flex left-2 md:py-16 pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:p-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-6">Blog Details</p>
            <div className="flex gap-2">
              <NavLink to="/" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <NavLink to="/blogdetails" className="text-lg ">
                Blog Details
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={banner} alt="banner" className="w-full md:h-auto h-[20vh]" />
        </div>
      </div>

      <div className='lg:flex ;g:justify-between px-[2rem] py-[3rem] gap-[1rem]'>
            <div className='lg:w-[70%]'>
            <div className="flex">
        <img src='https://preetheme.com/html/bhouse/assets/img/blog/1.jpg' alt="BD1" className="w-full" />
      </div>
      <div className="flex pt-2">
        <FaCalendarAlt className="text-[#5F3AFC] ml-10 my-4" />
        <span className="ml-2 my-3 text-gray-600">12 September 2021</span>

        <FaTags className="text-[#5F3AFC] ml-10 my-4" />
        <span className="ml-2 my-3 text-sky-600">Technology</span>
      </div>
      <div className="px-10 w-full ">
        <p className="text-[#0B2B3C] font-bold text-2xl">
          What’s the Holding Back the It Solution Industry?
        </p>
        <p className="pt-2 text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <p className="pt-4 text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </div>
      <div className="mx-8 md:flex mt-4  ">
        <img src='https://preetheme.com/html/bhouse/assets/img/blog/2.jpg' alt="" className="md:w-1/2 p-2" />
        <img src='https://preetheme.com/html/bhouse/assets/img/blog/3.jpg' alt="" className="md:w-1/2 p-2" />
      </div>
      <div className="px-10 w-full ">
        <p className="pt-2 text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <p className="pt-4 text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </div>
      <div className="mt-10 flex">
        <label htmlFor="tag" className="font-medium px-9">
          Tags:{" "}
        </label>
        <button className="hover:bg-indigo-700 hover:text-white text-gray-800 font-bold text-sm py-2 px-4 flex items-center">
          HTML5
        </button>
        <button className="hover:bg-indigo-700 hover:text-white text-gray-800 font-bold text-sm py-2 px-4 flex items-center">
          IT
        </button>
        <button className="hover:bg-indigo-700 hover:text-white text-gray-800 font-bold text-sm py-2 px-4 flex items-center">
          TECHNOLOGY
        </button>
      </div>
      <div className="mt-8 flex mb-10">
        <label htmlFor="tag" className="font-medium px-9">
          Share:{" "}
        </label>
        <button className="hover:bg-indigo-700 hover:text-white text-gray-800 font-bold text-sm py-2 px-4 flex items-center">
          <FaFacebookF />
        </button>
        <button className="hover:bg-indigo-700 hover:text-white text-gray-800 font-bold text-sm py-2 px-4 flex items-center">
          <FaTwitter />
        </button>
        <button className="hover:bg-indigo-700 hover:text-white text-gray-800 font-bold text-sm py-2 px-4 flex items-center">
          <FaInstagram />
        </button>
        <button className="hover:bg-indigo-700 hover:text-white text-gray-800 font-bold text-sm py-2 px-4 flex items-center">
          <FaLinkedin />
        </button>
      </div>

      <div className="p-2 pt-4 w-full border border-gray-200">
        <p className="text-[#0B2B3C] font-bold text-2xl">03 Comments</p>
        <div className="flex items-start pt-4">
          <img src='https://preetheme.com/html/bhouse/assets/img/user-1.png' alt="" className="w-20 h-20 mr-4" />
          <div>
            <p className="font-bold">Jonathom Doe</p>
            <p className="text-sm">September 19, 2021 at 11:25 am</p>
            <p className="text-gray-500 text-xs">
              Aenean volutpat sed lacus eu faucibus. Quisque nunc dui, finibus
              at bibendum et, egestas eget lectus. Ut iaculis tempor risus a
              dictum. Aenean volutpat sed lacus eu faucibus. Quisque nunc dui,
              finibus at bibendum et, egestas eget lectus. Ut iaculis tempor
              risus a dictum.
            </p>
            <button className="hover:text-indigo-700 border mt-4 rounded-full hover:border-gray-600 text-gray-800 font-bold text-sm py-2 px-4 flex items-center">
              Reply
            </button>
          </div>
        </div>

        <div className="flex items-start pl-20 pt-6">
          <img src='https://preetheme.com/html/bhouse/assets/img/user-1.png' alt="" className="w-20 h-20 mr-4" />
          <div>
            <p className="font-bold">Jonathom Doe</p>
            <p className="text-sm">September 19, 2021 at 11:25 am</p>
            <p className="text-gray-500 text-xs">
              Aenean volutpat sed lacus eu faucibus. Quisque nunc dui, finibus
              at bibendum et, egestas eget lectus. Ut iaculis tempor risus a
              dictum. Aenean volutpat sed lacus eu faucibus. Quisque nunc dui,
              finibus at bibendum et, egestas eget lectus. Ut iaculis tempor
              risus a dictum.
            </p>
            <button className="hover:text-indigo-700 border mt-4 rounded-full hover:border-gray-600 text-gray-800 font-bold text-sm py-2 px-4 flex items-center">
              Reply
            </button>
          </div>
        </div>
        <div className="flex items-start pt-6">
          <img src='https://preetheme.com/html/bhouse/assets/img/user-1.png' alt="" className="w-20 h-20 mr-4" />
          <div>
            <p className="font-bold">Jonathom Doe</p>
            <p className="text-sm">September 19, 2021 at 11:25 am</p>
            <p className="text-gray-500 text-xs">
              Aenean volutpat sed lacus eu faucibus. Quisque nunc dui, finibus
              at bibendum et, egestas eget lectus. Ut iaculis tempor risus a
              dictum. Aenean volutpat sed lacus eu faucibus. Quisque nunc dui,
              finibus at bibendum et, egestas eget lectus. Ut iaculis tempor
              risus a dictum.
            </p>
            <button className="hover:text-indigo-700 border mt-4 rounded-full hover:border-gray-600 text-gray-800 font-bold text-sm py-2 px-4 flex items-center">
              Reply
            </button>
          </div>
        </div>
      </div>
      <div className="md:mx-8 p-2 w-full border my-8 border-gray-200">
        <p className="text-[#0B2B3C] font-bold text-2xl my-2">
          Leave Your Comment Here
        </p>
        <div className="py-4 mx-4">
          <textarea
            id="message"
            className="border border-gray-200 block w-full text-gray-600 text-sm"
            placeholder="Write Comment"
            rows="4"
          ></textarea>
        </div>
        <div className="py-4 mx-4">
          <input
            type="text"
            id="name"
            className="border border-gray-200 p-4 block w-full text-gray-600 text-sm"
            placeholder="Your Name"
          />
        </div>
        <div className="py-4 mx-4">
          <input
            type="email"
            id="email"
            className="border border-gray-200 p-4 block w-full text-gray-600 text-sm"
            placeholder="Your Email"
          />
        </div>
        <div className="py-4 mx-4">
          <input
            type="text"
            id="subject"
            className="border border-gray-200 p-4 block w-full text-gray-600 text-sm"
            placeholder="Your Subject"
          />
        </div>
        <button className="hover:bg-indigo-700 bg-[#0B2B3C] text-white hover:text-white font-bold text-sm my-8 py-4 px-4 flex items-center">
          SUBMIT COMMENT
        </button>
      </div>
            </div>
            
            <div className='lg:w-[30%]'>
                <ShopCatePost />
            </div>
        </div>
    </Layout>
  )
}

export default Blogdetails
