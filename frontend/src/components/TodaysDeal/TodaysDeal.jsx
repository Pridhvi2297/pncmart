import React from "react";
import ExclusiveDealsCard from "./ExclusiveDealsCard";

const TodaysDeal = () => {
  return (
    <div className="bg-gradient-to-b to-white py-6">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold text-center text-black mb-8">
          Today's Exclusive Deals
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ExclusiveDealsCard />
          <ExclusiveDealsCard />
          <ExclusiveDealsCard />
        </div>
      </div>
    </div>
  );
};

export default TodaysDeal;
