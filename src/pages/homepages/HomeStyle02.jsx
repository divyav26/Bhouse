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
import Area from '../../components/HomeComp/Area'
import Services from "../../components/HomeComp/Services";



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
      <div className="flex w-full h-[80vh]">
        <div className="bg-[#5F3AFC] w-[50%] md:px-[2rem] lg:pl-36 lg:pr-12 py-20">
          <div className="px-3 py-1 border-b-8 border-l-8 border-white w-60 half-top-border1 ">
            <h2 className="text-sm md:text-xl text-white mt-2 font-bold uppercase">
              Building facilities
            </h2>
          </div>
          <p className="text-xl md:text-4xl text-white font-bold py-2">
            Making Living Spaces More Beautiful
          </p>
          <p className="text-white py-3 text-base">
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
                  className="flex items-center font-bold text-base"
                >
                  <span className="w-6 h-6 mr-2 text-white font-bold flex justify-center items-center rounded-full">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[50%]">
          <img
            src="https://www.homelane.com/blog/wp-content/uploads/2022/10/minimalist-slanting-wooden-dining-room-ceiling-design-768x512.jpg"
            alt="about"
            className="h-[80vh] w-full"
          />
        </div>
      </div>
      {/* Our Services */}
      <div className="py-[1rem]">
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
        <Area />
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
