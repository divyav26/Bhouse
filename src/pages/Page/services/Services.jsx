import React from 'react'
import Layout from '../../../components/Layout'
import contactus from '../../../imgs/banner.jpg'
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <Layout>
         <div className="relative">
       <div className="absolute inset-0 flex left-2 md:py-20 pt-1">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:px-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-4">Our Services</p>
            <div className="flex gap-2">
              <NavLink to="/" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <NavLink to="/services" className="text-lg ">
                Services
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={contactus} alt="contactus" className="w-full md:h-auto" />
        </div>
      </div>
      <div>
        <div className=" bg-[#EDF5F8] h-auto ">
          <div className="flex flex-col items-center justify-center pt-20">
            <div className="px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-38 half-top-border">
                <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                OUR SERVICES
                </h2>
              </div>
            <h1 className="text-4xl font-black pb-10 text-[#0B2B3C] text-center">
              Our Main Focus
            </h1>
          </div>
          <div className="w-full md:flex md:flex-wrap">
            <div className="md:w-1/3 p-4 md:px-5 md:pb-20">
              <div className="bg-white text-center p-8 rounded">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/1.png"
                  alt="contactus"
                  className="mx-auto mb-4 w-14 md:w-1/3"
                />
                <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                  Property Management
                </p>
                <p className="text-sm md:mb-6 mb-4">
                  Arose mr rapid in so vexed words. Gay welcome led add to
                  lasting chiefly say to looking for better.
                </p>
                <div className=" border-[#5f3afc] half-bottom-border inline-block">
                  <p className="text-light">Get Now &rarr;</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4 md:px-5 md:pb-20">
              <div className="bg-white text-center p-8 rounded">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/2.png"
                  alt="contactus"
                  className="mx-auto mb-4 w-14 md:w-1/3"
                />
                <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                  Mortgage Service
                </p>
                <p className="text-sm md:mb-6 mb-4">
                  Arose mr rapid in so vexed words. Gay welcome led add to
                  lasting chiefly say to looking for better.
                </p>
                <div className=" border-[#5f3afc] half-bottom-border inline-block">
                  <p className="text-light">Get Now &rarr;</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4 md:px-5 md:pb-20">
              <div className="bg-white text-center p-8 rounded">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/3.png"
                  alt="contactus"
                  className="mx-auto mb-4 w-14 md:w-1/3"
                />
                <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                  Consulting Service
                </p>
                <p className="text-sm md:mb-6 mb-4">
                  Arose mr rapid in so vexed words. Gay welcome led add to
                  lasting chiefly say to looking for better.
                </p>
                <div className=" border-[#5f3afc] half-bottom-border inline-block">
                  <p className="text-light">Get Now &rarr;</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:flex md:flex-wrap">
            <div className="md:w-1/3 p-4 md:px-5 md:pb-20">
              <div className="bg-white text-center p-8 rounded">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/1.png"
                  alt="contactus"
                  className="mx-auto mb-4 w-14 md:w-1/3"
                />
                <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                  Home Buying
                </p>
                <p className="text-sm md:mb-6 mb-4">
                  Arose mr rapid in so vexed words. Gay welcome led add to
                  lasting chiefly say to looking for better.
                </p>
                <div className=" border-[#5f3afc] half-bottom-border inline-block">
                  <p className="text-light">Get Now &rarr;</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4 md:px-5 md:pb-20">
              <div className="bg-white text-center p-8 rounded">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/2.png"
                  alt="contactus"
                  className="mx-auto mb-4 w-14 md:w-1/3"
                />
                <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                  Home Selling
                </p>
                <p className="text-sm md:mb-6 mb-4">
                  Arose mr rapid in so vexed words. Gay welcome led add to
                  lasting chiefly say to looking for better.
                </p>
                <div className=" border-[#5f3afc] half-bottom-border inline-block">
                  <p className="text-light">Get Now &rarr;</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4 md:px-5 md:pb-20">
              <div className="bg-white text-center p-8 rounded">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/3.png"
                  alt="contactus"
                  className="mx-auto mb-4 w-14 md:w-1/3"
                />
                <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                  Escrow Services
                </p>
                <p className="text-sm md:mb-6 mb-4">
                  Arose mr rapid in so vexed words. Gay welcome led add to
                  lasting chiefly say to looking for better.
                </p>
                <div className=" border-[#5f3afc] half-bottom-border inline-block">
                  <p className="text-light">Get Now &rarr;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default Services
