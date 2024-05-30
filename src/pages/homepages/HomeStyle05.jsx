import { FaHouseChimney } from "react-icons/fa6";
import Layout from "../../components/Layout";
import Aboutus from "../../components/HomeComp/Aboutus";
import Services from "../../components/HomeComp/Services";
import Counter from "../../components/HomeComp/Counter";
import Property from "../../components/HomeComp/Property";
import ApartmentsPlan from "../../components/HomeComp/ApartmentsPlan";
import ParallaxComponent from "../../components/HomeComp/ParallaxComponent";
import OurCategory from "../../components/HomeComp/OurCategory";
import Testimonials from "../../components/HomeComp/Testimonials";
import BlogNews from "../../components/HomeComp/BlogNews";
import ImgBlog from "../../components/HomeComp/ImgBlog";
import man from '../../imgs/home/man.png'
import home from '../../imgs/home/home.png'
import storage from '../../imgs/home/storage.png'


const HomeStyle05 = () => {
  return (
    <Layout>
      {/* First img page */}
      <div className="relative">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/hbx030124tomscheerer-003-65f3148d6d76e.jpg"
          alt="back"
          className="lg:h-[75vh] w-full contrast-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-white lg:text-5xl text-2xl font-black text-center md:mt-5">
            FIND YOUR PERFECT HOME
          </p>
          <div className="flex gap-6 py-6">
            <button className="uppercase text-white bg-[#5F3AFC] flex items-center justify-center p-3 gap-2 font-bold">
              <FaHouseChimney />
              Rent Home
            </button>
            <button className="uppercase text-black bg-white flex items-center justify-center p-3 gap-2 font-bold">
              <FaHouseChimney />
              sale home
            </button>
          </div>
          <div className="w-full md:w-[57%]">
            <div className="lg:flex bg-white  shadow-lg drop-shadow-xl flex-wrap gap-6 items-center justify-center h-[12vh]">
              <input
                type="text"
                placeholder="Name"
                className="w-full lg:w-auto px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <select className="w-full lg:w-auto px-5 py-3 text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Your Region</option>
                <option value="region1">United States</option>
                <option value="region2">India</option>
                <option value="region3">Bangladesh</option>
                <option value="region3">Bangladesh</option>
                <option value="region3">Bangladesh</option>
                <option value="region3">Afghanistan</option>
                <option value="region3">Albania</option>
                <option value="region3">Algeria</option>
              </select>
              <select className="w-full lg:w-auto px-5 py-3 text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Services Type</option>
                <option value="region1">Services Type1</option>
                <option value="region2">Services Type2</option>
                <option value="region3">Services Type3</option>
                <option value="region3">Services Type4</option>
                <option value="region3">Services Type5</option>
                <option value="region3">Services Type6</option>
              </select>
              <button className="w-full lg:w-auto px-16 py-4 font-bold uppercase bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Find Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT US  */}
      <div>
      <div className="md:px-[2rem] px-[1rem] py-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="pt-[6rem]">
            <img
              src="https://preetheme.com/html/bhouse/assets/img/about3.png"
              alt="about"
              className="lg:h-[100vh]"
            />
          </div>
          <div className="flex flex-col">
            <div className="bg-white px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-36 half-top-border">
              <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                ABOUT US
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-[#0b2b3c] font-bold py-2">
              Architects With Difference & New Approach.
            </p>
            <p className="text-black py-3 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat lectus sed justo sollicitudin, non porttitor nunc varius.
            </p>
            <div className="border flex items-center py-5 px-4 gap-4 mb-5 mt-4">
              <img src={home} alt="home" className="h-14 w-16" />
              <div className="flex flex-col">
                <h1 className="font-bold">The Perfect Residency</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labore et
                </p>
              </div>
            </div>
            <div className="border flex items-center py-5 px-4 gap-4 mb-5">
              <img src={man} alt="man" className="h-14 w-16" />
              <div className="flex flex-col">
                <h1 className="font-bold">Global Architect Experts</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labore et
                </p>
              </div>
            </div>
            <div className="border flex items-center py-5 px-4 gap-4">
              <img src={storage} alt="storage" className="h-14 w-16" />
              <div className="flex flex-col">
                <h1 className="font-bold">Built-in Storage Cupboards</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labore et
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Our Services */}
      <div className="py-[2rem]">
        <Services />
      </div>
      {/* Counting */}
      <div>
        <Counter />
      </div>
      {/* PROPERTY */}
      <div className="py-[2rem]">
        <Property />
      </div>
      {/* APARTMENTS SKETCH */}
      <div>
        <ApartmentsPlan />
      </div>
      {/* AREA POPERTIES */}
      <div>

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
      <div className="py-[2rem]">
        <BlogNews />
      </div>
      {/* Img blog */}
      <div>
        <ImgBlog />
      </div>
    </Layout>
  );
};

export default HomeStyle05;
