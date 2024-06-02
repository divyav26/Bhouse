import React from 'react'
import Layout from '../../components/Layout'
import banner from '../../imgs/banner.jpg'
import { NavLink } from 'react-router-dom'

const LivingRoom = () => {
  return (
    <Layout>
       <div className="relative">
       <div className="absolute lg:inset-0 flex left-2 lg:py-24 md:py-16 pt-[1rem]">
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
    </Layout>
  )
}

export default LivingRoom
