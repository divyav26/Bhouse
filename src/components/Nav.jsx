import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../Data/Info';



const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    setActiveSubIndex(null);
  };

  const handleSubMouseEnter = (subIndex) => {
    setActiveSubIndex(subIndex);
  };

  const handleSubMouseLeave = () => {
    setActiveSubIndex(null);
  };

  return (
    <nav className="bg-white text-black">
      <ul className="flex space-x-6 p-4">
        {links.map((link, index) => (
          <li key={link.id} className="relative pb-[1rem]"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}>
            <NavLink to={link.path} className="font-bold">{link.title}</NavLink>

            {link.sublink && activeIndex === index && (
                <div className='w-[100%]'>
              <ul className="absolute top-full left-0 bg-white p-[1rem] w-44 animate-nav-up border-t-4 border-indigo-500 ">
                {link.sublink.map((sublink, subIndex) => (
                  <li key={subIndex} className="relative"
                    onMouseEnter={() => handleSubMouseEnter(subIndex)}
                    onMouseLeave={handleSubMouseLeave}>
                    <NavLink to={sublink.link} className="block text-xs py-2">{sublink.name}</NavLink>

                    {sublink.children && activeSubIndex === subIndex && (
                      <ul className="absolute top-0 left-full w-44 border-t-4 border-indigo-500">
                        {sublink.children.map((child) => (
                          <li key={child.id}>
                            <NavLink to={child.link} className="block text-xs p-2 bg-white">{child.name}</NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
