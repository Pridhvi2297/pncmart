import React from "react";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../../static/data";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold text-center text-black mb-8">
          Shop By Category
        </h1>
        <div className="flex flex-wrap -mx-2">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2 mb-4"
            >
              <div
                className="group relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 border border-gray-200"
                onClick={() => navigate(`/products?category=${category.title}`)}
              >
                <img
                  src={category.image_Url}
                  alt={category.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold text-gray-800 text-center">
                    {category.title}
                  </h5>
                  <p className="text-sm text-gray-500 mt-2">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
