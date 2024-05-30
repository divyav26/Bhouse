import { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhotoCameraBack } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import InputBox from '../components/HomeComp/InputBox'
import { RiAdminFill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import Layout from "../components/Layout";
import comments from '../imgs/home/Comments.jpg'
import ApartmentsPlan from "../components/HomeComp/ApartmentsPlan";
import Counter from "../components/HomeComp/Counter";
import OurCategory from "../components/HomeComp/OurCategory";
import ImgBlog from "../components/HomeComp/ImgBlog";
import Property from "../components/HomeComp/Property";
import ParallaxComponent from "../components/HomeComp/ParallaxComponent";
import BlogNews from "../components/HomeComp/BlogNews";
import Aboutus from "../components/HomeComp/Aboutus";


const Home = () => {
  const [switched, setSwitched] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setSwitched((prevSwitched) => !prevSwitched);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (switched) {
      setAnimationClass("animate-slide-up");
    } else {
      setAnimationClass("");
    }
  }, [switched]);

  return (
    <Layout>
      {/* Animation */}
      <div
        className="relative bg-[#EDF5F8] h-[71vh] p-2 md:px-[2rem] lg:px-[2rem] mx-auto"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <div className="lg:flex lg:justify-around md:flex md:justify-around lg:gap-10 lg:py-10">
          <div
            className={`lg:min-w-[50%] md:w-[50%] flex justify-center items-center transition-transform duration-1000 ${
              switched ? "order-2 slide-in-bottom" : "order-1 slide-in-bottom"
            }`}
          >
            <img
              src="https://preetheme.com/html/bhouse/assets/img/hero.png"
              alt="img"
              className="lg:w-full"
            />
          </div>
          <div
            className={`lg:w-[50%] md:w-[50%] flex flex-col justify-center transition-transform duration-1000 ${
              switched ? "order-1 slide-in-bottom " : "order-2 slide-in-bottom "
            }`}
          >
            <div className="text-left flex flex-col gap-5">
              <h2
                className={`text-xl font-bold uppercase text-indigo-500 ${animationClass}`}
              >
                Welcome to bhouse
              </h2>
              <h1
                className={`text-5xl font-black flex flex-wrap text-[#0B2B3C] ${animationClass}`}
              >
                Find Your Amazing Real House Buy
              </h1>
              <p className={`sm:text-xl/relaxed ${animationClass}`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
              <div className={`flex gap-x-4 ${animationClass}`}>
                <a
                  className="block w-full uppercase bg-[#5F3AFC] px-10 py-3 text-sm font-medium text-white shadow hover:bg-[#0B2B3C] focus:outline-none focus:ring active:bg-[#0B2B3C] sm:w-auto"
                  href="#"
                >
                  About Us
                </a>
                <a
                  className="block w-full uppercase px-10 py-3 text-sm font-medium text-white bg-[#0B2B3C] shadow hover:bg-[#5F3AFC] focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  href="#"
                >
                  Our services
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <InputBox />
        </div>
      </div>
      {/* About Us */}
     <div>
      <Aboutus />
     </div>
      {/* About Us Details */}
      <div className="px-2 md:px-[2rem] lg:px-[2rem] md:pt-[2rem] lg:pt-20">
        <div className="flex flex-col md:flex-row gap-x-16">
          <div className="flex flex-col w-full md:w-[50%]">
            <div className="px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-44 half-top-border ">
              <h2 className="text-sm md:text-xl pt-1 text-[#0B2B3c] font-bold">
                ABOUT US
              </h2>
            </div>
            <h1 className="text-4xl font-black text-[#0B2B3C] ">
              Today About Sells Properties
            </h1>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat lectus sed justo sollicitudin, non porttitor nunc varius.
              Donec commodo ac nibh quis aliquet. Suspendisse varius hendrerit
              odio eget efficitur.
            </p>
            <p className="pb-5">
              Houzez allow you to design unlimited panels and real estate custom
              forms to capture leads and keep record of all information
            </p>
            <ul className="list-disc pl-5 pb-10 ">
              <li>Plans and Projects</li>
              <li>Architecture & Decoration</li>
              <li>Live Music Cocerts at Luviana</li>
            </ul>
            <div className="flex gap-4">
              <img
                src="https://preetheme.com/html/bhouse/assets/img/portfolio/1.jpg"
                alt="img1"
                className="h-25 w-1/3"
              />
              <img
                src="https://preetheme.com/html/bhouse/assets/img/portfolio/2.jpg"
                alt="img2"
                className="h-25 w-1/3"
              />
              <img
                src="https://preetheme.com/html/bhouse/assets/img/portfolio/3.jpg"
                alt="img3"
                className="h-25 w-1/3"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-[50%]">
            <img
              src="https://preetheme.com/html/bhouse/assets/img/about2.png "
              alt="img4"
            />
          </div>
        </div>
      </div>
      {/* Our Services */}
      <div>
        <div className=" bg-[#EDF5F8] h-auto">
          <div className="flex flex-col items-center justify-center pt-20">
            <div className="px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-44 half-top-border ">
              <h2 className="text-sm md:text-xl pt-1 text-[#0B2B3c] font-bold">
                OUR SERVICES
              </h2>
            </div>
            <h1 className="text-4xl font-black pb-10 text-[#0B2B3C] text-center">
              Our Main Focus
            </h1>
          </div>
          <div className="w-full md:flex md:gap-3 md:px-[2rem] lg:px-[2rem]">
            <div className="md:w-1/3 p-4 md:pb-20">
              <div className="bg-white text-center p-8 rounded">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/1.png"
                  alt="contactus"
                  className="mx-auto mb-4 w-14 md:w-1/3"
                />
                <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                  Buy A Home
                </p>
                <p className="text-sm md:mb-6 mb-4">
                  Arose mr rapid in so vexed words. Gay welcome led add to
                  lasting chiefly say to looking for better.
                </p>
                <div className=" border-[#5f3afc] half-bottom-border inline-block">
                  <p className="text-light">Get Now &rarr;</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4  md:pb-20">
              <div className="bg-white text-center p-8 rounded">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/2.png"
                  alt="contactus"
                  className="mx-auto mb-4 w-14 md:w-1/3"
                />
                <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                  Sell A Home
                </p>
                <p className="text-sm md:mb-6 mb-4">
                  Arose mr rapid in so vexed words. Gay welcome led add to
                  lasting chiefly say to looking for better.
                </p>
                <div className=" border-[#5f3afc] half-bottom-border inline-block">
                  <p className="text-light">Get Now &rarr;</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4 md:pb-20">
              <div className="bg-white text-center p-8 rounded">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/3.png"
                  alt="contactus"
                  className="mx-auto mb-4 w-14 md:w-1/3"
                />
                <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                  Rent A Home
                </p>
                <p className="text-sm md:mb-6 mb-4">
                  Arose mr rapid in so vexed words. Gay welcome led add to
                  lasting chiefly say to looking for better.
                </p>
                <div className=" border-[#5f3afc] half-bottom-border inline-block">
                  <p className="text-light">Get Now &rarr;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* counter  */}
      <div>
      <Counter />
      </div>
      {/* Property */}
      <div className="px-[2rem] py-[2rem]">
        <Property />
      </div>

            {/* Appartments  */}
      <div className="px-[2rem]">
        <ApartmentsPlan />

      </div>
      {/* parallax  */}
      <div className="px-[2rem] py-[2rem]">
            <ParallaxComponent />
      </div>

      {/* our category  */}
      <div className="px-[2rem] py-[2rem]">
            <OurCategory />
      </div>

      
      {/* Our Testimonials */}
      <div className="bg-[#EDF5F8] h-auto p-2">
        <div className="flex flex-col items-center justify-center pt-16">
          <div className="px-3 pt-1 border-b-8 border-l-8 border-[#5f3afc] w-50 half-top-border ">
            <h2 className="text-sm md:text-xl text-[#0B2B3c] font-bold">
              OUR AWESOME TESTIMONIAL
            </h2>
          </div>
          <h1 className="text-4xl font-black mt-2 text-[#0B2B3C] text-center">
            Clients Feedback
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 p-2 md:p-5 lg:px-[2rem] lg:py-20">
          <div className="w-full lg:w-[50%] bg-white p-8">
            {" "}
            <div className="flex gap-4">
              <img
                src="https://preetheme.com/html/bhouse/assets/img/tes1.jpg"
                className="w-40 h-40"
              />
              <div className="relative flex flex-col">
                <div className="flex flex-col">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga inventore odit, sunt, delectus esse maiores similique!
                  </p>
                  <h1 className="mt-4 font-bold text-xl">
                    Rosalina D. William
                  </h1>
                  <h2 className="text-base text-[#5f3afc] font-bold">
                    Founder
                  </h2>
                </div>
                <img
                  src={comments}
                  alt="comment"
                  className="w-24 h-20 absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] bg-white p-8">
            {" "}
            <div className="flex gap-4">
              <img
                src="https://preetheme.com/html/bhouse/assets/img/tes2.jpg"
                className="w-40 h-40"
              />
              <div className="relative flex flex-col">
                <div className="flex flex-col">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga inventore odit, sunt, delectus esse maiores similique!
                  </p>
                  <h1 className="mt-4 font-bold text-xl">
                    Rosalina D. William
                  </h1>
                  <h2 className="text-base text-[#5f3afc] font-bold">
                    Founder
                  </h2>
                </div>
                <img
                  src={comments}
                  alt="comment"
                  className="w-24 h-20 absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog & News */}
      <div>
        <BlogNews />
      </div>

      {/* img blog  */}
      
      <div className="">
        <ImgBlog />
      </div>

    </Layout>
  );
};

export default Home;
