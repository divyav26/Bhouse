import { IoHomeOutline } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { TbBuildingBank } from "react-icons/tb";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaShower } from "react-icons/fa";
import { FaBuildingShield } from "react-icons/fa6";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { HiBuildingOffice } from "react-icons/hi2";

const OurCategory = () => {
  return (
    <div className="md:px-[2rem] lg:px-[2rem] lg:py-20">
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-30 half-top-border ">
          <h2 className="text-sm md:text-xl pt-1 text-[#0B2B3c] font-bold">
            OUR CATEGORY
          </h2>
        </div>
        <h1 className="text-4xl font-black text-[#0B2B3C] ">
          Building Aminities
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-7 pb-10">
        <div className="shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-6">
          <IoHomeOutline className="h-10 w-12 text-[#5f3afc]" />
          <h1 className="font-bold text-xl p-2">Residential</h1>
          <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1">
            12
          </span>
        </div>
        <div className="shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-6">
          <FaCarSide className="h-10 w-12 text-[#5f3afc]" />
          <h1 className="font-bold text-xl p-2">Parking Space</h1>
          <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1">
            22
          </span>
        </div>
        <div className="shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-6">
          <TbBuildingBank className="h-10 w-12 text-[#5f3afc]" />
          <h1 className="font-bold text-xl p-2">Commercial</h1>
          <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1">
            15
          </span>
        </div>
        <div className="shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-6">
          <PiBuildingApartmentFill className="h-10 w-12 text-[#5f3afc]" />
          <h1 className="font-bold text-xl p-2">Appartment</h1>
          <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1">
            19
          </span>
        </div>
        <div className="shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-6">
          <BsFillBuildingsFill className="h-10 w-12 text-[#5f3afc]" />
          <h1 className="font-bold text-xl p-2">Industrial</h1>
          <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1">
            10
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-7 pb-10">
        <div className="shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-6">
          <HiBuildingOffice className="h-10 w-12 text-[#5f3afc]" />
          <h1 className="font-bold text-xl p-2">Building Code</h1>
          <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1">
            15
          </span>
        </div>
        <div className="shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-6">
          <FaShower className="h-10 w-12 text-[#5f3afc]" />
          <h1 className="font-bold text-xl p-2">Swimming Pool</h1>
          <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1">
            12
          </span>
        </div>
        <div className="shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-6">
          <FaBuildingShield className="h-10 w-12 text-[#5f3afc]" />
          <h1 className="font-bold text-xl p-2">Private Security</h1>
          <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1">
            12
          </span>
        </div>
        <div className="shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-6">
          <BiSolidBuildingHouse className="h-10 w-12 text-[#5f3afc]" />
          <h1 className="font-bold text-xl p-2">Smart Homes</h1>
          <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1">
            12
          </span>
        </div>
        <div className="shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-6">
          <IoHomeOutline className="h-10 w-12 text-[#5f3afc]" />
          <h1 className="font-bold text-xl p-2">Resdential</h1>
          <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1">
            12
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurCategory;
