import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Achives, RecentPost, ShopCategories, Tags } from '../../Data/Info';
import { FaAnglesRight } from "react-icons/fa6";

const ShopCatePost = () => {
  return (
    <>
    <div className='py-2 border-2 border-gray-100'>
             <div className='flex items-center gap-2 pr-[1rem]'>
                <div className='w-[10px] bg-black h-[5px]'></div>
                <p className='text-black font-semibold text-lg'>Seach</p>
            </div>
       <div className=" py-4 px-2">
            <div className='py-2 px-2 flex items-center border-2 border-gray-100'>
                <input
                    className="text-sm border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Search Here.."
                    aria-label="Search"
        />
        <CiSearch className="h-5 w-5 text-gray-500 mr-3" />
            </div>
        </div>
    </div>

    <div className='py-[2rem]'>
         <div className='py-2 border-2 border-gray-100'>
            <div className='flex items-center gap-2 pr-[1rem]'>
                <div className='w-[10px] bg-black h-[5px]'></div>
                <p className='text-black font-semibold text-lg'>Shop Categories</p>
            </div>
                <div>
                    {
                        ShopCategories.map((item)=>{
                            return(
                                <div className='py-2 px-2'>
                                <p className='flex items-center text-xs text-gray-500 gap-2'><FaAnglesRight />{item}</p>
                                </div>
                            )
                        })
                    }
                </div>
           
        </div>
    </div>

    <div className='py-[1rem]'>
         <div className='py-2 border-2 border-gray-100'>
            <div className='flex items-center gap-2 pr-[1rem]'>
                <div className='w-[10px] bg-black h-[5px]'></div>
                <p className='text-black font-semibold text-lg'>Recent Posts</p>
            </div>
                <div className='px-4'>
                    {
                        RecentPost.map((item)=>{
                            return(
                                <div className='flex items-center gap-4 py-2 cursor-pointer'>
                                    <div>
                                        <img src={item.img} alt='' className='w-[200px]' />
                                    </div>
                                    <div>
                                        <h1 className='text-xs font-semibold hover:text-[#5f3afc]'>{item.title}</h1>
                                        <p className='text-[10px]'>{item.date}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
           
        </div>
    </div>

    <div className='py-[1rem]'>
         <div className='py-2 border-2 border-gray-100'>
            <div className='flex items-center gap-2 pr-[1rem]'>
                <div className='w-[10px] bg-black h-[5px]'></div>
                <p className='text-black font-semibold text-lg'>Shop Categories</p>
            </div>
                <div className='grid grid-cols-2 gap-2 py-2 px-2'>
                    {
                        Tags.map((item)=>{
                            return(
                                <div className='py-2 px-2 border-[1px] bg-indigo-50 hover:bg-[#5f3afc] hover:text-white'>
                                    <p className='text-xs'>{item}</p>
                                </div>
                            )
                        })
                    }
                </div>
           
        </div>
    </div>

    <div className='py-[2rem]'>
         <div className='py-2 border-2 border-gray-100'>
            <div className='flex items-center gap-2 pr-[1rem]'>
                <div className='w-[10px] bg-black h-[5px]'></div>
                <p className='text-black font-semibold text-lg'>Archives</p>
            </div>
                <div>
                    {
                        Achives.map((item)=>{
                            return(
                                <div className='py-2 px-2'>
                                <p className='flex items-center text-xs text-gray-500 gap-2'><FaAnglesRight />{item}</p>
                                </div>
                            )
                        })
                    }
                </div>
           
        </div>
    </div>
    </>
  )
}

export default ShopCatePost
