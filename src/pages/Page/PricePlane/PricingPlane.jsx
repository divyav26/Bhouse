import React from 'react'
import Layout from '../../../components/Layout'
import banner from '../../../imgs/banner.jpg'
import ToggleButton from './ToogleButton';
import { NavLink } from 'react-router-dom';

const PricingPlane = () => {
  return (
    <Layout>
       <div className="relative">
       <div className="absolute lg:inset-0 flex left-2 lg:py-24 md:py-16 pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:p-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-6">Pricing Plane</p>
            <div className="flex gap-2">
              <NavLink to="/" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <NavLink to="/pricing" className="text-lg ">
              Pricing Plane
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={banner} alt="banner" className="w-full md:h-auto h-[20vh]" />
        </div>
      </div>

      <div className="bg-white px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-36 half-top-border mt-20 mx-auto">
        <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
          ABOUT US
        </h2>
      </div>
      <h2 className="text-[#0B2B3C] text-4xl font-bold mb-2 text-center">
        Pricing Packages
      </h2>
      <h2 className="text-[#0B2B3C] text-xl font-bold mb-4 text-center">
        Save up to 10%
      </h2>
      <div>
        <ToggleButton />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4  mt-4 px-[1rem]">
        <div className="w-full rounded-lg shadow-md overflow-hidden border-2 border-gray-200 hover-card transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
          <div className="bg-white text-center">
            <header className="text-sm bg-white items-center text-center p-8 rounded-lg hover:bg-[#5F3AFC] hover:text-white hover:rounded-b-[50%]">
              <h3 className="text-xl text-violet-600 font-bold text-black-800 hover:text-white">
                Basic
              </h3>
              <h1 className="text-[#0B2B3C] text-4xl font-bold hover:text-white transition-all duration-300 ease-in-out">
                $19.89
              </h1>
            </header>
            <ul className="list-none mt-8 text-sm text-center space-y-3">
              <li>Basic Listing Submission</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>One Listing</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>30 Days Availability</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Limited Support</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Accept Reviews</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Edit Your Listing</li>
            </ul>
            <button className="item-center text-center mt-7 mb-3 p-3 bg-[#5F3AFC] hover:bg-white text-white text-sm rounded-full shadow-sm hover:text-[#0B2B3C]">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
          <div className="bg-white text-center">
            <header className="text-sm bg-[#5F3AFC] items-center text-center p-8  rounded-b-[50%] hover:text-white ">
              <h3 className="text-xl text-white font-bold text-black-800">
                STANDARD
              </h3>
              <h1 className="text-white text-4xl font-bold transition-all duration-300 ease-in-out">
                $19.89
              </h1>
            </header>
            <ul className="list-none mt-8 text-sm text-center space-y-3">
              <li>Basic Listing Submission</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>One Listing</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>30 Days Availability</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Limited Support</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Accept Reviews</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Edit Your Listing</li>
            </ul>
            <button className="item-center text-center mt-7 mb-3 p-3 bg-[#5F3AFC] hover:bg-white text-white text-sm rounded-full shadow-sm hover:text-[#0B2B3C]">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
          <div className="bg-white text-center">
            <header className="text-sm bg-white items-center text-center p-8  rounded-lg hover:bg-[#5F3AFC] hover:text-white hover: rounded-b-[50%]">
              <h3 className="text-xl text-violet-600 font-bold text-black-800 hover:text-white">
                PREMIUM
              </h3>
              <h1 className="text-[#0B2B3C] text-4xl font-bold hover:text-white transition-all duration-300 ease-in-out">
                $19.89
              </h1>
            </header>
            <ul className="list-none mt-8 text-sm text-center space-y-3">
              <li>Basic Listing Submission</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>One Listing</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>30 Days Availability</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Limited Support</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Accept Reviews</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Edit Your Listing</li>
            </ul>
            <button className="item-center text-center mt-7 mb-3 p-3 bg-[#5F3AFC] hover:bg-white text-white text-sm rounded-full shadow-sm hover:text-[#0B2B3C]">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-[#0B2B3C] text-4xl font-bold text-center mt-20">
        Single Pricing Packages
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4  mt-4 px-[1rem]">
        <div className="w-full rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
          <div className="bg-white text-center">
            <header className="text-sm bg-white items-center text-center p-8  rounded-lg hover:bg-[#5F3AFC] hover:text-white hover:rounded-b-[50%]">
              <h3 className="text-xl text-violet-600 font-bold text-black-800 hover:text-white">
                Basic
              </h3>
              <h1 className="text-[#0B2B3C] text-4xl font-bold hover:text-white transition-all duration-300 ease-in-out">
                $19.89
              </h1>
            </header>
            <ul className="list-none mt-8 text-sm text-center space-y-3">
              <li>Basic Listing Submission</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>One Listing</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>30 Days Availability</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Limited Support</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Accept Reviews</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Edit Your Listing</li>
            </ul>
            <button className="item-center text-center mt-7 mb-3 p-3 bg-[#5F3AFC] hover:bg-white text-white text-sm rounded-full shadow-sm hover:text-[#0B2B3C]">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
          <div className="bg-white text-center">
            <header className="text-sm bg-[#5F3AFC] items-center text-center p-8  rounded-lg hover:text-white rounded-b-[50%]">
              <h3 className="text-xl text-white font-bold text-black-800">
                STANDARD
              </h3>
              <h1 className="text-white text-4xl font-bold transition-all duration-300 ease-in-out">
                $19.89
              </h1>
            </header>
            <ul className="list-none mt-8 text-sm text-center space-y-3">
              <li>Basic Listing Submission</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>One Listing</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>30 Days Availability</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Limited Support</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Accept Reviews</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Edit Your Listing</li>
            </ul>
            <button className="item-center text-center mt-7 mb-3 p-3 bg-[#5F3AFC] hover:bg-white text-white text-sm rounded-full shadow-sm hover:text-[#0B2B3C]">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
          <div className="bg-white text-center">
            <header className="text-sm bg-white items-center text-center p-8  rounded-lg hover:bg-[#5F3AFC] hover:text-white hover:rounded-b-[50%]">
              <h3 className="text-xl text-violet-600 font-bold text-black-800 hover:text-white">
                PREMIUM
              </h3>
              <h1 className="text-[#0B2B3C] text-4xl font-bold hover:text-white transition-all duration-300 ease-in-out">
                $19.89
              </h1>
            </header>
            <ul className="list-none mt-8 text-sm text-center space-y-3">
              <li>Basic Listing Submission</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>One Listing</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>30 Days Availability</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Limited Support</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Accept Reviews</li>
              <hr style={{ borderTop: "1px dashed #EFEFEF" }} />
              <li>Edit Your Listing</li>
            </ul>
            <button className="item-center text-center mt-7 mb-3 p-3 bg-[#5F3AFC] hover:bg-white text-white text-sm rounded-full shadow-sm hover:text-[#0B2B3C]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PricingPlane
