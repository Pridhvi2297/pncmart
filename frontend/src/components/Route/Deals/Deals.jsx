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
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold text-center text-black shadow-lg mb-8">
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
