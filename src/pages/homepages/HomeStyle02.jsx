import { useState, useRef, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import Layout from "../../components/Layout";
import Counter from "../../components/HomeComp/Counter";
import Property from "../../components/HomeComp/Property";
import ApartmentsPlan from "../../components/HomeComp/ApartmentsPlan";
import ParallaxComponent from "../../components/HomeComp/ParallaxComponent";
import Testimonials from "../../components/HomeComp/Testimonials";
import ImgBlog from "../../components/HomeComp/ImgBlog";
import BlogNews from "../../components/HomeComp/BlogNews";
import Aboutus from "../../components/HomeComp/Aboutus";



const videos = [
  "https://www.shutterstock.com/shutterstock/videos/1086596855/preview/stock-footage-interior-of-the-living-room-d-illustration.webm",
  "https://www.shutterstock.com/shutterstock/videos/1062608251/preview/stock-footage-interior-of-the-living-room-d-illustration.webm",
  "https://www.shutterstock.com/shutterstock/videos/1063513120/preview/stock-footage-interior-of-the-living-room-d-illustration.webm",
  "https://www.shutterstock.com/shutterstock/videos/1083305290/preview/stock-footage-interior-of-the-living-room-d-illustration.webm",
];
const HomeStyle02 = () => {
  const items = [
    "Vestibulum Id Nibh Ligula. Pellentesque Sit Amet Lorem",
    "Curabitur Euismod Pretium Velit Sit Amet Lobortis.",
    "Donec Ornare Sapien Ut Tellus Sagittis",
    "Mauris Egestas Tellus Viverra Orci Aliquet Lacinia",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Effect to automatically move to the next slide after a certain interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Adjust the interval duration (in milliseconds) as needed

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, [currentIndex]);

  return (
    <Layout>
      {/* First img page */}
      <div className="relative">
        <div className="overflow-hidden w-full">
          <div className="flex transition-transform ease-in-out duration-300 transform contrast-100">
            {videos.map((video, index) => (
              <video
                key={index}
                ref={videoRef}
                className={`w-full ${
                  index === currentIndex ? "block" : "hidden"
                }`}
                autoPlay
                muted
                loop
              >
                <source src={video} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white text-xl font-bold flex gap-2 items-center">
            WELCOME TO BHOUSE
          </h2>
          <h1 className="text-white text-5xl font-bold text-center">
            FIND YOUR AMAZING REAL <br /> HOUSE BUY US
          </h1>
          <CiHeart className="text-white animate-bounce mt-10 text-8xl" />
        </div>
      </div>

      {/* ABOUT US  */}
      <div className="">
        <Aboutus />
      </div>
      {/* Building facilities */}
      <div className="lg:flex w-full lg:pt-0 pt-[2rem]">
        <div className="bg-[#5F3AFC] lg:w-[50%] md:px-[2rem] lg:pr-12 lg:py-20 py-10 ">
          <div className="px-3 py-1 border-b-8 border-l-8 border-white w-36 half-top-border1 ">
            <h2 className="text-sm md:text-xl text-white mt-2 font-bold">
              ABOUT US
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-white font-bold py-2">
            Making Living Spaces More Beautiful
          </p>
          <p className="text-white py-3 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            feugiat lectus sed justo sollicitudin, non porttitor nunc varius.
            Lorem ipsum dolor sit amet consectetur adipisicing elit ullam uilal
            ilal akala.
          </p>
          <div className="flex flex-col mt-4">
            <ul className="text-white space-y-4">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center font-bold text-xs"
                >
                  <span className="w-6 mr-2 text-white font-bold flex justify-center items-center rounded-full">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <img
            src="https://www.homelane.com/blog/wp-content/uploads/2022/10/minimalist-slanting-wooden-dining-room-ceiling-design-768x512.jpg"
            alt="about"
            className="lg:h-[100vh] w-full"
          />
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
        {/* <Area /> */}
      </div>
      {/* Parallax */}
      <div>
        <ParallaxComponent />
      </div>
      {/* OUR CATEGORY */}
      <div className="py-[2rem]">
        <BlogNews />
      </div>
      {/* OUR TESTIMONIAL */}
      <div>
        <Testimonials />
      </div>
      {/* BLOG & NEWS */}
      <div>
          <BlogNews />
      </div>
      {/* Img blog */}
      <div>
        <ImgBlog />
      </div>
    </Layout>
  );
};

export default HomeStyle02;
