import React from 'react'
import Layout from '../../components/Layout'
import banner from '../../imgs/banner.jpg'
import { NavLink } from 'react-router-dom'
import LivingRoom1 from './LivingRoom1'
import LivingRoom2 from './LivingRoom2'
import LivingRoom3 from './LivingRoom3'
import LivingRoom4 from './LivingRoom4'

const LivingRoom = () => {
  return (
    <Layout>
       <div className="relative">
       <div className="absolute lg:inset-0 flex left-2 lg:py-16  pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:p-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold mb-6">Living Room</p>
            <div className="flex gap-2">
              <NavLink to="/" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <NavLink to="/livingroom" className="text-lg ">
                Living Room
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={banner} alt="banner" className="w-full md:h-auto h-[20vh]" />
        </div>
      </div>

      <div>
            <div className='flex justify-center items-center p-[1rem]'>
              <div className="bg-white px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-38 half-top-border">
                <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                  Living Room
                </h2>
              </div>
            </div>
            <h1 className='text-center font-bold text-3xl pb-[1rem]'>Explore Apartment By Loaction</h1>
      </div>
{/* 
      <div className='py-[1rem]'>
        <LivingRoom1 />
      </div> */}

      <div className='py-[1rem]'>
        <LivingRoom2 />
      </div>
{/* 
      <div className='py-[1rem]'>
        <LivingRoom3 />
      </div> */}

      {/* <div className='py-[1rem]'>
        <LivingRoom4 />
      </div> */}
    </Layout>
  )
}

export default LivingRoom
