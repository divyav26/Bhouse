import { CiLocationOn } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaFire } from "react-icons/fa";
import { FaSpa } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Layout from "../../components/Layout";
import { NavLink } from "react-router-dom";
import banner from '../../imgs/banner.jpg'

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", left: "0px", zIndex: 1 }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-black bg-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

// Custom Right Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <svg
        xmlns="http:www.w3.org/2000/svg"
        className="h-10 w-10 text-black bg-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const ImageData = [
  {
    id: 1,
    image: "https://preetheme.com/html/bhouse/assets/img/product/4.jpg",
  },
  {
    id: 2,
    image: "https://preetheme.com/html/bhouse/assets/img/product/1.jpg",
  },
  {
    id: 3,
    image: "https://preetheme.com/html/bhouse/assets/img/product/2.jpg",
  },
  {
    id: 4,
    image: "https://preetheme.com/html/bhouse/assets/img/product/3.jpg",
  },
];

const SingleProducts = () => {
   const settings = {
     dots: false,
     infinite: false,
     arrows: true,
     speed: 700,
     slidesToScroll: 1,
     autoPlay: false,
     cssEase: "linear",
     pauseOnHover: true,
     pauseOnFocus: true,
     prevArrow: <PrevArrow />,
     nextArrow: <NextArrow />,
     responsive: [
       {
         breakpoint: 10000,
         settings: {
           slidesToScroll: 1,
           slidesToShow: 3,
         },
       },
       {
         breakpoint: 1024,
         settings: {
           slidesToScroll: 1,
           slidesToShow: 2,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 786,
         settings: {
           slidesToScroll: 1,
           slidesToShow: 1,
         },
       },
     ],
   };
  return (
    <Layout>
      {/* First Page */}
      <div className="relative">
        <div className="absolute lg:inset-0 flex left-2 md:py-16 pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:p-8 mx-6 md:mx-3">
            <p className="text-3xl font-bold md:mb-6">Shp Details</p>

            <div className="flex gap-2">
              <NavLink to="/" className="text-lg ">
                Home
              </NavLink>
              <h1 className="font-bold text-2xl">&#xBB; </h1>
              <NavLink to="/singleproducts" className="text-lg ">
                Shop Details
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img
            src={banner}
            alt="banner"
            className="w-full md:h-auto h-[20vh]"
          />
        </div>
      </div>
      {/* Zoom Image */}
      <div>
        <Slider {...settings}>
          {ImageData.map((menu, index) => (
            <div className="my-10" key={index}>
              <div className="flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={menu.image}
                    className="w-[100%] h-[60vh] object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-110"
                    alt={`Property ${index}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className="flex overflow-hidden">
        <img
          src="https://preetheme.com/html/bhouse/assets/img/product/4.jpg"
          alt="1st"
          className="w-[25%] object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        <img
          src="https://preetheme.com/html/bhouse/assets/img/product/1.jpg"
          alt="2nd"
          className="w-[52%] object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        <img
          src="https://preetheme.com/html/bhouse/assets/img/product/2.jpg"
          alt="3rd"
          className="w-[27%] object-cover object-center transition-transform duration-100 ease-in-out transform hover:scale-110"
        />
      </div> */}
      {/* Details */}
      <section className="section-padding py-12">
        <div className="container mx-auto px-4">
          <div className="row flex flex-col md:flex-row gap-4 -mx-3">
            {/* Blog Content */}
            <div className="md:w-[70%] w-full flex flex-col px-2">
              <div className="flex gap-4">
                <div className="py-1 px-2  text-red-500 bg-red-100 rounded-3xl">
                  3 beds
                </div>
                <div className="py-1 px-2 text-green-500 bg-green-100 rounded-3xl ">
                  2Baths
                </div>
                <div className="py-1 px-2 text-orange-500 bg-orange-100 rounded-3xl">
                  1 Garage
                </div>
                <div className="py-1 px-2 text-sky-500 bg-sky-100 rounded-3xl">
                  800 sqft
                </div>
              </div>
              <h1 className="font-bold md:text-2xl text-xl">
                5689 Resot Relly Market, Montreal Canada, HAQC445
              </h1>
              <span className="flex flex-row items-center gap-1 text-black/70">
                <CiLocationOn className="text-[#5F3AFC]" />
                778 Country St. Panama City, FL
              </span>
              <div className="border my-4 p-4">
                <h1 className="font-bold text-xl">About Property</h1>
                <p className="py-2 text-black/70 text-xs md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing sed eiusm
                  tempor incididunt labore dolore magna aliqua enim minim veniam
                  quis nostrud exercitation laboris nisi ut aliquip ea commodo
                  consequat duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur occaecat
                </p>
                <p className="text-black/70 text-xs md:text-sm">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim est laborum. Sed perspiciatis
                  unde omnis iste natus error sit voluptatem accusantium dolore
                  mque laudantium totam rem aperiam.
                </p>
              </div>
              <div className="border mb-4 p-4">
                <h1 className="font-bold text-xl">Advance Features</h1>
                <div className="flex flex-col md:flex-row gap-x-40 gap-y-3 my-4">
                  <ul className="gap-4">
                    <li className="flex items-center gap-2 pb-3">
                      <FaBed className="text-[#5F3AFC]" />4 Bedrooms
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <IoMdHome className="text-[#5F3AFC]" />1 Living Rooms
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <FaCar className="text-[#5F3AFC]" />
                      Car Parking
                    </li>
                    <li className="flex items-center gap-2 ">
                      <FaRoad className="text-[#5F3AFC]" />
                      Residential
                    </li>
                  </ul>
                  <ul className="gap-4">
                    <li className="flex items-center gap-2 pb-3">
                      <FaBath className="text-[#5F3AFC]" />2 Bathrooms
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <FaBuilding className="text-[#5F3AFC]" />
                      Build 2007
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <FaBriefcaseMedical className="text-[#5F3AFC]" />
                      Free Medical
                    </li>
                    <li className="flex items-center gap-2 ">
                      <FaTv className="text-[#5F3AFC]" />
                      TV Cable
                    </li>
                  </ul>
                  <ul className="gap-4">
                    <li className="flex items-center gap-2 pb-3">
                      <BsArrowsFullscreen className="text-[#5F3AFC]" />
                      12400 sqft
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <TbToolsKitchen2 className="text-[#5F3AFC]" />2 Kitchens
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <FaFire className="text-[#5F3AFC]" />
                      Fireplace
                    </li>
                    <li className="flex items-center gap-2 ">
                      <FaSpa className="text-[#5F3AFC]" />
                      Free Spa
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border mb-4 p-4">
                <h1 className="font-bold text-xl">Ameneties</h1>
                <div className="flex flex-col md:flex-row gap-x-40 gap-y-3 my-4">
                  <ul className="gap-4">
                    <li className="flex items-center gap-2 pb-3">
                      <span className="w-6 h-6 text-[#5F3AFC] bg-indigo-100 font-bold flex justify-center items-center rounded-full">
                        &#10003;
                      </span>
                      Air Conditioning
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <span className="w-6 h-6 text-[#5F3AFC] bg-indigo-100 font-bold flex justify-center items-center rounded-full">
                        &#10003;
                      </span>
                      Laundry Room
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <span className="w-6 h-6 text-[#5F3AFC] bg-indigo-100 font-bold flex justify-center items-center rounded-full">
                        &#10003;
                      </span>
                      Window Covering
                    </li>
                    <li className="flex items-center gap-2 ">
                      <span className="w-6 h-6 text-[#5F3AFC] bg-indigo-100 font-bold flex justify-center items-center rounded-full">
                        &#10003;
                      </span>
                      Free WiFi
                    </li>
                  </ul>
                  <ul className="gap-4">
                    <li className="flex items-center gap-2 pb-3">
                      <span className="w-6 h-6 text-[#5F3AFC] bg-indigo-100 font-bold flex justify-center items-center rounded-full">
                        &#10003;
                      </span>
                      Swimming Pool
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <span className="w-6 h-6 text-[#5F3AFC] bg-indigo-100 font-bold flex justify-center items-center rounded-full">
                        &#10003;
                      </span>
                      Gym
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <span className="w-6 h-6 text-[#5F3AFC] bg-indigo-100 font-bold flex justify-center items-center rounded-full">
                        &#10003;
                      </span>
                      Internet
                    </li>
                    <li className="flex items-center gap-2 ">
                      <span className="w-6 h-6 text-[#5F3AFC] bg-indigo-100 font-bold flex justify-center items-center rounded-full">
                        &#10003;
                      </span>
                      Car Parking
                    </li>
                  </ul>
                  <ul className="gap-4">
                    <li className="flex items-center gap-2 pb-3">
                      <span className="w-6 h-6 text-[#5F3AFC] bg-indigo-100 font-bold flex justify-center items-center rounded-full">
                        &#10003;
                      </span>
                      Central Heating
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <span className="w-6 h-6 text-[#5F3AFC] bg-indigo-100 font-bold flex justify-center items-center rounded-full">
                        &#10003;
                      </span>
                      Alarm
                    </li>
                    <li className="flex items-center gap-2 pb-3">
                      <span className="w-6 h-6 text-[#5F3AFC] bg-indigo-100 font-bold flex justify-center items-center rounded-full">
                        &#10003;
                      </span>
                      Pets Allow
                    </li>
                    <li className="flex items-center gap-2 ">
                      <span className="w-6 h-6 text-[#5F3AFC] bg-indigo-100 font-bold flex justify-center items-center rounded-full">
                        &#10003;
                      </span>
                      Spa & Massage
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border p-4 mb-4">
                {" "}
                <h1 className="font-bold text-xl mb-2">Gallery</h1>
                <div className="grid grid-cols-3 gap-4 my-2">
                  <img
                    src="https://preetheme.com/html/bhouse/assets/img/product/1.jpg"
                    alt="1"
                  />
                  <img
                    src="https://preetheme.com/html/bhouse/assets/img/product/2.jpg"
                    alt="2"
                  />
                  <img
                    src="https://preetheme.com/html/bhouse/assets/img/product/3.jpg"
                    alt="3"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src="https://preetheme.com/html/bhouse/assets/img/product/4.jpg"
                    alt="4"
                  />
                  <img
                    src="https://preetheme.com/html/bhouse/assets/img/product/5.jpg"
                    alt="5"
                  />
                  <img
                    src="https://preetheme.com/html/bhouse/assets/img/product/6.jpg"
                    alt="6"
                  />
                </div>
              </div>
              <div className="border p-4 mb-4">
                <h1 className="font-bold text-xl mb-2">12 Reviews</h1>
                <div className="flex gap-3">
                  <img
                    src="https://preetheme.com/html/bhouse/assets/img/tes1.jpg"
                    alt="profile"
                    className="h-20 w-20"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold">Adam Smit</h1>
                    <span className="text-xs text-gray-500">
                      29, October 2021
                    </span>
                    <div className="flex text-yellow-300">
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                    </div>
                    <p className="text-black/70 text-xs md:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Doloribus, omnis fugit corporis iste magnam ratione.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mt-5">
                  <img
                    src="https://preetheme.com/html/bhouse/assets/img/tes1.jpg"
                    alt="profile"
                    className="h-20 w-20"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold">Adam Smit</h1>
                    <span className="text-xs text-gray-500">
                      29, October 2021
                    </span>
                    <div className="flex text-yellow-300">
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                    </div>
                    <p className="text-black/70 text-xs md:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Doloribus, omnis fugit corporis iste magnam ratione.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border p-4 mb-4">
                <h1 className="font-bold text-xl mb-2">Write a Review</h1>
                <div className="flex text-yellow-300 text-4xl">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                </div>
                <form action="#" className="max-w-lg ml-0 p-4 bg-white rounded">
                  <div className="mb-4">
                    <label
                      htmlFor="ymessage"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      name="ymessage"
                      id="ymessage"
                      rows="4"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5F3AFC] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Sidebar */}
            <div className="md:w-[30%] w-full px-2">
              <div className="flex flex-col border p-4 mb-4 gap-4">
                <button className="p-4 border border-orange-500 text-orange-500 bg-[#FEEEE5] rounded flex items-center justify-center gap-1">
                  <CiHeart className="text-xl" />
                  Save
                </button>
                <button className="p-4 border-indigo-500 text-[#5F3AFC] bg-[#F8FFFD] border rounded flex items-center justify-center gap-1">
                  <IoCartOutline className="text-xl" /> Add to Cart
                </button>
              </div>
              <div className="w-full border p-4">
                <div className="btm">
                  <div className="flex gap-3 border-b-2">
                    <img
                      src="https://preetheme.com/html/bhouse/assets/img/tes1.jpg"
                      alt="profile"
                      className="h-16 w-16 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-xl font-bold">Michael Bean</h1>
                      <span className="text-sm flex items-center justify-center gap-2">
                        <IoLocationOutline className="text-[#5F3AFC]" />
                        778 Country St. Panama City, FL
                      </span>
                      <span className="text-[#5F3AFC] font-bold flex items-center gap-2 my-4">
                        <IoCall className="text-[#5F3AFC]" />
                        030 3057 1965
                      </span>
                    </div>
                  </div>
                  <h5 className="py-4 font-bold">Send A Private Message</h5>
                  <form
                    action="#"
                    className="max-w-lg mx-auto p-4 bg-white rounded "
                  >
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="call"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone No.
                      </label>
                      <input
                        type="text"
                        name="call"
                        id="call"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="ymessage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        name="ymessage"
                        id="ymessage"
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className=" w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5F3AFC] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

PrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

NextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SingleProducts;
