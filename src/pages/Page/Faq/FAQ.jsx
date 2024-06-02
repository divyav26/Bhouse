import { useState } from "react";
import Dropdown from '../Faq/Dropdown'
import Layout from "../../../components/Layout";
import { NavLink } from "react-router-dom";
import banner from '../../../imgs/banner.jpg'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const dropdownData = [
    {
      title: "How to buy a product?",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla facilisis, gravida metus egestas, facilisis orci. Sed tincidunt pellentesque nisl, in vestibulum libero rhoncus nec. Integer at arcu eget massa sodales vehicula sed sit amet libero. Donec elementum eget libero a interdum.",
      ],
    },
    {
      title: "How can i make refund from your website?",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla facilisis, gravida metus egestas, facilisis orci. Sed tincidunt pellentesque nisl, in vestibulum libero rhoncus nec. Integer at arcu eget massa sodales vehicula sed sit amet libero. Donec elementum eget libero a interdum.",
      ],
    },
    {
      title: "I Am A new user. How should i start?",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla facilisis, gravida metus egestas, facilisis orci. Sed tincidunt pellentesque nisl, in vestibulum libero rhoncus nec. Integer at arcu eget massa sodales vehicula sed sit amet libero. Donec elementum eget libero a interdum.",
      ],
    },
    {
      title: "returns and refunds",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla facilisis, gravida metus egestas, facilisis orci. Sed tincidunt pellentesque nisl, in vestibulum libero rhoncus nec. Integer at arcu eget massa sodales vehicula sed sit amet libero. Donec elementum eget libero a interdum.",
      ],
    },
    {
      title: "are my details secured?",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla facilisis, gravida metus egestas, facilisis orci. Sed tincidunt pellentesque nisl, in vestibulum libero rhoncus nec. Integer at arcu eget massa sodales vehicula sed sit amet libero. Donec elementum eget libero a interdum.",
      ],
    },
    {
      title: "How to start?",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nulla facilisis, gravida metus egestas, facilisis orci. Sed tincidunt pellentesque nisl, in vestibulum libero rhoncus nec. Integer at arcu eget massa sodales vehicula sed sit amet libero. Donec elementum eget libero a interdum.",
      ],
    },
  ];
    return (
      <Layout>
         <div className="relative">
       <div className="absolute lg:inset-0 flex left-2 lg:py-24 md:py-16 pt-[1rem]">
          <div className="bg-white bg-opacity-80 text-blue-950 p-5 md:p-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-6">Frequently Asked Questions</p>
            <div className="flex gap-2">
              <NavLink to="/" className="text-lg ">
                Home
              </NavLink>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <NavLink to="/faq" className="text-lg ">
                Faq
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={banner} alt="banner" className="w-full md:h-auto h-[20vh]" />
        </div>
      </div>
        <section className="mx-auto py-10 px-2 lg:px-[2rem]">
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="px-3 py-1 border-b-8 border-l-8 border-[#5f3afc] w-30 half-top-border ">
              <h2 className="text-sm md:text-xl pt-1 text-[#0B2B3c] font-bold">
                FAQ
              </h2>
            </div>
            <h1 className="text-4xl font-black text-[#0B2B3C] ">
              Frequently Asked Questions
            </h1>
          </div>
          {dropdownData.map((dropdown, index) => (
            <Dropdown
              key={index}
              title={dropdown.title}
              content={dropdown.content}
              isOpen={openIndex === index}
              onClick={() => handleDropdownClick(index)}
            />
          ))}
        </section>
      </Layout>
    );
};

export default FAQ;
