import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative min-h-[70vh] md:min-h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url(https://storage-asset.msi.com/us/picture/banner/banner_16728874060153c2d718721b32025a2b786f0bca6f.jpeg)",
      }}
    >
      <div className="text-white">
        <h1 className="text-4xl md:text-6xl font-semibold leading-snug mb-4">
          Best Collection for <br /> Laptops
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
