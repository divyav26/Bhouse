import React from 'react'
import Layout from '../../components/Layout'
import { IoMdBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { PiSquaresFour } from "react-icons/pi";
import Pagination from '../../components/ShopComp/Pagination';
import { NavLink } from 'react-router-dom';
import banner from '../../imgs/banner.jpg'

const ShopGrid = () => {
  return (
    <Layout>
      <>
        <div className="relative pb-[2rem]">
          <div className="absolute inset-0 flex left-2 md:py-20 pt-1">
            <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:px-8 mx-6 md:mx-3 ">
              <p className="text-3xl font-bold md:mb-4">Shop 2 Column</p>
              <div className="flex gap-2">
                <NavLink to="/" className="text-lg ">
                  Home
                </NavLink>
                <h1 className="text-bold text-2xl">&#xBB; </h1>
                <NavLink to="/shop2col" className="text-lg ">
                  Shop
                </NavLink>
              </div>
            </div>
          </div>
          <div className="w-full object-cover">
            <img src={banner} alt="banner" className="w-full md:h-auto" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 pt-[2rem] md:px-[2rem] lg:px-[2rem] xl:px-36">
          <div className="p-4 md:px-2  md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/product/1.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute top-6 left-4">
                  <span className="bg-[#5f3afc] text-white font-bold text-sm px-5 py-2 rounded-tl-extraLarge rounded-br-extraLarge">
                    FEATURED
                  </span>
                </div>
                <div className="absolute -bottom-4 right-0 mr-6 text-black border-[#5f3afc] rounded-full shadow">
                  <span className="flex flex-col items-center justify-center font-bold text-4xl">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/user-1.png"
                      alt="profile"
                      className="h-10 w-10 rounded-full"
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="p-4 flex flex-col">
                  <h1 className="text-[#0B2B3C] hover:text-[#5f3afc] font-bold text-base">
                    Riqaza Apartment Montreal
                  </h1>
                  <p>Resort Valley Ocs, USA</p>
                  <h2 className="text-[#5f3afc] text-2xl font-bold pt-6">
                    $ 256,000{" "}
                    <span className="text-black font-medium">/mo</span>
                  </h2>
                </div>
                <div className="border-t p-4">
                  <div className="flex flex-row gap-2">
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <IoMdBed />
                      <p>3 Beds</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <FaBath />
                      <p>2 Baths</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <PiSquaresFour />
                      <p>600 Sq Ft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:px-2 md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/product/2.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute top-6 left-4">
                  <span className="bg-[#5f3afc] text-white font-bold text-sm px-5 py-2 rounded-tl-extraLarge rounded-br-extraLarge">
                    FEATURED
                  </span>
                </div>
                <div className="absolute -bottom-4 right-0 mr-6 text-black border-[#5f3afc] rounded-full shadow">
                  <span className="flex flex-col items-center justify-center font-bold text-4xl">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/user-1.png"
                      alt="profile"
                      className="h-10 w-10 rounded-full"
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="p-4 flex flex-col">
                  <h1 className="text-[#0B2B3C] hover:text-[#5f3afc] font-bold text-xs">
                    Riqaza Apartment Montreal
                  </h1>
                  <p>Resort Valley Ocs, USA</p>
                  <h2 className="text-[#5f3afc] text-2xl font-bold pt-6">
                    $ 256,000{" "}
                    <span className="text-black font-medium">/mo</span>
                  </h2>
                </div>
                <div className="border-t p-4">
                  <div className="flex flex-row gap-2">
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <IoMdBed />
                      <p>3 Beds</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <FaBath />
                      <p>2 Baths</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <PiSquaresFour />
                      <p>600 Sq Ft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:px-2 md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/product/3.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute top-6 left-4">
                  <span className="bg-[#5f3afc] text-white font-bold text-sm px-5 py-2 rounded-tl-extraLarge rounded-br-extraLarge">
                    FEATURED
                  </span>
                </div>
                <div className="absolute -bottom-4 right-0 mr-6 text-black border-[#5f3afc] rounded-full shadow">
                  <span className="flex flex-col items-center justify-center font-bold text-4xl">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/user-1.png"
                      alt="profile"
                      className="h-10 w-10 rounded-full"
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="p-4 flex flex-col">
                  <h1 className="text-[#0B2B3C] hover:text-[#5f3afc] font-bold text-xs">
                    Riqaza Apartment Montreal
                  </h1>
                  <p>Resort Valley Ocs, USA</p>
                  <h2 className="text-[#5f3afc] text-2xl font-bold pt-6">
                    $ 256,000{" "}
                    <span className="text-black font-medium">/mo</span>
                  </h2>
                </div>
                <div className="border-t p-4">
                  <div className="flex flex-row gap-2">
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <IoMdBed />
                      <p>3 Beds</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <FaBath />
                      <p>2 Baths</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <PiSquaresFour />
                      <p>600 Sq Ft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:px-2 md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/product/4.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute top-6 left-4">
                  <span className="bg-[#5f3afc] text-white font-bold text-sm px-5 py-2 rounded-tl-extraLarge rounded-br-extraLarge">
                    FEATURED
                  </span>
                </div>
                <div className="absolute -bottom-4 right-0 mr-6 text-black border-[#5f3afc] rounded-full shadow">
                  <span className="flex flex-col items-center justify-center font-bold text-4xl">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/user-1.png"
                      alt="profile"
                      className="h-10 w-10 rounded-full"
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="p-4 flex flex-col">
                  <h1 className="text-[#0B2B3C] hover:text-[#5f3afc] font-bold text-xs">
                    Riqaza Apartment Montreal
                  </h1>
                  <p>Resort Valley Ocs, USA</p>
                  <h2 className="text-[#5f3afc] text-2xl font-bold pt-6">
                    $ 256,000{" "}
                    <span className="text-black font-medium">/mo</span>
                  </h2>
                </div>
                <div className="border-t p-4">
                  <div className="flex flex-row gap-2">
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <IoMdBed />
                      <p>3 Beds</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <FaBath />
                      <p>2 Baths</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <PiSquaresFour />
                      <p>600 Sq Ft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:px-2 md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/product/5.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute top-6 left-4">
                  <span className="bg-[#5f3afc] text-white font-bold text-sm px-5 py-2 rounded-tl-extraLarge rounded-br-extraLarge">
                    FEATURED
                  </span>
                </div>
                <div className="absolute -bottom-4 right-0 mr-6 text-black border-[#5f3afc] rounded-full shadow">
                  <span className="flex flex-col items-center justify-center font-bold text-4xl">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/user-1.png"
                      alt="profile"
                      className="h-10 w-10 rounded-full"
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="p-4 flex flex-col">
                  <h1 className="text-[#0B2B3C] hover:text-[#5f3afc] font-bold text-xs">
                    Riqaza Apartment Montreal
                  </h1>
                  <p>Resort Valley Ocs, USA</p>
                  <h2 className="text-[#5f3afc] text-2xl font-bold pt-6">
                    $ 256,000{" "}
                    <span className="text-black font-medium">/mo</span>
                  </h2>
                </div>
                <div className="border-t p-4">
                  <div className="flex flex-row gap-2">
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <IoMdBed />
                      <p>3 Beds</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <FaBath />
                      <p>2 Baths</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <PiSquaresFour />
                      <p>600 Sq Ft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:px-2 md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/product/6.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute top-6 left-4">
                  <span className="bg-[#5f3afc] text-white font-bold text-sm px-5 py-2 rounded-tl-extraLarge rounded-br-extraLarge">
                    FEATURED
                  </span>
                </div>
                <div className="absolute -bottom-4 right-0 mr-6 text-black border-[#5f3afc] rounded-full shadow">
                  <span className="flex flex-col items-center justify-center font-bold text-4xl">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/user-1.png"
                      alt="profile"
                      className="h-10 w-10 rounded-full"
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="p-4 flex flex-col">
                  <h1 className="text-[#0B2B3C] hover:text-[#5f3afc] font-bold text-xs">
                    Riqaza Apartment Montreal
                  </h1>
                  <p>Resort Valley Ocs, USA</p>
                  <h2 className="text-[#5f3afc] text-2xl font-bold pt-6">
                    $ 256,000{" "}
                    <span className="text-black font-medium">/mo</span>
                  </h2>
                </div>
                <div className="border-t p-4">
                  <div className="flex flex-row gap-2">
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <IoMdBed />
                      <p>3 Beds</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <FaBath />
                      <p>2 Baths</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <PiSquaresFour />
                      <p>600 Sq Ft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:px-2 md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/product/7.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute top-6 left-4">
                  <span className="bg-[#5f3afc] text-white font-bold text-sm px-5 py-2 rounded-tl-extraLarge rounded-br-extraLarge">
                    FEATURED
                  </span>
                </div>
                <div className="absolute -bottom-4 right-0 mr-6 text-black border-[#5f3afc] rounded-full shadow">
                  <span className="flex flex-col items-center justify-center font-bold text-4xl">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/user-1.png"
                      alt="profile"
                      className="h-10 w-10 rounded-full"
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="p-4 flex flex-col">
                  <h1 className="text-[#0B2B3C] hover:text-[#5f3afc] font-bold text-xs">
                    Riqaza Apartment Montreal
                  </h1>
                  <p>Resort Valley Ocs, USA</p>
                  <h2 className="text-[#5f3afc] text-2xl font-bold pt-6">
                    $ 256,000{" "}
                    <span className="text-black font-medium">/mo</span>
                  </h2>
                </div>
                <div className="border-t p-4">
                  <div className="flex flex-row gap-2">
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <IoMdBed />
                      <p>3 Beds</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <FaBath />
                      <p>2 Baths</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <PiSquaresFour />
                      <p>600 Sq Ft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:px-2 md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/product/8.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute top-6 left-4">
                  <span className="bg-[#5f3afc] text-white font-bold text-sm px-5 py-2 rounded-tl-extraLarge rounded-br-extraLarge">
                    FEATURED
                  </span>
                </div>
                <div className="absolute -bottom-4 right-0 mr-6 text-black border-[#5f3afc] rounded-full shadow">
                  <span className="flex flex-col items-center justify-center font-bold text-4xl">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/user-1.png"
                      alt="profile"
                      className="h-10 w-10 rounded-full"
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="p-4 flex flex-col">
                  <h1 className="text-[#0B2B3C] hover:text-[#5f3afc] font-bold text-xs">
                    Riqaza Apartment Montreal
                  </h1>
                  <p>Resort Valley Ocs, USA</p>
                  <h2 className="text-[#5f3afc] text-2xl font-bold pt-6">
                    $ 256,000{" "}
                    <span className="text-black font-medium">/mo</span>
                  </h2>
                </div>
                <div className="border-t p-4">
                  <div className="flex flex-row gap-2">
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <IoMdBed />
                      <p>3 Beds</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <FaBath />
                      <p>2 Baths</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <PiSquaresFour />
                      <p>600 Sq Ft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:px-2 md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/product/9.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute top-6 left-4">
                  <span className="bg-[#5f3afc] text-white font-bold text-sm px-5 py-2 rounded-tl-extraLarge rounded-br-extraLarge">
                    FEATURED
                  </span>
                </div>
                <div className="absolute -bottom-4 right-0 mr-6 text-black border-[#5f3afc] rounded-full shadow">
                  <span className="flex flex-col items-center justify-center font-bold text-4xl">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/user-1.png"
                      alt="profile"
                      className="h-10 w-10 rounded-full"
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="p-4 flex flex-col">
                  <h1 className="text-[#0B2B3C] hover:text-[#5f3afc] font-bold text-xs">
                    Riqaza Apartment Montreal
                  </h1>
                  <p>Resort Valley Ocs, USA</p>
                  <h2 className="text-[#5f3afc] text-2xl font-bold pt-6">
                    $ 256,000{" "}
                    <span className="text-black font-medium">/mo</span>
                  </h2>
                </div>
                <div className="border-t p-4">
                  <div className="flex flex-row gap-2">
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <IoMdBed />
                      <p>3 Beds</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <FaBath />
                      <p>2 Baths</p>
                      <div className="bg-gray-200 h-6 w-px" />
                    </div>
                    <div className="text-gray-500 flex flex-row items-center gap-1 text-xs">
                      <PiSquaresFour />
                      <p>600 Sq Ft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-[1rem]">
          <Pagination />
        </div>
      </>
    </Layout>
  );
}

export default ShopGrid
