import React, { useState } from 'react'
import { apartments } from '../../Data/Info'

const ApartmentsPlan = () => {
    const [selectedCategory, setSelectedCategory] = useState('thestudio');

    const filteredApartments = selectedCategory
      ? apartments.filter(apartment => apartment.category === selectedCategory)
      : apartments;

  return (
    <div className="">
      <div className="lg:flex grid grid-cols-2  mb-4 border-2 border-custom-blue">
      {['thestudio', 'deluxe', 'penthouse', 'topgarden', 'double height'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-[3.5rem]  py-1 ${selectedCategory === category ? 'bg-[#5f3afc] text-white border-2 border-custom-blue' : 'bg-gray-200 text-black border-2 border-custom-blue'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace(' ', ' ')}
          </button>
        ))}
        
      </div>
      <div className="py-[1rem]">
        {filteredApartments.map(apartment => (
        
          <div className='lg:flex lg:justify-between animate-slide-up'>
           
           <div className='lg:w-[50%] bg-[#5f3afc] text-white px-2 h-[70vh]'>
                <div>
                    <h2 className="text-xl font-bold mb-1 py-1">{apartment.heading}</h2>
                    <p className="mb-2 py-1 text-sm">{apartment.para}</p>
                </div>
                <p className='flex justify-between border-dotted border-b py-2'><strong>{apartment.total}:</strong> {apartment.sq1}</p>
                <p className='flex justify-between border-dotted border-b py-2'><strong>{apartment.bad1}:</strong> {apartment.sq2}</p>
                <p className='flex justify-between border-dotted border-b py-2'><strong>{apartment.bad2}:</strong> {apartment.sq3}</p>
                <p className='flex justify-between border-dotted border-b py-2'><strong>{apartment.Bel}:</strong> {apartment.all}</p>
                <p className='flex justify-between border-dotted border-b py-2'><strong>{apartment.lou}:</strong> {apartment.sq3}</p>
           </div>
            <div className='lg:w-[50%] '>
                <img src={apartment.img} alt={apartment.heading} className="w-full object-cover mb-4 h-[70vh]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApartmentsPlan
