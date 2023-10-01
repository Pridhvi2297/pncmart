import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import styles from "../../../styles/styles";

const ProductDetailsCard = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.5)]">
      <div className="w-full max-w-[800px] bg-white rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[80vh]">
        <RxCross1
          size={30}
          className="absolute top-2 right-2 lg:top-4 lg:right-4 cursor-pointer text-gray-600 z-50"
          onClick={() => setOpen(false)}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img src={data.image_Url[0].url} alt={data.name} className="object-cover w-full h-full" />
            <div className="absolute top-2 right-2 bg-[#f44336] text-white rounded-full p-2 text-xs">
              {data.total_sell} Sold
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className={`${styles.productTitle} text-2xl font-bold`}>
              {data.name}
            </h1>
            <p className="text-gray-600">{data.description}</p>
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-semibold text-[#f44336]">${data.discount_price}</span>
              {data.price && <span className="text-gray-500 line-through">${data.price}</span>}
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white bg-teal-500 rounded-full px-4 py-2 hover:bg-teal-600 transition duration-300 ease-in-out" onClick={decrementCount}>
                -
              </button>
              <span className="text-gray-700 font-semibold">{count}</span>
              <button className="text-white bg-teal-500 rounded-full px-4 py-2 hover:bg-teal-600 transition duration-300 ease-in-out" onClick={incrementCount}>
                +
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setClick(!click)}>
                {click ? <AiFillHeart size={24} color="#f44336" /> : <AiOutlineHeart size={24} />}
                <span className="text-gray-700">{click ? "Added to Wishlist" : "Add to Wishlist"}</span>
              </div>
              <button className="flex items-center space-x-2 text-white bg-teal-500 rounded-full px-4 py-2 hover:bg-teal-600 transition duration-300 ease-in-out" onClick={() => alert("Added to Cart!")}>
                <AiOutlineShoppingCart size={24} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t mt-6 pt-4 text-center text-gray-700">
          <button className="text-teal-500 hover:underline" onClick={handleMessageSubmit}>
            Contact Seller
          </button>
        </div>
        {/* Close button for mobile view */}
        <div className="lg:hidden mt-4 text-center">
          <button className="text-gray-600 hover:text-gray-800" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
