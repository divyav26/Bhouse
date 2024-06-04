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
    <div className="md:px-[2rem] lg:px-[2rem] xl:px-36 lg:py-20">
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-30 half-top-border ">
          <h2 className="text-sm md:text-xl pt-1 text-[#0B2B3c] font-bold">
            OUR CATEGORY
          </h2>
        </div>
        <h1 className="md:text-4xl font-black text-[#0B2B3C] ">
          Building Aminities
        </h1>
      </div>
      <div className="flex flex-row md:flex-col gap-5 px-[2rem] md:px-0 lg:gap-0 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-7 pb-10">
          <div className="relative shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-8 group overflow-hidden">
            <div className="absolute inset-0 bg-[#5f3afc] opacity-0 group-hover:opacity-100 group-hover:animate-slideDown transition-opacity duration-300 ease-in-out z-0"></div>
            <IoHomeOutline className="h-10 w-12 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10" />
            <h1 className="font-bold text-xs p-2 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10">
              Residential
            </h1>
            <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1 z-10">
              12
            </span>
          </div>
          <div className="relative shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-8 group overflow-hidden">
            <div className="absolute inset-0 bg-[#5f3afc] opacity-0 group-hover:opacity-100 group-hover:animate-slideDown transition-opacity duration-300 ease-in-out z-0"></div>
            <FaCarSide className="h-10 w-12 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10" />
            <h1 className="font-bold text-xs p-2 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10">
              Parking Space
            </h1>
            <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1 z-10">
              12
            </span>
          </div>
          <div className="relative shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-8 group overflow-hidden">
            <div className="absolute inset-0 bg-[#5f3afc] opacity-0 group-hover:opacity-100 group-hover:animate-slideDown transition-opacity duration-300 ease-in-out z-0"></div>
            <TbBuildingBank className="h-10 w-12 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10" />
            <h1 className="font-bold text-xs p-2 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10">
              Commertial
            </h1>
            <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1 z-10">
              12
            </span>
          </div>
          <div className="relative shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-8 group overflow-hidden">
            <div className="absolute inset-0 bg-[#5f3afc] opacity-0 group-hover:opacity-100 group-hover:animate-slideDown transition-opacity duration-300 ease-in-out z-0"></div>
            <PiBuildingApartmentFill className="h-10 w-12 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10" />
            <h1 className="font-bold text-xs p-2 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10">
              Appartment
            </h1>
            <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1 z-10">
              12
            </span>
          </div>
          <div className="relative shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-5 py-8 group overflow-hidden">
            <div className="absolute inset-0 bg-[#5f3afc] opacity-0 group-hover:opacity-100 group-hover:animate-slideDown transition-opacity duration-300 ease-in-out z-0"></div>
            <BiSolidBuildingHouse className="h-10 w-12 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10" />
            <h1 className="font-bold text-xs p-2 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10">
              Industrial
            </h1>
            <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1 z-10">
              12
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-7 pb-10">
          <div className="relative shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-8 py-8 group overflow-hidden">
            <div className="absolute inset-0 bg-[#5f3afc] opacity-0 group-hover:opacity-100 group-hover:animate-slideDown transition-opacity duration-300 ease-in-out z-0"></div>
            <HiBuildingOffice className="h-10 w-12 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10" />
            <h1 className="font-bold text-xs p-2 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10">
              Industrial
            </h1>
            <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1 z-10">
              12
            </span>
          </div>
          <div className="relative shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-8 py-8 group overflow-hidden">
            <div className="absolute inset-0 bg-[#5f3afc] opacity-0 group-hover:opacity-100 group-hover:animate-slideDown transition-opacity duration-300 ease-in-out z-0"></div>
            <FaShower className="h-10 w-12 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10" />
            <h1 className="font-bold text-xs p-2 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10">
              Industrial
            </h1>
            <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1 z-10">
              12
            </span>
          </div>
          <div className="relative shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-8 py-8 group overflow-hidden">
            <div className="absolute inset-0 bg-[#5f3afc] opacity-0 group-hover:opacity-100 group-hover:animate-slideDown transition-opacity duration-300 ease-in-out z-0"></div>
            <FaBuildingShield className="h-10 w-12 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10" />
            <h1 className="font-bold text-xs p-2 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10">
              Industrial
            </h1>
            <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1 z-10">
              12
            </span>
          </div>
          <div className="relative shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-8 py-8 group overflow-hidden">
            <div className="absolute inset-0 bg-[#5f3afc] opacity-0 group-hover:opacity-100 group-hover:animate-slideDown transition-opacity duration-300 ease-in-out z-0"></div>
            <BsFillBuildingsFill className="h-10 w-12 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10" />
            <h1 className="font-bold text-xs p-2 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10">
              Industrial
            </h1>
            <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1 z-10">
              12
            </span>
          </div>
          <div className="relative shadow-[1px_0px_5px_0px_rgba(0,0,0,0.1)] rounded flex flex-col items-center justify-center px-8 py-8 group overflow-hidden">
            <div className="absolute inset-0 bg-[#5f3afc] opacity-0 group-hover:opacity-100 group-hover:animate-slideDown transition-opacity duration-300 ease-in-out z-0"></div>
            <IoHomeOutline className="h-10 w-12 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10" />
            <h1 className="font-bold text-xs p-2 text-[#5f3afc] group-hover:text-white transition-colors duration-300 ease-in-out z-10">
              Industrial
            </h1>
            <span className="h-8 w-8 flex items-center justify-center bg-gray-300 rounded-full p-1 z-10">
              12
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCategory;