import React, { useEffect, useState } from "react";
import { productData } from "../../static/data";
import ProductCard from "../ProductCard/ProductCard";

const Deals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sortedData = productData
      .slice()
      .sort((a, b) => b.total_sell - a.total_sell)
      .slice(0, 5);
    setData(sortedData);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold text-center text-black mb-8">
          Explore Exciting Deals
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((item, index) => (
            <ProductCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
