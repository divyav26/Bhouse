import React from 'react'
import Layout from '../components/Layout'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhotoCameraBack } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";

import contact from '../imgs/contact/banner.jpg'
import { NavLink } from 'react-router-dom';
import Services from '../components/HomeComp/Services';



const About = () => {
  return (
    <Layout>
      <div className="relative">
        <div className="absolute lg:inset-0 flex left-2 lg:py-24 md:py-16 pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:p-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-6">About Us</p>
            <div className="flex gap-2">
              <NavLink to="/" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <NavLink to="/about" className="text-lg ">
                About Us
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img
            src={contact}
            alt="contactus"
            className="w-full md:h-auto h-[20vh]"
          />
        </div>
      </div>
      {/* About Us */}
      <section className="px-2 md:px-[2rem] lg:px-[2rem] xl:px-36  lg:mt-20">
        <div className="flex flex-col sm:gap-5 sm:flex-row items-center sm:items-start ">
          <div className="w-full md:1/2 ">
            <img
              src="https://preetheme.com/html/bhouse/assets/img/about.png"
              alt=""
              className="w-full h-auto mb-4"
            />
          </div>
          <div className="w-full md:1/2 sm:mt-10">
            <div className="flex flex-col">
              <div className="bg-white px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-36 half-top-border">
                <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                  ABOUT US
                </h2>
              </div>
            </div>
            <p className="text-xl md:text-3xl text-[#0b2b3c]5f3afc font-bold py-2">
              Architects With Difference & New Approach.
            </p>
            <p className="text-black py-4 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat lectus sed justo sollicitudin, non porttitor nunc varius.
              Donec commodo ac nibh quis aliquet. Suspendisse varius hendrerit
              odio eget efficitur. Mauris sed neque porta, lacinia metus sit
              amet, laoreet quam. Maecenas dapibus ligula vel magna hendrerit.
            </p>
            <div className="flex justify-between mr-20 py-4">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <div className="bg-[#E5DFFF] p-2 rounded-full">
                    <IoHomeOutline className="text-[#5F3AFC] text-2xl" />
                  </div>
                  <h2 className="text-lg">Smart Home Design</h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#E5DFFF] p-2 rounded-full">
                    <MdOutlineSecurity className="text-[#5F3AFC] text-2xl" />
                  </div>
                  <h2 className="text-lg">Complete 24/7 Security</h2>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <div className="bg-[#E5DFFF] p-2 rounded-full">
                    <MdOutlinePhotoCameraBack className="text-[#5F3AFC] text-2xl" />
                  </div>
                  <h2 className="text-lg">Beautiful Scene Around</h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#E5DFFF] p-2 rounded-full">
                    <IoMdFootball className="text-[#5F3AFC] text-2xl" />
                  </div>
                  <h2 className="text-lg">Exceptional Lifestyle</h2>
                </div>
              </div>
            </div>
            <p className="text-black py-5 text-base">
              Morbi porttitor nibh justo, sit amet imperdiet ligula laoreet eu.
              Sed mollis nec sem vel laoreet. Donec tincidunt consequat gravida.
              Nullam accumsan lobortis nisl sed gravida. Aliquam facilisis
              blandit accumsan. Suspendisse elementum sit amet tortor eget
              mollis.
            </p>
            <NavLink
              className="block uppercase bg-[#5F3AFC] px-10 py-4 w-[25%] text-sm font-medium text-white shadow hover:bg-[#0B2B3C] focus:outline-none focus:ring active:bg-[#0B2B3C] "
              to="#"
            >
              About Us
            </NavLink>
          </div>
        </div>
      </section>
      {/* OUR SERVICES */}
      <div>
        <Services />
      </div>
      {/* Property Agents*/}
      <div className="flex items-center justify-center md-pt-0 md:pt-2">
        <div className="bg-white px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-34 half-top-border">
          <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
            TEAM
          </h2>
        </div>
      </div>
      <p className="text-[#0b2b3c] text-2xl text-center font-bold mt-2">
        Property Agents
      </p>
      <div className="">
        <div className="inset-0 flex flex-wrap md:py-2">
          <div className="w-full md:flex md:flex-wrap">
            <div className="md:w-1/3 p-4 md:p-8 relative group">
              <div className="bg-white text-center p-4 rounded-lg relative overflow-hidden">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/team/1.jpg"
                  alt="contactus"
                  className="mx-auto mb-4 w-60 md:w-[100%] rounded-full"
                />
                <p className="text-xl text-[#0b2b3c]  font-bold">
                  A.H John Doe
                </p>
                <p className="">Designer</p>
              </div>
            </div>
            <div className="md:w-1/3 p-4 md:p-8 relative group">
              <div className="bg-white text-center p-4 rounded-lg relative overflow-hidden">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/team/2.jpg"
                  alt="contactus"
                  className="mx-auto mb-4 w-60 md:w-[100%]  rounded-full"
                />
                <p className="md:text-xl text-[#0b2b3c]  font-bold">
                  A.H John Doe
                </p>
                <p className="">Designer</p>
              </div>
            </div>
            <div className="md:w-1/3 p-4 md:p-8 relative group">
              <div className="bg-white text-center p-4 rounded-lg relative overflow-hidden">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/team/3.jpg"
                  alt="contactus"
                  className="mx-auto mb-4 w-60 md:w-[100%] rounded-full "
                />
                <p className="md:text-xl text-[#0b2b3c]  font-bold">
                  A.H John Doe
                </p>
                <p className="">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR AWESOME TESTIMONIAL */}
      {/* <div className="bg-gray-300 relative pb- w-full ">
        <div className="flex items-center justify-center">
          <div className="bg-white px-3 py-1 md:ml-4 ml-2 border-t-8 border-b-8  border-l-8 border-[#5f3afc] mt-40 z-10 relative">
            <p className="text-sm md:text-xl md:ml-2 text-[#0b2b3c]  font-bold mb-4 items-center">
            OUR AWESOME TESTIMONIAL
            </p>
          </div>
        </div>
        <p className="text-[#0b2b3c] text-2xl text-center font-bold mt-2 pb-20">
          Clients Feedback
        </p>
      </div> */}
    </Layout>
  );
}

export default About
