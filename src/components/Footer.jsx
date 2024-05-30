import React from 'react'
import { IoIosSend } from "react-icons/io";
import logo from '../imgs/nav/logobhouse.png'
import { Category, Customer } from '../Data/Info'

const Footer = () => {
  return (
    <>
    <div className='bg-[#0f3447] text-white grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-[2rem] py-[2rem] gap-[2rem]'>
        <div className='text-gray-200 text-sm'>
            <img src={logo} alt='' />
            <p className='py-2'>Lorem Ipsum is simply dummy text of the and typesetting industry.</p>
            <p className='py-2'>2512, New Market Eliza Road, Sincher 80 Montreal Central Canada, USA QHVK1254</p>
        </div>

        <div>
            <h1 className='font-bold'>Customer Care</h1>
            <hr className='' />
            {
                Customer.map((item)=>{
                    return(
                        <div className='text-gray-200 text-sm py-1'>
                        <p>{item}</p>
                        </div>
                    )
                })
            }
        </div>

        <div>
            <h1 className='font-bold'>Category</h1>
            <hr />
            {
                Category.map((item)=>{
                    return(
                        <div className='text-gray-200 text-sm py-1'>
                        <p>{item}</p>
                        </div>
                    )
                })
            }
        </div>

        <div className='relative w-full lg:py-0 py-[2rem]'>
            <h1 className='font-bold'>Newsletter</h1>
            <hr />
           
            <p className='text-gray-200 text-sm py-2'>Subscribe to our weekly Newsletter and receive updates via email.</p>

            <input type='Enter Your Email' className='absolute px-4 text-sm py-2 w-full border-none bg-transparent rounded-md' placeholder='Enter Your Email' />
            <IoIosSend className="absolute right-3 lg:top-[7.5rem] lg:bottom-0 top-[7.5rem] text-white bg-[#5F3AFC] transform -translate-y-1/2 w-6 h-6" />
        </div>
    </div>
    <div className='bg-[#092635] py-[2rem] text-center text-white font-bold'>
        <p>Copyright © 2021 BHouse Theme by CodexUnicTheme</p>
    </div>
    </>
  )
}

export default Footer
