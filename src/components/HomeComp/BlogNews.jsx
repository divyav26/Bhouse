import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";

const BlogNews = () => {
  return (
    <div>
      <div className="md:px-[2rem] lg:px-[2rem] xl:px-36 lg:pt-20">
        <div className="flex flex-col items-center justify-center ">
          <div className="px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-35 half-top-border ">
            <h2 className="text-sm md:text-xl pt-1 text-[#0B2B3c] font-bold">
              BLOG & NEWS
            </h2>
          </div>
          <h1 className="text-4xl font-black pb-10 text-[#0B2B3C] text-center">
            Latest Blog
          </h1>
        </div>
        <div className="md:flex lg:flex md:gap-x-6">
          <div className="md:w-1/3  md:pb-20 pb-6">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/blog/1.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute -bottom-7 right-0 mr-4 text-black bg-white shadow py-2 px-7">
                  <span className="flex flex-col items-center justify-center font-bold text-3xl">
                    31 <p className="text-sm font-normal">Oct</p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col px-4 py-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center gap-1">
                    <RiAdminFill className="text-indigo-500" />
                    Admin
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <FaTags className="text-indigo-500" />
                    Technology
                  </span>
                </div>
                <h1 className="text-xl font-bold py-4">
                  Five Ways To Develop a World Class Sales Operations
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:pb-20 pb-6">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/blog/2.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute -bottom-7 right-0 mr-4 text-black bg-white shadow py-2 px-7">
                  <span className="flex flex-col items-center justify-center font-bold text-3xl">
                    31 <p className="text-sm font-normal">Oct</p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col px-4 py-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center gap-1">
                    <RiAdminFill className="text-indigo-500" />
                    Admin
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <FaTags className="text-indigo-500" />
                    Technology
                  </span>
                </div>
                <h1 className="text-xl font-bold py-4">
                  Five Ways To Develop a World Class Sales Operations
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3  md:pb-20 pb-6">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/blog/3.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute -bottom-7 right-0 mr-4 text-black bg-white shadow py-2 px-7">
                  <span className="flex flex-col items-center justify-center font-bold text-3xl">
                    31 <p className="text-sm font-normal">Oct</p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col px-4 py-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center gap-1">
                    <RiAdminFill className="text-indigo-500" />
                    Admin
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <FaTags className="text-indigo-500" />
                    Technology
                  </span>
                </div>
                <h1 className="text-xl font-bold py-4">
                  Five Ways To Develop a World Class Sales Operations
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogNews
