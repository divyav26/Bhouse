import { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhotoCameraBack } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import InputBox from '../../components/HomeComp/InputBox'
import { RiAdminFill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import Layout from "../../components/Layout";
import comments from '../../imgs/home/Comments.jpg'
import ApartmentsPlan from "../../components/HomeComp/ApartmentsPlan";
import ParallaxComponent from "../../components/HomeComp/ParallaxComponent";
import Counter from "../../components/HomeComp/Counter";
import OurCategory from "../../components/HomeComp/OurCategory";
import ImgBlog from "../../components/HomeComp/ImgBlog";
import Property from "../../components/HomeComp/Property";



const HomeStyle01 = () => {
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
      <section className="px-2 md:px-[2rem] lg:px-[2rem]  lg:mt-20">
        <div className="flex flex-col sm:gap-5 sm:flex-row items-center sm:items-start ">
          <div className="w-full md:1/2 ">
            <img
              src="https://preetheme.com/html/bhouse/assets/img/about.png"
              alt=""
              className="w-full h-auto mb-4"
            />
          </div>
          <div className="w-full md:1/2 sm:mt-10">
            <div className="flex flex-col">
              <div className="bg-white px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-36 half-top-border">
                <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                  ABOUT US
                </h2>
              </div>
            </div>
            <p className="text-xl md:text-3xl text-[#0b2b3c]5f3afc font-bold py-2">
              Architects With Difference & New Approach.
            </p>
            <p className="text-black py-4 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat lectus sed justo sollicitudin, non porttitor nunc varius.
              Donec commodo ac nibh quis aliquet. Suspendisse varius hendrerit
              odio eget efficitur. Mauris sed neque porta, lacinia metus sit
              amet, laoreet quam. Maecenas dapibus ligula vel magna hendrerit.
            </p>
            <div className="flex justify-between mr-20 py-4">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <div className="bg-[#E5DFFF] p-2 rounded-full">
                    <IoHomeOutline className="text-[#5F3AFC] text-2xl" />
                  </div>
                  <h2 className="text-lg">Smart Home Design</h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#E5DFFF] p-2 rounded-full">
                    <MdOutlineSecurity className="text-[#5F3AFC] text-2xl" />
                  </div>
                  <h2 className="text-lg">Complete 24/7 Security</h2>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <div className="bg-[#E5DFFF] p-2 rounded-full">
                    <MdOutlinePhotoCameraBack className="text-[#5F3AFC] text-2xl" />
                  </div>
                  <h2 className="text-lg">Beautiful Scene Around</h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#E5DFFF] p-2 rounded-full">
                    <IoMdFootball className="text-[#5F3AFC] text-2xl" />
                  </div>
                  <h2 className="text-lg">Exceptional Lifestyle</h2>
                </div>
              </div>
            </div>
            <p className="text-black py-5 text-base">
              Morbi porttitor nibh justo, sit amet imperdiet ligula laoreet eu.
              Sed mollis nec sem vel laoreet. Donec tincidunt consequat gravida.
              Nullam accumsan lobortis nisl sed gravida. Aliquam facilisis
              blandit accumsan. Suspendisse elementum sit amet tortor eget
              mollis.
            </p>
            <a
              className="block uppercase bg-[#5F3AFC] px-10 py-4 w-[25%] text-sm font-medium text-white shadow hover:bg-[#0B2B3C] focus:outline-none focus:ring active:bg-[#0B2B3C] "
              href="#"
            >
              About Us
            </a>
          </div>
        </div>
      </section>
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
      <div className="md:px-[2rem] lg:px-[2rem] lg:pt-20">
        <div className="flex flex-col items-center justify-center ">
          <div className="px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-35 half-top-border ">
            <h2 className="text-sm md:text-xl pt-1 text-[#0B2B3c] font-bold">
              BLOG & NEWS
            </h2>
          </div>
          <h1 className="text-4xl font-black pb-10 text-[#0B2B3C] text-center">
            Latest Blog
          </h1>
        </div>
        <div className="md:flex lg:flex md:gap-x-6">
          <div className="md:w-1/3  md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/blog/1.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute -bottom-7 right-0 mr-4 text-black bg-white shadow py-2 px-7">
                  <span className="flex flex-col items-center justify-center font-bold text-3xl">
                    31 <p className="text-sm font-normal">Oct</p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col px-4 py-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center gap-1">
                    <RiAdminFill className="text-indigo-500" />
                    Admin
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <FaTags className="text-indigo-500" />
                    Technology
                  </span>
                </div>
                <h1 className="text-xl font-bold py-4">
                  Five Ways To Develop a World Class Sales Operations
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/blog/2.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute -bottom-7 right-0 mr-4 text-black bg-white shadow py-2 px-7">
                  <span className="flex flex-col items-center justify-center font-bold text-3xl">
                    31 <p className="text-sm font-normal">Oct</p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col px-4 py-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center gap-1">
                    <RiAdminFill className="text-indigo-500" />
                    Admin
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <FaTags className="text-indigo-500" />
                    Technology
                  </span>
                </div>
                <h1 className="text-xl font-bold py-4">
                  Five Ways To Develop a World Class Sales Operations
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3  md:pb-20">
            <div className="bg-white border rounded">
              <div className="relative">
                <img
                  src="https://preetheme.com/html/bhouse/assets/img/blog/3.jpg"
                  alt="contactus"
                  className="lg:w-full"
                />
                <div className="absolute -bottom-7 right-0 mr-4 text-black bg-white shadow py-2 px-7">
                  <span className="flex flex-col items-center justify-center font-bold text-3xl">
                    31 <p className="text-sm font-normal">Oct</p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col px-4 py-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center gap-1">
                    <RiAdminFill className="text-indigo-500" />
                    Admin
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <FaTags className="text-indigo-500" />
                    Technology
                  </span>
                </div>
                <h1 className="text-xl font-bold py-4">
                  Five Ways To Develop a World Class Sales Operations
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, dolores! Nisi nostrum molestias ut harum adipisci
                  dolores debitis omnis quis veniam accusamus. Voluptate porro
                  tenetur non vero ab eum quo! !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* img blog  */}
      
      <div className="">
        <ImgBlog />
      </div>

    </Layout>
  );
};

export default HomeStyle01;
