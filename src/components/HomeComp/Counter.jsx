
import { Parallax } from 'react-parallax';
import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { VscChecklist } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { BiSolidHourglassBottom } from "react-icons/bi";



const Counter = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5, // Trigger animation when 50% of the component is visible
      });
  return (
    <div>
      <div className="relative">
      <Parallax bgImage="https://wallpapercave.com/wp/wp2464201.jpg" strength={400} bgImageStyle={{objectFit: 'cover', width: '100%', height: '70vh', Background:'#6946F1'}}>
      <div className="absolute inset-0 bg-[#5635E3] opacity-85"></div>
        <div className="lg:h-[50vh] h-[100vh]  flex items-center justify-center text-white">
            
          {/* Content here */}
          <div className="text-4xl font-bold absolute">
            <div>
            <div>
                    <div className='lg:flex lg:justify-between mt-[1rem] lg:ml-0'>
                    <div className='lg:flex lg:items-center gap-[1rem] p-[2rem]'>
                        <BiSolidHourglassBottom  className='text-5xl text-white lg:p-1' />
                        <div ref={ref} className='flex flex-col'>
                            {inView && <CountUp start={0} end={255} duration={2} />}
                            <p className='text-xs'>Rmaining Project</p>
                        </div>

                    </div>

                    <div className='lg:flex lg:items-center gap-[1rem] p-[2rem]'>
                        <VscChecklist className='text-5xl text-white lg:p-1' />
                        <div ref={ref} className='flex flex-col'>
                            {inView && <CountUp start={0} end={201} duration={2} />}
                            <p className='text-xs'>Rmaining Project</p>
                        </div>

                    </div>

                    <div className='lg:flex lg:items-center gap-[1rem] p-[2rem]'>
                        <IoDiamondOutline className='text-5xl text-white lg:p-1' />
                        <div ref={ref} className='flex flex-col'>
                            {inView && <CountUp start={0} end={25} duration={2} />}
                            <p className='text-xs'>Rmaining Project</p>
                        </div>

                    </div>

                    <div className='lg:flex lg:items-center gap-[1rem] p-[2rem]'>
                        <FaUser className='text-5xl text-white lg:p-1' />
                        <div ref={ref} className='flex flex-col'>
                            {inView && <CountUp start={0} end={100} duration={2} />}
                            <p className='text-xs'>Rmaining Project</p>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            </div>
      
        </div>
      </Parallax>

    </div>
    </div>
  )
}

export default Counter
