import { RiAdminFill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import Layout from "../../components/Layout";
import { NavLink } from "react-router-dom";
import banner from '../../imgs/banner.jpg'
import Pagination from "../../components/ShopComp/Pagination";

const BlogGrid = () => {
  return (
    <Layout>
      <div className="relative">
        <div className="absolute lg:inset-0 flex left-2 md:py-16 pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:p-8 mx-6 md:mx-3">
            <p className="text-3xl font-bold md:mb-6">Checkout</p>
           
            <div className="flex gap-2">
              <NavLink to="/Home" className="text-lg ">
                Home
              </NavLink>
              <h1 className="font-bold text-2xl">&#xBB; </h1>
              <NavLink to="/About Us" className="text-lg ">
                Checkout
              </NavLink>
              </div>
              </div>
          
        </div>
        <div className="w-full object-cover">
          <img
            src={banner}
            alt="banner"
            className="w-full md:h-auto h-[20vh]"
          />
        </div>
      </div>
      
      <div className="py-[2rem] md:px-[2rem] lg:px-[2rem] px-[2rem]">
        <div className="md:flex lg:flex md:gap-x-6 md:pt-5 pb-[1rem]">
          <div className="md:w-1/3 ">
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
                <p className='text-xs'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 ">
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
                <p className='text-xs'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3  ">
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
                <p className='text-xs'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex lg:flex md:gap-x-6 md:pb-5">
          <div className="md:w-1/3 ">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/blog/4.jpg"
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
                <p className='text-xs'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 ">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/blog/5.jpg"
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
                <p className='text-xs'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 ">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/blog/6.jpg"
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
                <p className='text-xs'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex lg:flex md:gap-x-6 md:pb-5">
          <div className="md:w-1/3 ">
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
                <p className='text-xs'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 ">
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
                <p className='text-xs'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 ">
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
                <p className='text-xs'>
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
     <Pagination />
    </Layout>
  );
};

export default BlogGrid;
