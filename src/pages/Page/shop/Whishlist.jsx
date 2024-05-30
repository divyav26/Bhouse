import React from 'react'
import banner from '../../../imgs/banner.jpg'
import Layout from '../../../components/Layout'
import { NavLink } from 'react-router-dom'

const Whishlist = () => {
  return (
    <Layout>
       <div className="relative">
       <div className="absolute lg:inset-0 flex left-2 md:py-16 pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:p-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-6">WhishList</p>
            <div className="flex gap-2">
              <NavLink to="/Home" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <NavLink to="/whishlist" className="text-lg ">
              WhishList
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={banner} alt="banner" className="w-full md:h-auto h-[20vh]" />
        </div>
      </div>

      <div className="overflow-x-auto w-full my-20">
  <table className="min-w-full divide-y divide-gray-200">
    <thead>
      <tr>
        <th className="px-4 py-4 border-l border-white bg-[#5F3AFC] text-white">IMAGE</th>
        <th className="px-4 py-4 border-l border-white bg-[#5F3AFC] text-white">PRODUCT NAME</th>
        <th className="px-4 py-4 border-l border-white bg-[#5F3AFC] text-white">PRICE</th>
        <th className="px-4 py-4 border-l border-white bg-[#5F3AFC] text-white">STOCK STATUS</th>
        <th className="px-4 py-4 border-l border-white bg-[#5F3AFC] text-white">ADD TO CART</th>
        <th className="px-4 py-4 border-l border-white bg-[#5F3AFC] text-white">ACTION</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 pb-[1rem]">
          <img
            src='https://preetheme.com/html/bhouse/assets/img/product/1.jpg'
            alt="ProductImage"
            className="w-24 h-24 object-cover rounded-t"
          />
        </td>
        <td className="px-4 py-2">Product Name</td>
        <td className="px-4 py-2 text-gray-900">$260.00</td>
        <td className="px-4 py-2 text-gray-900">In Stock</td>
        <td className="px-4 py-2 text-center">
          <button className="bg-[#5F3AFC] hover:bg-[#5F3AFC] text-center text-white font-bold py-2 px-4 rounded-full">
            ADD TO CART
          </button>
        </td>
        <td className="px-4 py-2 text-center">
          <button className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-2">
          <img src='https://preetheme.com/html/bhouse/assets/img/product/2.jpg' alt="ProductImage" className="w-24 h-24 object-cover rounded-t" />
        </td>
        <td className="px-4 py-2">Product Name</td>
        <td className="px-4 py-2 text-gray-900">$260.00</td>
        <td className="px-4 py-2 text-gray-900">In Stock</td>
        <td className="px-4 py-2 text-center">
          <button className="bg-[#5F3AFC] hover:bg-[#5F3AFC] text-white font-bold py-2 px-4 rounded-full">
            ADD TO CART
          </button>
        </td>
        <td className="px-4 py-2 text-center">
          <button className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </Layout>
  )
}

export default Whishlist
