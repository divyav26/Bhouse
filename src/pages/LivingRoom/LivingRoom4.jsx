import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { FaVectorSquare } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { MdOutlineBalcony } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import prop1 from '../../imgs/LivingRoom/Prop4-img1.jpg'
import prop2 from '../../imgs/LivingRoom/Prop4-img2.jpg'
import prop3 from '../../imgs/LivingRoom/Prop4-img3.jpg'
import prop4 from '../../imgs/LivingRoom/Prop4-img4.jpg'
import prop5 from '../../imgs/LivingRoom/Prop4-img5.jpg'
import prop6 from '../../imgs/LivingRoom/Prop4-img6.jpg'
import prop7 from '../../imgs/LivingRoom/Prop4-img7.jpg'
import prop8 from '../../imgs/LivingRoom/Prop4-img8.jpg'

function LivingRoom4() {
  const ImgData = [
    {
      id: 1,
      image: prop1,
    },
    {
      id: 2,
      image: prop2,
    },
    {
      id: 3,
      image: prop3,
    },
    {
      id: 4,
      image: prop4,
    },
    {
      id: 4,
      image: prop5,
    },
    {
      id: 4,
      image: prop6,
    },
    {
      id: 4,
      image:prop7,
    },
    {
      id: 4,
      image:prop8,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="md:px-[2rem] px-[1rem] my-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <div className=" bg-white shadow-md overflow-hidden">
              <Slider {...settings} className="h-full w-full object-cover">
                {ImgData.map((menu, index) => (
                  <div key={index}>
                    <div className="flex flex-col">
                      <div className="overflow-hidden">
                        <img
                          src={menu.image}
                          className="w-[100%] lg:h-[60vh] object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-110"
                          alt={`Property ${index}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="bg-[#5f3afc] text-white px-4 pt-2 flex flex-col justify-center">
           <h1 className="md:text-xl lg:text-2xl font-bold text-center">3BHK With Wrapped around balcony</h1>
           <p className="py-1 border-dotted border-b">View Details &rarr;</p>
           <div className="grid grid-cols-2 gap-4 py-4">
              <p className="flex items-center gap-2"><FaVectorSquare />1150carpet +350 sq ft </p>
              <p className="flex items-center gap-2"><MdOutlineBedroomParent />3 BedRoom</p>
              <p className="flex items-center gap-2"><MdOutlineBathroom /> 2 BathRoom</p>
              <p className="flex items-center gap-2"><MdOutlineBalcony  />1 Balcony</p>
           </div>
           <hr className="border-dotted border-b" />
           <div className="py-4">
            <p className="flex items-center gap-2"><CiLocationOn />ROSE QUEEN ,15th road Khar</p>
           </div>
           <hr className="border-dotted border-b" />
          
           <div className="py-4">
            <p className="flex items-center gap-2"><FaRupeeSign  /> 6.25cr</p>
           </div>
           <hr className="border-dotted border-b" />


          </div>
        </div>
      </div>
    </>
  );
}

export default LivingRoom4;
