import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Custom Left Arrow
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

const PropertyData = [
  {
    id: 1,
    image: "https://preetheme.com/html/bhouse/assets/img/product/1.jpg",
    name: "New York",
    desc: "Pacific Hights Area",
    button: "View Property",
  },
  {
    id: 2,
    image: "https://preetheme.com/html/bhouse/assets/img/product/2.jpg",
    name: "New York",
    desc: "Pacific Hights Area",
    button: "View Property",
  },
  {
    id: 3,
    image: "https://preetheme.com/html/bhouse/assets/img/product/3.jpg",
    name: "New York",
    desc: "Pacific Hights Area",
    button: "View Property",
  },
  {
    id: 4,
    image: "https://preetheme.com/html/bhouse/assets/img/product/4.jpg",
    name: "New York",
    desc: "Pacific Hights Area",
    button: "View Property",
  },
];

const Area = () => {
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
    <div className="md:px-[2rem] lg:px-[2rem] xl:px-36 lg:pt-20">
      <div className="flex flex-col items-center justify-center lg:mt-20">
        <div className="px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-35 half-top-border">
          <h2 className="text-sm md:text-xl pt-1 text-[#0B2B3c] font-bold">
            AREA POPERTIES
          </h2>
        </div>
        <h1 className="text-4xl font-black pb-10 text-[#0B2B3C] text-center">
          Properties By Location
        </h1>
      </div>
      <div>
        <Slider {...settings}>
          {PropertyData.map((menu, index) => (
            <div className="my-10 px-2" key={index}>
              <div className="border flex flex-col p-4 gap-2">
                <div>
                  <img src={menu.image} alt={`Property ${index}`} />
                </div>
                <div>
                  <h3 className="text-sm">{menu.name}</h3>
                  <p className="text-lg font-bold">{menu.desc}</p>
                  <button className="mt-2 px-4 py-2 bg-[#5f3afc] text-xs font-semibold text-white rounded-3xl">
                    {menu.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
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

export default Area;
