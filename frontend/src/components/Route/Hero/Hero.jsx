import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define your banners and text content here
  const slides = [
    {
      banner:
        "https://storage-asset.msi.com/us/picture/banner/banner_16728874060153c2d718721b32025a2b786f0bca6f.jpeg",
      title: "Best Collection for Computers",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, assumenda? Quisquam itaque exercitationem labore vel, dolore quidem asperiores, laudantium temporibus soluta optio consequatur aliquam deserunt officia. Dolorum saepe nulla provident.",
    },
    {
      banner:
        "https://storage-asset.msi.com/us/picture/banner/banner_16728874060153c2d718721b32025a2b786f0bca6f.jpeg",
      title: "Explore Exciting Deals",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, assumenda? Quisquam itaque exercitationem labore vel, dolore quidem asperiores, laudantium temporibus soluta optio consequatur aliquam deserunt officia. Dolorum saepe nulla provident.",
    },
    {
      banner:
        "https://storage-asset.msi.com/us/picture/banner/banner_16728874060153c2d718721b32025a2b786f0bca6f.jpeg",
      title: "Upgrade Your Gaming Setup",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, assumenda? Quisquam itaque exercitationem labore vel, dolore quidem asperiores, laudantium temporibus soluta optio consequatur aliquam deserunt officia. Dolorum saepe nulla provident.",
    },
  ];

  useEffect(() => {
    // Automatically scroll to the next slide every 10 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative min-h-[70vh] md:min-h-[80vh] bg-gray-100">
      <Carousel
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={10000} // 10 seconds
        style={{ maxWidth: "80%", margin: "0 auto" }}
      >
        {slides.map((slide, index) => (
          <div key={index} style={{ maxHeight: "600px" }}>
            <img
              src={slide.banner}
              alt={`Banner ${index + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover", // Crop image while maintaining aspect ratio
              }}
            />
          </div>
        ))}
      </Carousel>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-semibold leading-snug mb-4 text-white">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          {slides[currentSlide].description}
        </p>
        <Link to="/products">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-2 cursor-pointer rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
