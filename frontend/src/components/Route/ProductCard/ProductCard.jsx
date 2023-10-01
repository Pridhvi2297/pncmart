import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const UniqueProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const product_name = data.name.replace(/\s+/g, "-");

  const toggleQuickView = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-95 bg-[#BAD7E1] rounded-lg shadow-md p-4 relative cursor-pointer">
        
      <div className="transform transition-transform hover:scale-105">
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt=""
            className="w-[80%] h-44 object-cover rounded-lg mx-auto"
          />
        </Link>
      </div>
      <Link to="/">
        <h5 className="text-blue-600">{data.shop.name}</h5>
      </Link>
      <Link to={`/product/${product_name}`}>
        <h4 className="pb-2 font-semibold text-lg truncate">{data.name}</h4>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <AiFillStar
              key={index}
              className="mr-1 cursor-pointer text-yellow-500 text-lg"
            />
          ))}
          <AiOutlineStar
            className="mr-1 cursor-pointer text-yellow-500 text-lg"
          />
        </div>

        <div className="py-1 flex items-center justify-between">
          <div className="flex">
            <h5 className="text-[#2E0215] text-lg">
              {data.price === 0 ? data.price : data.discount_price}$
            </h5>
            {data.price && (
              <h4 className="text-gray-500 ml-1 text-lg">{data.price} $</h4>
            )}
          </div>
          <span className="font-normal text-[15px] text-[#2E0215]">
            {data.total_sell} sold
          </span>
        </div>
      </Link>

      <div className="absolute top-0 right-0 mt-2 mr-2 space-y-2">
        {click ? (
          <AiFillHeart
            size={20}
            className="cursor-pointer text-red-500"
            onClick={() => setClick(!click)}
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={20}
            className="cursor-pointer"
            onClick={() => setClick(!click)}
            title="Add to wishlist"
          />
        )}
        <AiOutlineEye
          size={20}
          className="cursor-pointer"
          onClick={toggleQuickView}
          title="Quick view"
        />
        <AiOutlineShoppingCart
          size={22}
          className="cursor-pointer"
          onClick={toggleQuickView}
          title="Add to cart"
        />
      </div>
      {open && <ProductDetailsCard setOpen={setOpen} data={data} />}
    </div>
  );
};

export default UniqueProductCard;
