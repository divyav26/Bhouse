import React from 'react'
import Layout from '../components/Layout'
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";

import { TiHomeOutline } from "react-icons/ti";
import { PiTableThin } from "react-icons/pi";
import { IoShieldCheckmark } from "react-icons/io5";
import { BsFan } from "react-icons/bs";

import contact from '../imgs/contact/banner.jpg'
import { NavLink } from 'react-router-dom';



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
          <img src={contact} alt="contactus" className="w-full md:h-auto h-[20vh]" />
        </div>
      </div>
      <div className="w-full md:w-full p-2 px-[2rem] py-8 mt-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start ">
          <div className="w-full md:1/2 ">
            <img src='https://preetheme.com/html/bhouse/assets/img/about.png' alt="" className="w-full h-auto mb-4" />
          </div>
          <div className="w-full md:1/2 ">
            <div class="flex items-center">
              <div class="bg-white px-3 py-1 md:ml-4 ml-2 border-t-8 border-b-8  border-l-8 border-[#5f3afc]">
                <p className="text-sm md:text-xl md:ml-2 text-[#0b2b3c] font-bold mb-4">
                  ABOUT US
                </p>
              </div>
            </div>
            <p className="text-xl md:text-3xl md:ml-5 text-[#0b2b3c]5f3afc font-bold mb-2 mt-4">
              Architects With Difference & New Approach.
            </p>
            <p className="text-black md:ml-5 my-2 text-xs ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eligendi odio perspiciatis alias, enim ut tempora porro sequi fuga
              rem repellat quae distinctio quis temporibus reprehenderit
              repudiandae dolor officiis nisi.
            </p>
            <div className="flex flex-wrap md:flex-nowrap -mx-2">
              <div className="w-full md:w-1/2 px-4 md:py-4 mb-4 md:mb-0">
                <div className="flex items-center">
                  <TiHomeOutline className="text-[#5f3afc] bg-gray-400 rounded-full w-10 h-10 p-2 mr-2" />
                  <div>
                    <h3 className="font-semibold">Smart Home Design</h3>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 md:py-4 mb-4 md:mb-0">
                <div className="flex items-center">
                  <PiTableThin className="text-[#5f3afc] bg-gray-400 rounded-full w-10 h-10 p-2 mr-2" />
                  <div>
                    <h3 className="font-semibold">Beautiful Scene Around</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap -mx-2">
              <div className="w-full md:w-1/2 px-4 md:py-4 mb-4 md:mb-0">
                <div className="flex items-center">
                  <IoShieldCheckmark className="text-[#5f3afc] bg-gray-400 rounded-full w-10 h-10 p-2 mr-2" />
                  <div>
                    <h3 className="font-semibold">Complete 24/7 Security</h3>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 md:py-4 mb-4 md:mb-0">
                <div className="flex items-center">
                  <BsFan className="text-[#5f3afc] bg-gray-400 rounded-full w-10 h-10 p-2 mr-2" />
                  <div>
                    <h3 className="font-semibold">Exceptional Lifestyle</h3>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-black md:ml-5 text-xs mt-2">
              Morbi porttitor nibh justo, sit amet imperdiet ligula laoreet eu.
              Sed mollis nec sem vel laoreet. Donec tincidunt consequat gravida.
              Nullam accumsan lobortis nisl sed gravida. Aliquam facilisis
              blandit accumsan. Suspendisse elementum sit amet tortor eget
              mollis.
            </p>

            <button
              type="button"
              className="float-left bg-[#0b2b3c] hover:bg-[#5f3afc] mt-10 w-40 px-5 py-5 md:ml-5 text-center right-2 text-white font-bold shadow"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
      {/* OUR SERVICES */}
      <div className="bg-gray-200 relative w-full ">
        <div className="flex items-center justify-center">
          <div className="bg-white px-3 py-1 md:ml-4 ml-2 border-t-8 border-b-8  border-l-8 border-[#5f3afc] mt-5 z-10 relative">
            <p className="text-sm md:text-xl md:ml-2 text-[#0b2b3c]  font-bold mb-4 items-center">
              OUR SERVICES
            </p>
          </div>
        </div>
        <p className="text-[#0b2b3c] text-2xl text-center font-bold mt-2">
          Our Main Focus
        </p>

        {/* overlay */}
        <div className="pb-15">
          <div className="inset-0 flex flex-wrap md:py-4 bg-gray-200">
            <div className="w-full md:flex md:flex-wrap">
              <div className="md:w-1/3 p-4 md:p-8">
                <div className="bg-white text-center p-4 rounded-lg">
                  <img
                    src='https://preetheme.com/html/bhouse/assets/img/1.png'
                    alt="contactus"
                    className="mx-auto mb-4 w-14 md:w-1/3"
                  />
                  <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                    Buy A Home
                  </p>
                  <p className="text-sm md:mb-6 mb-4">
                    Arose mr rapid in so vexed words. Gay welcome led add to
                    lasting chiefly say to looking for better.
                  </p>
                  <p className="">Get Now &rarr;</p>
                </div>
              </div>
              <div className="md:w-1/3 p-4 md:p-8">
                <div className="bg-white text-center p-4 rounded-lg">
                  <img
                    src='https://preetheme.com/html/bhouse/assets/img/2.png'
                    alt="contactus"
                    className="mx-auto mb-4 w-14 md:w-1/3"
                  />
                  <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                    Sell A Home
                  </p>
                  <p className="text-sm md:mb-6 mb-4">
                    Arose mr rapid in so vexed words. Gay welcome led add to
                    lasting chiefly say to looking for better.
                  </p>
                  <p className="">Get Now &rarr;</p>
                </div>
              </div>
              <div className="md:w-1/3 p-4 md:p-8">
                <div className="bg-white text-center p-4 rounded-lg">
                  <img
                    src='https://preetheme.com/html/bhouse/assets/img/3.png'
                    alt="contactus"
                    className="mx-auto mb-4 w-14 md:w-1/3"
                  />
                  <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                    Rent A Home
                  </p>
                  <p className="text-sm md:mb-6 mb-4">
                    Arose mr rapid in so vexed words. Gay welcome led add to
                    lasting chiefly say to looking for better.
                  </p>
                  <p className="">Get Now &rarr;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Property Agents*/}
      <div className="flex items-center justify-center md-pt-0 md:pt-2">
        <div className="bg-white px-4 py-1 md:ml-4 ml-2 border-t-8 border-b-8  border-l-8 border-[#5f3afc] mt-6 md:mt-0 z-10 relative">
          <p className="text-sm md:text-xl text-[#0b2b3c]  font-bold mb-4 items-center">
            TEAM
          </p>
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
                  src='https://preetheme.com/html/bhouse/assets/img/team/1.jpg'
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
                  src='https://preetheme.com/html/bhouse/assets/img/team/2.jpg'
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
                  src='https://preetheme.com/html/bhouse/assets/img/team/3.jpg'
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
  )
}

export default About
