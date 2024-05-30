import React from 'react'
import comments from '../../imgs/home/Comments.jpg'

const Testimonials = () => {
  return (
    <div>
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
            <div className="lg:flex gap-4">
              <img
                src="https://preetheme.com/html/bhouse/assets/img/tes1.jpg"
                alt=''
                className="lg:w-40 h-40 w-80 lg:pb-0 pb-4"
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
            <div className="lg:flex gap-4">
              <img
                src="https://preetheme.com/html/bhouse/assets/img/tes2.jpg"
                alt=''
                className="lg:w-40 h-40 w-80 lg:pb-0 pb-4"
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
    </div>
  )
}

export default Testimonials
