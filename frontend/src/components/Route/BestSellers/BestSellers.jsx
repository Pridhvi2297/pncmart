import React from "react";
import { productData } from "../../static/data";
import ProductCard from "../ProductCard/ProductCard";

const BestSellers = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white py-4">
      <div className="container mx-auto">

      <h1 className='text-4xl md:text-6xl font-semibold text-center md:mb-0 mb-6 lg:leading-normal'>
                <span className='text-[#2d2e2c]'>
                Best Selling Products 
                </span>
            </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {productData &&
            productData.map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
