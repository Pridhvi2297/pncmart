import React from "react";
import DealsTime from "./DealsTime";

const ExclusiveDealsCard = () => {
  return (
    <div className="bg-white rounded-lg lg:flex p-2 mb-6">
      <div className="lg:w-1/2 m-auto">
        <img
          src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center p-4">
        <h2 className="text-xl md:text-2xl font-semibold text-[#333] mb-2">
          iPhone 15 Pro Max 8/256GB
        </h2>
        <p className="text-sm md:text-base text-[#666] mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non
          unde, aliquam iure molestias dolorum minus est pariatur
          exercitationem! Debitis eligendi quas consequatur? Delectus, illo nemo
          distinctio magnam eum cupiditate.
        </p>
        <div className="flex justify-between items-center mb-2">
          <div className="flex">
            <h5 className="font-semibold text-[#d55b45] line-through text-sm md:text-base pr-2">
              $1400
            </h5>
            <h5 className="font-semibold text-[#333] text-sm md:text-base">
              $1300
            </h5>
          </div>
        </div>
        <div className="mb-2">
          <span className="text-[#44a553] text-sm md:text-base">120 Sold</span>
        </div>
        <DealsTime />
      </div>
    </div>
  );
};

export default ExclusiveDealsCard;
