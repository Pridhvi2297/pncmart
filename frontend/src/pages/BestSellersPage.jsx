import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import Footer from "../components/Layout/Footer";

const BestSellersPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d = productData && productData.sort((a,b) => b.total_sell - a.total_sell);
    setData(d);
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data &&
            data.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BestSellersPage;
