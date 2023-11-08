import React from "react";
import { FcCalendar, FcPackage, FcPaid, FcVoicePresentation } from "react-icons/fc";
import { PiTicketDuotone } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { backend_url } from "../../../server";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);

  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/dashboard">
          <img src="/Logo.png" alt="PNC Mart" className="h-16 w-full" />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboards/coupons" className="800px:block hidden">
            <PiTicketDuotone
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboards-events" className="800px:block hidden">
            <FcCalendar
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboards-products" className="800px:block hidden">
            <FcPaid
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboards-orders" className="800px:block hidden">
            <FcPackage color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboards-messages" className="800px:block hidden">
            <FcVoicePresentation
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to={`shop/${seller._id}`}>
            <img
              src={`${backend_url}${seller.avatar}`}
              alt="shop img"
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
