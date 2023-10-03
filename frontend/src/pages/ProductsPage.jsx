import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import Footer from "../components/Layout/Footer";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const sortedData =
        productData &&
        productData.slice().sort((a, b) => a.total_sell - b.total_sell);
      setData(sortedData);
    } else {
      const filteredData =
        productData &&
        productData.filter((item) => item.category === categoryData);
      setData(filteredData);
    }
  }, []);

  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data &&
            data.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center mt-8 text-2xl">
            No Products Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
