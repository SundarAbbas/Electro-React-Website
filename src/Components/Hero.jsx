import React, { useState } from "react";
import { BiRecycle, BiTrash } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import Slider from "./Slider";

const Hero = () => {
  const imageData = [
    {
      id: 1,
      src: "/one.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "/two.jpg",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "/three.jpg",
      alt: "Image 3",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="px-6 py-4 mt-10 flex justify-center gap-6 items-center flex-col lg:flex-row ">
      {/* Left */}
      <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center gap-3 w-full lg:w-[40vw]">
        <h1 className="text-center lg:text-start text-black lg:mb-4 text-xl lg:text-6xl font-bold">
          Take Ideas from better to best
        </h1>
        <p className="text-center lg:text-start text-xs lg:text-lg lg:mb-5">
          Electro is yout teams visual platform to connect , collaborate and
          create - together
        </p>
        <input
          type="text"
          placeholder="Enter Your Work Email"
          className="w-full px-5 py-2 border border-gray-200 rounded-full"
        />
        <button className="tranistion-all hover:bg-blue-900      bg-blue-800 text-white rounded-full py-2  w-full">
          Sign up free &#8594;
        </button>
        <p className="text-xs text-gray-600">
          Collaorate with your team within minutes
        </p>
        <div className="w-full flex-col lg:flex-row gap-5 lg:gap-0 flex px-3 justify-between items-center bg-slate-200 py-3">
          <div className="flex flex-col   gap-1">
            <div className="flex  gap-2 ">
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar />
            </div>
            <p className="text-gray-700 text-xs">Based on 3401+ Reviews</p>
          </div>

          <div className="flex gap-5 font-bold   items-center">
            <BiRecycle />
            <p>Get App</p>
            <p>Captera</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-3 w-full lg:w-[40vw]">
        <Slider
          images={imageData}
          currentIndex={currentImage}
          setCurrentIndex={setCurrentImage}
        />
      </div>
    </div>
  );
};

export default Hero;
