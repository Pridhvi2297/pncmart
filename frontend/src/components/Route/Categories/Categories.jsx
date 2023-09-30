import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">

      {/* Categories Section */}
      <div className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {categoriesData &&
              categoriesData.map((category) => (
                <div
                  key={category.id}
                  className="group relative overflow-hidden bg-white rounded-lg shadow-md cursor-pointer"
                  onClick={() => navigate(`/products?category=${category.title}`)}
                >
                  <img
                    src={category.image_Url}
                    alt={category.title}
                    className="w-full h-64 object-cover transition-transform transform group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h5 className="text-xl font-semibold">{category.title}</h5>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

            {/* Branding Section */}
            <div className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center -mx-4">
            {brandingData &&
              brandingData.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
                >
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.Description}
                        </p>
                      </div>
                    </div>
                    {/* Additional content for branding item */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
