import React from 'react'
import Layout from '../../components/Layout'
import banner from '../../imgs/banner.jpg'
import { NavLink } from 'react-router-dom'
import { RiAdminFill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import ShopCatePost from '../../components/ShopComp/ShopCatePost';
import Pagination from '../../components/ShopComp/Pagination';

const Blog = () => {
  return (
    <Layout>
       <div className="relative">
       <div className="absolute lg:inset-0 flex left-2 md:py-16 pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:p-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-6">News Feeds</p>
            <div className="flex gap-2">
              <NavLink to="/" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <NavLink to="/blog" className="text-lg ">
                Blog
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={banner} alt="banner" className="w-full md:h-auto h-[20vh]" />
        </div>
      </div>

      <section className="section-padding py-12">
        <div className="container mx-auto px-4">
          <div className="row lg:flex lg:justify-between gap-6">
            {/* Blog Content */}
            <div className="col-lg-8 w-full lg:w-[70%] px-3">
              <div className="row flex flex-wrap -mx-3 ">
                <div className="bg-white border rounded mb-4 lg:mb-10">
                  <div className="relative">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/blog/1.jpg"
                      alt="contactus"
                      className="lg:w-full"
                    />
                    <div className="absolute -bottom-9 right-0 mr-12 text-black bg-white shadow py-2 px-7">
                      <span className="flex flex-col items-center justify-center font-bold text-4xl">
                        31 <p className="text-base font-normal">Oct</p>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col px-4 py-6">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center gap-1">
                        <RiAdminFill className="text-[#5f3afc]" />
                        Admin
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        <FaTags className="text-[#5f3afc]" />
                        Technology
                      </span>
                    </div>
                    <h1 className="text-xl font-bold py-4">
                      Five Ways To Develop a World Class Sales Operations
                    </h1>
                    <p className='text-xs'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                    <p className="text-[#5f3afc] font-semibold uppercase py-4">
                      Read More &rarr;
                    </p>
                  </div>
                </div>

                <div className="bg-white border rounded mb-4 lg:mb-10">
                  <div className="relative">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/blog/2.jpg"
                      alt="contactus"
                      className="lg:w-full"
                    />
                    <div className="absolute -bottom-9 right-0 mr-12 text-black bg-white shadow py-2 px-7">
                      <span className="flex flex-col items-center justify-center font-bold text-4xl">
                        31 <p className="text-base font-normal">Oct</p>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col px-4 py-6">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center gap-1">
                        <RiAdminFill className="text-[#5f3afc]" />
                        Admin
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        <FaTags className="text-[#5f3afc]" />
                        Technology
                      </span>
                    </div>
                    <h1 className="text-xl font-bold py-4">
                      Five Ways To Develop a World Class Sales Operations
                    </h1>
                    <p className='text-xs'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                    <p className="text-[#5f3afc] font-semibold uppercase py-4">
                      Read More &rarr;
                    </p>
                  </div>
                </div>
                <div className="bg-white border rounded mb-4 lg:mb-10">
                  <div className="relative">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/blog/3.jpg"
                      alt="contactus"
                      className="lg:w-full"
                    />
                    <div className="absolute -bottom-9 right-0 mr-12 text-black bg-white shadow py-2 px-7">
                      <span className="flex flex-col items-center justify-center font-bold text-4xl">
                        31 <p className="text-base font-normal">Oct</p>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col px-4 py-6">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center gap-1">
                        <RiAdminFill className="text-[#5f3afc]" />
                        Admin
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        <FaTags className="text-[#5f3afc]" />
                        Technology
                      </span>
                    </div>
                    <h1 className="text-xl font-bold py-4">
                      Five Ways To Develop a World Class Sales Operations
                    </h1>
                    <p className='text-xs'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                    <p className="text-[#5f3afc] font-semibold uppercase py-4">
                      Read More &rarr;
                    </p>
                  </div>
                </div>
                <div className="bg-white border rounded mb-4 lg:mb-10">
                  <div className="relative">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/blog/4.jpg"
                      alt="contactus"
                      className="lg:w-full"
                    />
                    <div className="absolute -bottom-9 right-0 mr-12 text-black bg-white shadow py-2 px-7">
                      <span className="flex flex-col items-center justify-center font-bold text-4xl">
                        31 <p className="text-base font-normal">Oct</p>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col px-4 py-6">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center gap-1">
                        <RiAdminFill className="text-[#5f3afc]" />
                        Admin
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        <FaTags className="text-[#5f3afc]" />
                        Technology
                      </span>
                    </div>
                    <h1 className="text-xl font-bold py-4">
                      Five Ways To Develop a World Class Sales Operations
                    </h1>
                    <p className='text-xs'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                    <p className="text-[#5f3afc] font-semibold uppercase py-4">
                      Read More &rarr;
                    </p>
                  </div>
                </div>
                <div className="bg-white border rounded mb-4 lg:mb-10">
                  <div className="relative">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/blog/5.jpg"
                      alt="contactus"
                      className="lg:w-full"
                    />
                    <div className="absolute -bottom-9 right-0 mr-12 text-black bg-white shadow py-2 px-7">
                      <span className="flex flex-col items-center justify-center font-bold text-4xl">
                        31 <p className="text-base font-normal">Oct</p>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col px-4 py-6">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center gap-1">
                        <RiAdminFill className="text-[#5f3afc]" />
                        Admin
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        <FaTags className="text-[#5f3afc]" />
                        Technology
                      </span>
                    </div>
                    <h1 className="text-xl font-bold py-4">
                      Five Ways To Develop a World Class Sales Operations
                    </h1>
                    <p className='text-xs'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                    <p className="text-[#5f3afc] font-semibold uppercase py-4">
                      Read More &rarr;
                    </p>
                  </div>
                </div>

                {/* Pagination */}
              </div>
              <div className='py-[2rem]'>
              <Pagination />
              </div>
            </div>
            {/* Sidebar */}
            <div className="lg:w-[30%]">
              <ShopCatePost />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
