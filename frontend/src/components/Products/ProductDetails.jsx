import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const navigate = useNavigate();

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=57469oblkkl");
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={data.image_Url[selectedImage].url}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex">
                  <div
                    className={`${
                      selectedImage === 0 ? "border" : ""
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[0].url}
                      alt=""
                      className="h-[200px] w-[200px]"
                      onClick={() => setSelectedImage(0)} // Updated function name
                    />
                  </div>
                  <div
                    className={`${
                      selectedImage === 1 ? "border" : ""
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[1].url}
                      alt=""
                      className="h-[200px] w-[200px]"
                      onClick={() => setSelectedImage(1)} // Updated function name
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    $ {data.discount_price}
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="text-white bg-teal-500 rounded-full px-4 py-2 hover:bg-teal-600 transition duration-300 ease-in-out"
                    onClick={decrementCount}
                  >
                    -
                  </button>
                  <span className="text-gray-700 font-semibold">{count}</span>
                  <button
                    className="text-white bg-teal-500 rounded-full px-4 py-2 hover:bg-teal-600 transition duration-300 ease-in-out"
                    onClick={incrementCount}
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <div
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => setClick(!click)}
                  >
                    {click ? (
                      <AiFillHeart size={24} color="#f44336" />
                    ) : (
                      <AiOutlineHeart size={24} />
                    )}
                    <span className="text-gray-700">
                      {click ? "Added to Wishlist" : "Add to Wishlist"}
                    </span>
                  </div>
                  <button
                    className="flex items-center space-x-2 text-white bg-teal-500 rounded-full px-4 py-2 hover:bg-teal-600 transition duration-300 ease-in-out"
                    onClick={() => alert("Added to Cart!")}
                  >
                    <AiOutlineShoppingCart size={28} />
                    <span>Add to Cart</span>
                  </button>
                </div>
                <div className="border-t flex mt-6 pt-8 text-center items-center text-gray-700">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div className={styles.sellerInfo}>
                    <h3 className="pb-1 pt-1">{data.shop.name}</h3>
                    <h5 className="pb-3 text-[15px]">
                      ({data.shop.ratings}) Ratings
                    </h5>
                  </div>
                  <button
                    className="text-teal-500 hover:underline flex items-center"
                    onClick={handleMessageSubmit}
                  >
                    <FaRegEnvelope className="mr-2" /> Contact Seller
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo data={data} />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className="text-black text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(1)}
          >
            About this Item
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-black text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-black text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            SUPERCHARGED BY M2 PRO OR M2 MAX — Take on demanding projects with
            the M2 Pro or M2 Max chip. M2 Pro has up to 12 CPU cores, up to 19
            GPU cores and up to 32GB unified memory. M2 Max has 12 CPU cores, up
            to 38 GPU cores and up to 96GB unified memory. UP TO 18 HOURS OF
            BATTERY LIFE — Go all day thanks to the power-efficient design of
            the M2 Pro or M2 Max chip. And MacBook Pro delivers exceptional
            performance whether it’s running on battery or plugged in. FULLY
            COMPATIBLE — All your pro apps run lightning-fast — including Adobe
            Creative Cloud, Xcode, Affinity Designer, Microsoft 365, and many of
            your favourite iPhone and iPad apps. BEAUTIFUL PRO DISPLAY — The
            14.2-inch Liquid Retina XDR display features Extreme Dynamic Range,
            over 1,000 nits of brightness for stunning HDR content and pro
            reference modes for doing your best work on the go. ADVANCED CAMERA
            AND AUDIO — Look sharp and sound great with a 1080p FaceTime HD
            camera, a studio-quality three-mic array, and a six-speaker sound
            system with Spatial Audio.
          </p>
          <h1 className="text-black text-[24px] font-bold">
            {" "}
            What is the box?
          </h1>
          <p>
            14-inch MacBook Pro USB-C to MagSafe 3 Cable (2 m) 67W USB-C Power
            Adapter
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full justify-center min-h-[40vh] flex items-center">
          <p>No Reviews yet</p>
        </div>
      ) : null}

      {active === 3 ? (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <div className="flex item-center">
              <img
                src={data.shop.shop_avatar.url}
                alt="Shop Name"
                className="w-[80px] h-[80px] rounded-full"
              />
              <div className="border-t flex mt-6 pt-8 text-center items-center text-gray-700">
                <div className={styles.sellerInfo}>
                  <h3 className="pb-1 pt-1">{data.shop.name}</h3>
                  <h5 className="pb-2 text-[15px]">
                    ({data.shop.ratings}) Ratings
                  </h5>
                </div>
              </div>
            </div>
            <p className="pt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus distinctio molestias nesciunt illum, odio optio velit
                ratione id totam sunt reiciendis eum dolores quam consectetur,
                soluta itaque voluptas quis. Consectetur?
              </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
                <h5 className="font-[600]">
                    Joined On: <span className="font-[500]">14 March, 2023</span>
                </h5>
                <h5 className="font-[600] pt-3">
                    Total Products: <span className="font-[500]">1,42,023</span>
                </h5>
                <h5 className="font-[600] pt-3">
                    Total Reviews: <span className="font-[500]">4,223</span>
                </h5>
                <Link to="/">
                <div className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}>
                    <h4 className="text-white">
                        Visit Shop
                    </h4>
                </div>
                </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ProductDetails;
