import React from 'react'
import { IoMdBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { PiSquaresFour } from "react-icons/pi";
import { LuEye } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";


const Property = () => {
  return (
    <div>
      <div className="md:px-[1rem] lg:pt-20">
        <div className="flex flex-col items-center justify-center ">
          <div className="px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-35 half-top-border ">
            <h2 className="text-sm md:text-xl pt-1 text-[#0B2B3c] font-bold">
              PROPERTY
            </h2>
          </div>
          <h1 className="text-4xl font-black pb-10 text-[#0B2B3C] text-center">
            Featured Property
          </h1>
        </div>

        <div className="md:flex md:flex-wrap">
          <div className="md:w-1/3 p-4 md:px-2 md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative group">
              <div className="relative overflow-hidden">
                  <img
                    src="https://preetheme.com/html/bhouse/assets/img/product/1.jpg"
                    alt="contactus"
                    className="lg:w-full object-cover object-center transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <div className="icon bg-white rounded-full p-2 transition-transform duration-300 transform group-hover:scale-110">
                        <LuEye className="text-gray-500" />
                      </div>
                      <div className="icon bg-white rounded-full p-2 transition-transform duration-300 transform group-hover:scale-110">
                        <FaRegHeart className="text-gray-500" />
                      </div>
                      <div className="icon bg-white rounded-full p-2 transition-transform duration-300 transform group-hover:scale-110">
                        <IoCartOutline className="text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>

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
          <div className="md:w-1/3 p-4 md:px-2 md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative group">
              <div className="relative overflow-hidden">
                  <img
                    src="https://preetheme.com/html/bhouse/assets/img/product/2.jpg"
                    alt="contactus"
                    className="lg:w-full object-cover object-center transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <div className="icon bg-white rounded-full p-2 transition-transform duration-300 transform group-hover:scale-110">
                        <LuEye className="text-gray-500" />
                      </div>
                      <div className="icon bg-white rounded-full p-2 transition-transform duration-300 transform group-hover:scale-110">
                        <FaRegHeart className="text-gray-500" />
                      </div>
                      <div className="icon bg-white rounded-full p-2 transition-transform duration-300 transform group-hover:scale-110">
                        <IoCartOutline className="text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
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
          <div className="md:w-1/3 p-4 md:px-2 md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative group">
              <div className="relative overflow-hidden">
                  <img
                    src="https://preetheme.com/html/bhouse/assets/img/product/3.jpg"
                    alt="contactus"
                    className="lg:w-full object-cover object-center transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <div className="icon bg-white rounded-full p-2 transition-transform duration-300 transform group-hover:scale-110">
                        <LuEye className="text-gray-500" />
                      </div>
                      <div className="icon bg-white rounded-full p-2 transition-transform duration-300 transform group-hover:scale-110">
                        <FaRegHeart className="text-gray-500" />
                      </div>
                      <div className="icon bg-white rounded-full p-2 transition-transform duration-300 transform group-hover:scale-110">
                        <IoCartOutline className="text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
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
      </div>
    </div>
  )
}

export default Property
