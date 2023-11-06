import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../static/data";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
  });
  const searchRef = useRef(null);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <>
      <div className={`bg-gray-900 py-4 ${active ? "top-0 left-0 z-10" : ""}`}>
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <Link to="/">
              <img src="/Logo.png" alt="pnc mart" className="h-16 w-full" />
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
          <div
            className="relative cursor-pointerflex items-center space-x-5 text-white"
            onClick={() => setOpenWishlist(true)}
          >
            <AiOutlineHeart size={30} />
            <span className="absolute top-0 right-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
              0
            </span>
          </div>
          <div
            className="relative cursor-pointer flex items-center space-x-5 text-white"
            onClick={() => setOpenCart(true)}
          >
            <AiOutlineShoppingCart size={30} />
            <span className="absolute top-0 right-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
              0
            </span>
          </div>
          <div className="relative cursor-pointer flex items-center space-x-5 text-white">
            {isAuthenticated ? (
              <Link to="/profile">
                <img
                  src={`${backend_url}${user.avatar}`}
                  className="w-[40px] h-[45px] rounded-full"
                  alt=""
                />
              </Link>
            ) : (
              <Link to="/login">
                <AiOutlineUser size={30} />
              </Link>
            )}
          </div>
          <div className="bg-gray-400 py-3 px-4 rounded-md">
            <Link to="/shop-create">
              <h1 className="text-white flex items-center">
                Sell on Pnc Mart <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>

          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>
      </div>
      <div
        className={`${
          active === true ? "fixed shadow-sm top-0 left-0 z-10" : null
        } transition bg-gray-900 hidden md:flex items-center justify-between w-full h-[70px]`}
      >
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between">
            <div
              className="relative h-5 mt-4 w-[16.9rem] hidden md:block cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            >
              <div className="flex items-center justify-between pl-4 bg-gray-400 font-sans text-lg font-[500] select-none rounded-none">
                Shop By Category
                <IoIosArrowDown
                  size={20}
                  className={`${
                    dropDown ? "transform rotate-180" : ""
                  } transition-transform duration-300 text-gray-900 `}
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
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-[100px] fixed bg-white z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src="/Logo.png"
                alt="pnc mart"
                className="h-12 w-full mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div className="relative mr-[20px]">
            <AiOutlineShoppingCart size={30} />
            <span className="absolute top-0 right-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
              0
            </span>
          </div>
        </div>

        {open && (
          <div
            className={`fixed w-full bg-[#4b858a95] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[60%] bg-white h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div className="relative mr-[15px]">
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span className="absolute top-0 right-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                      0
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="my-8 w-[92%] m-auto h-[40px relative">
                <input
                  type="text"
                  placeholder="Search Pnc Mart"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="h-[40px] w-full px-4 border border-gray-500 rounded-md focus:ring focus:ring-gray-200 text-white bg-gray-800"
                  style={{ color: "#fff" }} // Adjust text color here
                />
                {searchData && (
                  <div className="absolute bg-white z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const productName = i.name.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${productName}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0].url}
                              alt=""
                              className="w-12 h-12 mr-2 rounded-md"
                            />
                            <h1 className="text-gray-900">{i.name}</h1>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              <Navbar active={activeHeading} />

          <div className="bg-gray-700 py-3 px-4 rounded-md">
            <Link to="/shop-create">
              <h1 className="text-white flex items-center">
                Sell on Pnc Mart <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
          <br />
          <br />
          <br />

          <div className="flex w-full justify-center">
            
          {isAuthenticated ? (
              <Link to="/profile">
                <img
                  src={`${backend_url}${user.avatar}`}
                  className="w-[80px] h-[80px] rounded-full border-[3px] border-[#4198cb]"
                  alt=""
                />
              </Link>
            ) : (
              <Link to="/login">
              <div className="flex items-center justify-center">
              <AiOutlineUser size={30} className="mr-2" />
              <h4 className="text-18 text-black text-center">Login / Sign Up</h4>
              </div>
              </Link>
            )}
          </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
