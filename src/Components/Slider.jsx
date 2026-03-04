import React, { useEffect } from "react";

const Slider = ({ images, currentIndex, setCurrentIndex }) => {

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, setCurrentIndex]);

  return (
    <div className="w-full flex lg:flex-col flex-col-reverse gap-4">

      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      <div className="flex gap-3 justify-center">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => setCurrentIndex(index)}
            className={`w-15 lg:w-24 h-10 lg:h-15 object-cover rounded-lg cursor-pointer transition-all duration-300 
              ${currentIndex === index 
                ? "ring-4 ring-blue-600 scale-105" 
                : "opacity-60 hover:opacity-100"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;