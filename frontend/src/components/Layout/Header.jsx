import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../static/data";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineShop,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import DropDown from "./DropDown";
import Navbar from "./Navbar";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
  });
  const searchRef = useRef(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term === "") {
      setSearchData(null);
    } else {
      const filteredProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchData(filteredProducts);
    }
  };

  const adjustDropdownPosition = () => {
    if (searchRef.current) {
      const searchRect = searchRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: searchRect.bottom + window.scrollY,
        left: searchRect.left + window.scrollX,
      });
    }
  };

  useEffect(() => {
    adjustDropdownPosition();
    window.addEventListener("scroll", adjustDropdownPosition);
    return () => {
      window.removeEventListener("scroll", adjustDropdownPosition);
    };
  }, []);

  return (
    <>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <Link to="/">
              <img src="/logo.png" alt="pnc mart" className="h-10 w-60" />
            </Link>
          </div>
          <div className="w-[50%] relative flex items-center" ref={searchRef}>
            <input
              type="text"
              placeholder="Search Pnc Mart"
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-4 border border-gray-500 rounded-md focus:ring focus:ring-gray-200 text-white bg-gray-800"
              style={{ color: "#fff" }} // Adjust text color here
            />
            <div
              className="absolute right-2 top-1.5 text-white"
              style={{ zIndex: 1 }}
            >
              <AiOutlineSearch size={30} />
            </div>
            {searchData && searchData.length !== 0 ? (
              <div
                className="absolute bg-gray-800 shadow-md z-50 w-full mt-1"
                style={{
                  top: "calc(100% + 10px)", // Position below the search bar
                  left: "50%", // Centered horizontally
                  transform: "translateX(-50%)", // Centered horizontally
                }}
              >
                {searchData.map((product, index) => {
                  const productName = product.name.replace(/\s+/g, "-");
                  return (
                    <Link to={`/product/${productName}`} key={index}>
                      <div className="w-full flex items-start py-3 text-white">
                        <img
                          src={product.image_Url[0].url}
                          alt=""
                          className="w-12 h-12 mr-2 rounded-md"
                        />
                        <h1 className="text-gray-300">{product.name}</h1>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
          <div className="bg-yellow-400 py-2 px-4 rounded-md">
            <Link to="/seller">
              <h1 className="text-black flex items-center">
                Sell on Pnc Mart <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition bg-gray-900 hidden md:flex items-center justify-between w-full h-[70px]`}
      >
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            <div
              className="relative h-0 mt-4 w-[16.9rem] hidden md:block cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            >
              <div className="flex items-center justify-between pl-4 bg-white font-sans text-lg font-[500] select-none">
                All Categories
                <IoIosArrowDown
                  size={20}
                  className={`${
                    dropDown ? "transform rotate-180" : ""
                  } transition-transform duration-300 text-gray-900`}
                />
              </div>
                {/* Render categories as list items with icons */}
                {dropDown ? (
                  <DropDown
                    categoriesData={categoriesData}
                    setDropDown={setDropDown}
                  />
                ) : null}
              </div>
            <div className="flex items-center space-x-5 text-white">
              <Navbar active={activeHeading} />
              <div className="relative cursor-pointer">
                <AiOutlineHeart size={30} />
                <span className="absolute top-0 right-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
              <div className="relative cursor-pointer">
                <AiOutlineShoppingCart size={30} />
                <span className="absolute top-0 right-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
              <div className="relative cursor-pointer">
                <Link to="/login">
                  <AiOutlineUser size={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
