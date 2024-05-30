import React from 'react'
import Layout from '../../components/Layout'
import banner from '../../imgs/banner.jpg'

const Error = () => {
  return (
    <Layout>
      <div className="relative">
        <div className="absolute lg:inset-0 flex left-2 md:py-16 pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-[#0B2B3C] p-5 md:p-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-6">404 Error</p>
            <div className="flex gap-2">
              <a href="/Home" className="text-lg">
                Home
              </a>
              <h1 className="text-bold text-2xl">&#xBB;</h1>
              <a href="/About Us" className="text-lg">
                404 Error
              </a>
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
      <div className="bg-blue-50">
        <div className="flex justify-center mb-8 bg-blue-50">
          <img src='https://preetheme.com/html/bhouse/assets/img/404.png' alt="404 Error" className="w-full md:w-1/2" />
        </div>
        <p className="text-4xl font-bold text-center text-[#0B2B3C]">
          Oops! Page Not Found.
        </p>
        <p className="text-xl md:text-xl text-center mt-4 text-[#0B2B3C]">
          The page you are looking for is not available or doesn’t belong to this website!
        </p>
        <div className="flex justify-center mt-6 mb-8">
          <button className="bg-indigo-700 text-white font-bold py-2 px-4 flex items-center">
            &#xBB; GO TO HOME
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Error
