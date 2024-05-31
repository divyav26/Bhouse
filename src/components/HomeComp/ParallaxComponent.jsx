import React from 'react';
import { Parallax } from 'react-parallax';
import { IoPlayCircleOutline } from "react-icons/io5";

const ParallaxComponent = () => {
  return (
    <div className="relative">
      <Parallax bgImage="https://images.hdqwalls.com/download/cityscape-colorful-buildings-2m-1920x1080.jpg" strength={400} bgImageStyle={{objectFit: 'cover', width: '100%', height: '70vh'}}>
        <div className="lg:h-[70vh] h-[40vh] flex items-center justify-center text-white">
          {/* Content here */}
          <h1 className="text-4xl font-bold">< IoPlayCircleOutline className='text-white text-5xl' ></IoPlayCircleOutline></h1>
        </div>
      </Parallax>

    </div>
  );
};

export default ParallaxComponent;
