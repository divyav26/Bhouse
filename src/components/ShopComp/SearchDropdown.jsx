
import React, { useState, useRef, useEffect } from 'react';

const SearchDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Default Sorting');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='lg:flex lg:justify-between lg:items-center border-2 border-gray-100 py-4 px-2'>
      <div className='lg:py-0 py-4'>
        <p className='text-xs'><strong>Search Reasults: </strong>Showing 1–12 of 18 results</p>
      </div>

      <div>
            <div className="relative inline-block text-left w-64" ref={dropdownRef}>
            <button
                type="button"
                className="inline-flex justify-between w-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                onClick={toggleDropdown}
            >
                <span>{selectedOption}</span>
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => selectOption('Option 1')}
                    >
                    Sort by populartiy
                    </p>
                    <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => selectOption('Option 2')}
                    >
                    Sort by new arrivals
                    </p>
                    <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => selectOption('Option 3')}
                    >
                    Sort by price: low to high
                    </p>
                    <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => selectOption('Option 3')}
                    >
                    Sort by price: high to low
                    </p>
                </div>
                </div>
            )}
            </div>
      </div>
    </div>
  )
}

export default SearchDropdown
