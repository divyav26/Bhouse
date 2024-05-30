import React from 'react'
import Layout from '../../../components/Layout'
import banner from '../../../imgs/banner.jpg'
import { NavLink } from 'react-router-dom'

const Teamstyle2 = () => {
  return (
    <Layout>
      <div className="relative">
       <div className="absolute inset-0 flex left-2 md:py-16 pt-1">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:p-4 mx-6 md:mx-3 ">
            <p className="text-2xl font-bold md:mb-4"> Team Membress 2</p>
            <div className="flex gap-2">
              <NavLink to="/Home" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-xl">&#xBB; </h1>
              <NavLink to="/Home" className="text-lg ">
                Team Membress
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={banner} alt="banner" className="w-full md:h-auto" />
        </div>
      </div>
      
      <div>
            <div className='flex justify-center items-center p-[1rem]'>
              <div className="bg-white px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-36 half-top-border">
                <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                  Team
                </h2>
              </div>
            </div>
            <h1 className='text-center font-bold text-3xl pb-[1rem]'>Property Agents</h1>
      </div>

      
      <div className='grid lg:grid-cols-3 grid-cols-1 p-[2rem] gap-[2rem]'>
        <div className='shadow-md'>
            <div className="flex justify-center">
              <img src='https://preetheme.com/html/bhouse/assets/img/team/1.jpg' alt='' className='w-[100%] h-[50vh]' />
            </div>
            <div className='text-center shadow-md p-4'>
              <h1 className='text-xl font-bold p-1'>A.H John Doe</h1>
              <p>Designer</p>
            </div>
          </div>

          <div className='shadow-md'>
            <div className="flex justify-center">
              <img src='https://preetheme.com/html/bhouse/assets/img/team/2.jpg' alt='' className='w-[100%] h-[50vh]' />
            </div>
            <div className='text-center shadow-md p-4'>
              <h1 className='text-xl font-bold p-1'>A.H John Doe</h1>
              <p>Designer</p>
            </div>
          </div>

          <div className='shadow-md'>
            <div className="flex justify-center">
              <img src='https://preetheme.com/html/bhouse/assets/img/team/3.jpg' alt='' className='w-[100%] h-[50vh]' />
            </div>
            <div className='text-center shadow-md p-4'>
              <h1 className='text-xl font-bold p-1'>A.H John Doe</h1>
              <p>Designer</p>
            </div>
          </div>

          <div className='shadow-md'>
            <div className="flex justify-center">
              <img src='https://preetheme.com/html/bhouse/assets/img/team/4.jpg' alt='' className='w-[100%] h-[50vh]' />
            </div>
            <div className='text-center shadow-md p-4'>
              <h1 className='text-xl font-bold p-1'>A.H John Doe</h1>
              <p>Designer</p>
            </div>
          </div>

          <div className='shadow-md'>
            <div className="flex justify-center">
              <img src='https://preetheme.com/html/bhouse/assets/img/team/5.jpg' alt='' className='w-[100%] h-[50vh]' />
            </div>
            <div className='text-center shadow-md p-4'>
              <h1 className='text-xl font-bold p-1'>A.H John Doe</h1>
              <p>Designer</p>
            </div>
          </div>

          <div className='shadow-md'>
            <div className="flex justify-center">
              <img src='https://preetheme.com/html/bhouse/assets/img/team/6.jpg' alt='' className='w-[100%] h-[50vh]' />
            </div>
            <div className='text-center shadow-md p-4'>
              <h1 className='text-xl font-bold p-1'>A.H John Doe</h1>
              <p>Designer</p>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default Teamstyle2
