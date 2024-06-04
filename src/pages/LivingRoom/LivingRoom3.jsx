import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArchiveDrawerLine } from "react-icons/ri";
import prop1 from '../../imgs/LivingRoom/Prop3-img1.jpg'
import prop2 from '../../imgs/LivingRoom/Prop3-img2.jpg'
import prop3 from '../../imgs/LivingRoom/Prop3-img3.jpg'
import prop4 from '../../imgs/LivingRoom/Prop3-img4.jpg'
import prop5 from '../../imgs/LivingRoom/Prop3-img5.jpg'
import prop6 from '../../imgs/LivingRoom/Prop3-img6.jpg'
import prop7 from '../../imgs/LivingRoom/Prop3-img7.jpg'
import prop8 from '../../imgs/LivingRoom/Prop3-img8.jpg'

function LivingRoom3() {
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
          <div className="my-1">
            <h1 className="uppercase text-2xl font-bold">Living Room</h1>
            <p className="text-black/80 my-4 text-xl md:text-2xl font-semibold">
              3BHK +Balcony apartment available for sale. Location Santacruz
              west. Carpet Area 1300sqft . Price 6.75 CR nego
            </p>

            <ul className="">
              <li className="flex items-center mb-4">
                <div className="bg-[#5F3AFC] p-3 text-white rounded-full inline-block mr-3">
                  <RiArchiveDrawerLine />
                </div>
                <div>
                  <h2 className="uppercase text-lg font-bold">
                    Fully Furnished
                  </h2>
                  <p className="text-black/70">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Totam, similique eum!
                  </p>
                </div>
              </li>

              <li className="flex items-center">
                <div className="bg-[#5F3AFC] p-3 text-white rounded-full inline-block mr-3">
                  <RiArchiveDrawerLine />
                </div>
                <div>
                  <h2 className="uppercase text-lg font-bold">
                    Fully Furnished
                  </h2>
                  <p className="text-black/70">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Totam, similique eum!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default LivingRoom3;
