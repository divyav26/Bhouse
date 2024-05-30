import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhotoCameraBack } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Aboutus = () => {
  return (
    <div>
      <section className="px-2 md:px-[2rem] lg:px-[2rem]  lg:mt-20">
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
            <p className="text-black py-4 text-sm">
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
                  <h2 className="text-sm">Smart Home Design</h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#E5DFFF] p-2 rounded-full">
                    <MdOutlineSecurity className="text-[#5F3AFC] text-2xl" />
                  </div>
                  <h2 className="text-sm">Complete 24/7 Security</h2>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <div className="bg-[#E5DFFF] p-2 rounded-full">
                    <MdOutlinePhotoCameraBack className="text-[#5F3AFC] text-2xl" />
                  </div>
                  <h2 className="text-sm">Beautiful Scene Around</h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#E5DFFF] p-2 rounded-full">
                    <IoMdFootball className="text-[#5F3AFC] text-2xl" />
                  </div>
                  <h2 className="text-sm">Exceptional Lifestyle</h2>
                </div>
              </div>
            </div>
            <p className="text-black py-5 text-sm">
              Morbi porttitor nibh justo, sit amet imperdiet ligula laoreet eu.
              Sed mollis nec sem vel laoreet. Donec tincidunt consequat gravida.
              Nullam accumsan lobortis nisl sed gravida. Aliquam facilisis
              blandit accumsan. Suspendisse elementum sit amet tortor eget
              mollis.
            </p>
            <NavLink
              className="block uppercase bg-[#5F3AFC] px-10 py-4 w-[50%] md:w-[27%] text-sm font-medium text-white shadow hover:bg-[#0B2B3C] focus:outline-none focus:ring active:bg-[#0B2B3C]"
              to="#"
            >
              About Us
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Aboutus
