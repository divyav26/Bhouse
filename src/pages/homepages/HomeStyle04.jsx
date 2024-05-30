import { useEffect, useRef } from "react";
import { FaHouseChimney } from "react-icons/fa6";
import video from '../../imgs/home/video/v2.mp4'
import Layout from "../../components/Layout";
import Aboutus from "../../components/HomeComp/Aboutus";
import Counter from "../../components/HomeComp/Counter";
import Property from "../../components/HomeComp/Property";
import OurCategory from "../../components/HomeComp/OurCategory";
import Testimonials from "../../components/HomeComp/Testimonials";
import BlogNews from "../../components/HomeComp/BlogNews";
import ImgBlog from "../../components/HomeComp/ImgBlog";
import ParallaxComponent from "../../components/HomeComp/ParallaxComponent";
import ApartmentsPlan from "../../components/HomeComp/ApartmentsPlan";
import Services from "../../components/HomeComp/Services";
import man from '../../imgs/home/man.png'
import home from '../../imgs/home/home.png'
import storage from '../../imgs/home/storage.png'


const HomeStyle04 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <Layout>
      {/* First img page */}
      <div className="relative w-full bg-white contrast-100">
        <video ref={videoRef} className="w-full rounded-md" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-white text-xl font-bold flex gap-2 items-center">
            <FaHouseChimney />
            Real Estate Agency
          </span>
          <p className="text-white text-5xl font-black text-center">
            FIND YOUR AMAZING REAL <br />HOUSE
            BUY US
          </p>
        </div>
      </div>
      {/* About Us 1 */}
      <div>
        <Aboutus />
      </div>
      {/* Counting */}
      <div>
        <Counter />
      </div>
      {/* ABOUT US 2 */}
      <div>
      <div className="md:px-[2rem] p-2 py-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div>
            <img
              src="https://preetheme.com/html/bhouse/assets/img/about3.png"
              alt="about"
              className="h-[100vh]"
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
      <div>
        <Services />
      </div>
      {/* PROPERTY */}
      <div>
        <Property />
      </div>
      {/* APARTMENTS SKETCH */}
      <div>
        <ApartmentsPlan />
      </div>
      {/* Parallax */}
      <div>
        <ParallaxComponent />
      </div>
      {/* OUR CATEGORY */}
      <div>
        <OurCategory />
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

export default HomeStyle04;
