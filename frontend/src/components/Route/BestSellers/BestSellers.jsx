import React from "react";
import { productData, brandingData } from "../../static/data";

import ProductCard from "../ProductCard/ProductCard";

const BestSellers = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white py-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold text-center md:mb-0 mb-6 lg:leading-normal">
          <span className="text-[#2d2e2c]">Best Selling Products</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {productData &&
            productData.map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
        </div>

        {/* Branding Section */}
        <div className="py-12">
          <h1 className="text-4xl md:text-6xl font-semibold text-center text-black mb-8">
            Our Commitment
          </h1>
          <ul className="flex flex-wrap justify-between items-center pl-0">
            {brandingData.map((item) => (
              <li
                key={item.id}
                className="w-full md:w-1/2 lg:w-1/3 mb-6 text-center"
              >
                <div className="w-12 h-12 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
