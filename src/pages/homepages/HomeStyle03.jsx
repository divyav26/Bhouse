import { FaHouseChimney } from "react-icons/fa6";
import InputBox from "../../components/HomeComp/InputBox";
import Layout from "../../components/Layout";
import ParallaxComponent from "../../components/HomeComp/ParallaxComponent";
import Testimonials from '../../components/HomeComp/Testimonials'
import BlogNews from "../../components/HomeComp/BlogNews";
import ImgBlog from "../../components/HomeComp/ImgBlog";
import Property from "../../components/HomeComp/Property";
import Aboutus from "../../components/HomeComp/Aboutus";
import OurCategory from "../../components/HomeComp/OurCategory";
import home from '../../imgs/home/home.png'
import tech from '../../imgs/home/tech.png'
import ECO from '../../imgs/home/ECO.png'
import storage from '../../imgs/home/storage.png'
import home3 from '../../imgs/home/home3-prop2i.jpg'
import home1 from '../../imgs/home/home3-prop1.jpg'
import h1 from '../../imgs/home/home3prop3.jpg'
import h2 from '../../imgs/home/home3prop4.jpg'
import h3 from '../../imgs/home/hom3prop5.jpg'

const HomeStyle03 = () => {
  return (
    <Layout>
      {/* First img page */}
      <div className="relative h-screen w-full">
        <img
          src="https://cityfurnish.com/blog/wp-content/uploads/2023/09/modern-blue-building-facade-illuminated-night-generative-ai-min.jpg"
          alt="back"
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-white text-xl font-bold flex gap-2 items-center">
            <FaHouseChimney />
            Real Estate Agency
          </span>
          <p className="text-white md:text-5xl font-bold text-center">
            FIND YOUR AMAZING REAL <br /> HOUSE BUY US
          </p>
        </div>
        <div>
          <InputBox />
        </div>
      </div>
      {/* Property By Categories */}
      <div className="md:px-[2rem] md:pt-32 p-2 pt-72 pb-[2rem] md:py-0">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-36 half-top-border">
            <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
              PROPERTY
            </h2>
          </div>
          <p className="text-xl md:text-4xl text-[#0b2b3c] font-bold py-2">
            Property By Categories
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:mt-10">
          <div className="md:w-[67%] w-full relative">
            <img
              src={home1}
              alt="property"
              className="h-[40vh] w-full contrast-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-white md:text-xl font-bold flex gap-2 items-center">
                <FaHouseChimney />
                4BHK apartment is available for sale
              </span>
              <p className="text-white md:text-2xl font-bold text-center">
                Location Bandra west. Carpet Area 2000sqft .
              </p>
              <button className="text-white bg-[#5F3AFC] py-1 rounded-3xl px-5 mt-6">
                13Listing
              </button>
            </div>
          </div>
          <div className="md:w-[33%] w-full relative">
            <img
              src={home3}
              alt="property"
              className="h-[40vh] w-full contrast-100"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-white md:text-2xl font-bold text-center">
                Bedroom
              </p>
              <button className="text-white bg-[#5F3AFC] py-1 rounded-3xl px-5 mt-6">
                13Listing
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-10">
          <div className="relative">
            <img
              src={h1}
              alt="3"
              className="h-[40vh] w-full contrast-100"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-white md:text-2xl font-bold text-center">
                Kitchen
              </p>
              <button className="text-white bg-[#5F3AFC] py-1 rounded-3xl px-5 mt-6">
                13Listing
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={h2}
              alt="4"
              className="h-[40vh] w-full contrast-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-white md:text-2xl font-bold text-center">Hall</p>
              <button className="text-white bg-[#5F3AFC] py-1 rounded-3xl px-5 mt-6">
                13Listing
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={h3}
              alt="5"
              className="h-[40vh] w-full contrast-100"
            />{" "}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-white text-2xl font-bold text-center">
                Balcony
              </p>
              <button className="text-white bg-[#5F3AFC] py-1 rounded-3xl px-5 mt-6">
                13Listing
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT US */}
      <div className="px-[1rem]">
        <Aboutus />
      </div>
      {/* FEATURES */}
      <div className="md:px-[2rem] px-[1rem] p-2 py-10">
        <div className="flex flex-col items-center justify-center ">
          <div className="bg-white px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-36 half-top-border">
            <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
              FEATURES
            </h2>
          </div>
          <p className="text-xl md:text-4xl text-[#0b2b3c] font-bold py-2">
            Core Features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:mt-10 ">
        <div className="flex flex-col p-10 hover:border-b-4 hover:border-[#5f3afc] hover:scale-105 transition duration-300">
          <img src={home} alt="home" className="h-16 w-16 mt-2" />
          <h1 className="font-bold py-4">Smart Living</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

          <div className="flex flex-col p-5 hover:border-b-4 hover:border-[#5f3afc] hover:scale-105 transition duration-300">
            <img src={ECO} alt="home" className="w-16 mt-2" />
            <h1 className="font-bold py-4">ECO Construction</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
              eiusmod te mp or incididunt ut labore.
            </p>
          </div>
          <div className="flex flex-col p-5 hover:border-b-4 hover:border-[#5f3afc] hover:scale-105 transition duration-300">
            <img src={storage}alt="home" className="w-16 mt-2" />
            <h1 className="font-bold py-4">Atractive Location</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
              eiusmod te mp or incididunt ut labore.
            </p>
          </div>
          <div className="flex flex-col p-5 hover:border-b-4 hover:border-[#5f3afc] hover:scale-105 transition duration-300">
            <img src={tech} alt="home" className="w-16 mt-2" />
            <h1 className="font-bold py-4">Modern Technology</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
              eiusmod te mp or incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
      {/* ANY QUESTION YOU HAVE */}
      <div className="bg-[#0A0713] h-[60vh] w-full flex flex-col justify-center items-center relative">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="px-3 py-1 border-b-8 border-l-8 border-white w-50 half-top-border1">
            <h2 className="text-sm md:text-xl text-white mt-2 font-bold">
              ANY QUESTION YOU HAVE
            </h2>
          </div>
          <p className="text-white text-5xl font-bold py-7">+0158 852 1252</p>
          <button className="uppercase text-white font-bold bg-[#5F3AFC] py-4 px-8">
            Make Call
          </button>
        </div>
        <img
          src="https://preetheme.com/html/bhouse/assets/img/call.png"
          alt="CallImage"
          className="absolute bottom-0 right-8 h-[50vh] max-h-full"
        />
      </div>
      {/* PROPERTY */}
      <div className="py-[2rem]">
        <Property />
      </div>
      {/* Parallax */}
      <div>
        <ParallaxComponent />
      </div>
      {/* OUR CATEGORY */}
      <div className="py-[2rem]">
        <OurCategory />
      </div>
      {/* OUR TESTIMONIAL */}
      <div>
        <Testimonials />
      </div>
      {/* BLOG & NEWS */}
      <div className="py-[2rem] px-[1rem]">
        <BlogNews />
      </div>
      {/* Img blog */}
      <div>
        <ImgBlog />
      </div>
    </Layout>
  );
};

export default HomeStyle03;
