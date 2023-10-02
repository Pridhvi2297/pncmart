import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../static/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-10">
        <div className="lg:w-1/3">
          <img src="/logo.png" alt="Logo" className="w-72 h-[5.5rem] mb-6" />
          <p className="text-white text-sm mb-6">
            Get the best products that bring happiness to your life.
          </p>
          <div className="flex space-x-4">
            <AiFillFacebook
              size={30}
              className="text-[#5ed17d] cursor-pointer"
            />
            <AiOutlineTwitter
              size={30}
              className="text-[#5ed17d] cursor-pointer"
            />
            <AiFillInstagram
              size={30}
              className="text-[#5ed17d] cursor-pointer"
            />
            <AiFillYoutube
              size={30}
              className="text-[#5ed17d] cursor-pointer"
            />
          </div>
        </div>
        <div className="lg:w-2/3 mt-12 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Company</h2>
              <ul className="space-y-2">
                {footerProductLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.link}
                      className="text-gray-400 hover:text-teal-400 transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Shop</h2>
              <ul className="space-y-2">
                {footercompanyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.link}
                      className="text-gray-400 hover:text-teal-400 transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Support</h2>
              <ul className="space-y-2">
                {footerSupportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.link}
                      className="text-gray-400 hover:text-teal-400 transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col items-center sm:flex-row sm:justify-between py-5">
        <h1 className="lg:text-3xl font-semibold mb-4 sm:mb-0">
          <span className="text-[#5ed17d]">Subscribe</span> for Exclusive Deals
          and Offers
        </h1>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full sm:w-72 bg-gray-800 text-gray-400 py-2.5 px-4 rounded-l-md focus:outline-none"
          />
          <button className="bg-[#5ed17d] hover:bg-teal-500 transition duration-300 py-2.5 px-4 rounded-r-md text-white">
            Submit
          </button>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-400 text-sm text-center py-4">
        <div className="container mx-auto">
          <p>© 2023 Pnc Mart. All rights reserved.</p>
          <p>Terms & Privacy Policy</p>
          <div className="flex justify-center space-x-4">
            <img
              src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png"
              alt=""
              className="w-[20%] h-[10%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
