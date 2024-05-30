import React from 'react'
import Layout from '../../../components/Layout'
import { NavLink } from 'react-router-dom'
import banner from '../../../imgs/banner.jpg'
import {cartTable }from '../../../Data/Info'
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

const CartShop = () => {
  return (
    <Layout>
      <div className="relative">
       <div className="absolute lg:inset-0 flex left-2 md:py-20 pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:p-4 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-6">Cart</p>
            <div className="flex gap-2">
              <NavLink to="/" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <NavLink to="/cart" className="text-lg ">
                Cart
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={banner} alt="contactus" className="w-full md:h-auto h-[20vh]" />
        </div>
      </div>

        <div className="container mx-auto px-[1rem] py-[2rem]">
            <div className='overflow-x-auto'>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b bg-[#5F3AFC] text-white">IMAGE</th>
                        <th className="py-2 px-4 border-b bg-[#5F3AFC] text-white">PROUDCT NAME</th>
                        <th className="py-2 px-4 border-b bg-[#5F3AFC] text-white">UNTIL PRICE</th>
                        <th className="py-2 px-4 border-b bg-[#5F3AFC] text-white">QTY</th>
                        <th className="py-2 px-4 border-b bg-[#5F3AFC] text-white">SUBTOTAL</th>
                        <th className="py-2 px-4 border-b bg-[#5F3AFC] text-white">ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartTable.map(item => (
                        <tr key={item.id} className="text-center">
                        <td className="py-2 px-4 border-b">
                            <img src={item.img} alt={item.name} className="h-16 mx-auto" />
                        </td>
                        <td className="py-2 px-4 border-b">{item.name}</td>
                        <td className="py-2 px-4 border-b">{item.untilprice}</td>
                        <td className="py-2 px-4 border-b">
                            <div className='flex items-center gap-6'>
                            <GrFormSubtract className='bg-[#5F3AFC] p-1 text-white text-xl' />{item.qty}<IoIosAdd className='bg-[#5F3AFC] p-1 text-white text-xl' />
                            </div>
                        </td>
                        <td className="py-2 px-4 border-b">{item.subtotal}</td>
                        <td className="py-2 px-4 border-b text-end">{item.action}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

        <div className='px-[2rem] py-[1rem] flex justify-between gap-2'>
            <button className='px-[2rem] py-2 text-white font-semibold bg-[#5F3AFC]'>CONTINUE SHOPPING</button>
            <button className='px-[2rem] py-2 text-white font-semibold bg-[#5F3AFC]'>UPDATE CART</button>
        </div>

        <div className='px-[2rem] py-[2rem] lg:flex gap-[1rem]'>
            <div className='border-2 border-gray-100 px-[1rem] py-[1rem] lg:w-[70%] gap-[1rem]'>
                <h1>Use Coupon Code</h1>
                <hr className='bg-gray-100'/>
                <div className='my-[1rem]'>
                <label className='text-sm'>Have a Coupon Code?</label>
                <input
                type="text"
                placeholder="XXXX"
                className="w-full border border-gray-400 p-2 my-4 rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
                </div>
                <button className='px-[2rem] py-2 text-white font-semibold bg-[#5F3AFC]'>APPLY</button>
            </div>

            <div className='lg:w-[30%] border-x-[1px]'>
                <div>
                    <p className='bg-gray-300 border-2 border-gray-100 p-2'>Order Total</p>
                </div>
                <div>
                   <div className='flex justify-between'>
                    <p className='text-sm p-2'>Subtotal</p>
                    <p className='text-sm p-2'>$265.00</p>
                   </div>

                   <div className='flex justify-between'>
                    <p className='text-sm p-2'>Taxes</p>
                    <p className='text-sm p-2'>$265.00</p>
                   </div>
                </div>
                    <hr className='bg-gray-100'/>
                    <div className='flex justify-between'>
                        <p className='text-sm py-4 px-2'>Grand Total</p>
                        <p className='text-sm py-4 px-2'>$265.00</p>
                   </div>
                   <button className='px-[2.7rem] py-2 text-white font-semibold bg-[#5F3AFC]'>PROCEED TO CHECKOUT</button>

            </div>
        </div>

    </Layout>
  )
}

export default CartShop
