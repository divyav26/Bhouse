import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import { NavLink } from 'react-router-dom'
import contactus from '../../../imgs/banner.jpg'
import {PortfolioData} from '../../../Data/Info'

const Portfolio = () => {
  const [imgItem, setImgItem] = useState(PortfolioData)

  const filterItems = (cateItems) =>{
    const updateItem = PortfolioData.filter((currentElem)=>{
      return currentElem.category === cateItems
    });
    setImgItem(updateItem)
  }
  return (



    <Layout>
      <div className="relative">
       <div className="absolute inset-0 flex left-2 lg:py-24 md:py-16 pt-1">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:px-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-4">Portfolio Details</p>
            <div className="flex gap-2">
              <NavLink to="/" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <NavLink to="/portfoliodetals" className="text-lg ">
              Portfolio Details
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={contactus} alt="contactus" className="w-full md:h-auto" />
        </div>
      </div>

      <div className='flex justify-center gap-[1.5rem] my-[2rem]'>
        <NavLink className='px-2 py-[2px] border border-gray-200 rounded-xl' onClick={()=>setImgItem(PortfolioData)}>All</NavLink>
        <NavLink className='px-2 py-[2px] border border-gray-200 rounded-xl' onClick={()=>filterItems('Apartments')}>Apartments</NavLink>
        <NavLink className='px-2 py-[2px] border border-gray-200 rounded-xl' onClick={()=>filterItems('Desing')}>Desing</NavLink>
        <NavLink className='px-2 py-[2px] border border-gray-200 rounded-xl' onClick={()=>filterItems('Interior')}>Interior</NavLink>
      </div>

      <div>
        <div className='grid grid-cols-3 gap-[1rem] px-[2rem] py-[1rem]'>
          {
            imgItem.map((item)=>{
              return(
                <>
                <img src={item.img} alt='' />
                </>
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
