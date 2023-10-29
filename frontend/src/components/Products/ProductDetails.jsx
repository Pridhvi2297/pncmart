import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { Star, ShoppingCart, Heart, Mail } from "react-feather"; // New icons
import "./ProductDetails.css";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [isWishlistActive, setWishlistActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  const handleWishlistToggle = () => {
    setWishlistActive(!isWishlistActive);
  };

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
                <div
                  className="image-container"
                  onMouseOver={() => setSelectedImage(0)}
                  onMouseOut={() => setSelectedImage(1)}
                >
                  <img
                    src={data.image_Url[selectedImage].url}
                    alt=""
                    className="w-[80%]"
                  />
                </div>
                <div className="w-full flex">
                  {data.image_Url.map((image, index) => (
                    <div
                      className={`image-thumbnail ${
                        selectedImage === index ? "selected" : ""
                      }`}
                      key={index}
                      onMouseOver={() => setSelectedImage(index)}
                    >
                      <img
                        src={image.url}
                        alt=""
                        className="h-[200px] w-[200px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className="text-4xl font-bold mb-3 text-blue-700">
                  {data.name}
                </h1>
                <p className="text-gray-500 text-lg mb-4">{data.description}</p>
                <div className="flex items-center mb-4">
                  <h4 className="text-3xl font-semibold mr-4 text-green-600">
                    $ {data.discount_price}
                  </h4>
                  {data.price && (
                    <span className="text-gray-400 text-lg">
                      $ {data.price}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <button
                    className="text-white bg-gray-500 rounded-full px-4 py-2 hover:bg-gray-600 transition duration-300 ease-in-out"
                    onClick={decrementCount}
                  >
                    <span className="text-2xl">-</span>
                  </button>
                  <span className="text-gray-700 font-semibold text-2xl">
                    {count}
                  </span>
                  <button
                    className="text-white bg-gray-500 rounded-full px-4 py-2 hover:bg-gray-600 transition duration-300 ease-in-out"
                    onClick={incrementCount}
                  >
                    <span className="text-2xl">+</span>
                  </button>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`flex items-center space-x-2 cursor-pointer ${
                      isWishlistActive ? "text-blue-600" : "text-gray-500"
                    }`}
                    onClick={() => alert("Added to Wishlist!")}
                  >
                    {isWishlistActive ? (
                      <Heart size={24} color="blue" />
                    ) : (
                      <Heart size={24} color="gray" />
                    )}
                    <span>
                      {isWishlistActive
                        ? "Added to Favorites"
                        : "Add to Favorites"}
                    </span>
                  </div>
                  <button
                    className="flex items-center space-x-2 text-white bg-gray-500 rounded-full px-4 py-2 hover:bg-gray-600 transition duration-300 ease-in-out"
                    onClick={() => alert("Added to Cart!")}
                  >
                    <ShoppingCart size={24} /> {/* Change the icon */}
                    <span>Add to Cart</span>
                  </button>
                </div>

                <div className="border-t border-gray-300 flex items-center py-4">
                  <div className="flex items-center">
                    <img
                      src={data.shop.shop_avatar.url}
                      alt={data.shop.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">
                        {data.shop.name}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Star size={16} className="mr-1" />
                        <span>({data.shop.ratings}) Ratings</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleMessageSubmit}
                    className="text-blue-600 hover:underline flex items-center ml-auto"
                  >
                    <Mail size={18} className="mr-2" />
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo
            data={data}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({ data, activeTab, setActiveTab }) => {
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <Tab
          title="About this Item"
          index={1}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          title="Product Reviews"
          index={2}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          title="Seller Information"
          index={3}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      {activeTab === 1 ? (
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
            What is in the box?
          </h1>
          <p>
            14-inch MacBook Pro USB-C to MagSafe 3 Cable (2 m) 67W USB-C Power
            Adapter
          </p>
        </>
      ) : null}

      {activeTab === 2 ? (
        <div className="w-full justify-center min-h-[40vh] flex items-center">
          <p>No Reviews yet</p>
        </div>
      ) : null}

      {activeTab === 3 ? (
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
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const Tab = ({ title, index, activeTab, setActiveTab }) => {
  return (
    <div className="relative">
      <h5
        className={`text-black text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px] ${
          activeTab === index ? styles.activeTab : ""
        }`}
        onClick={() => setActiveTab(index)}
      >
        {title}
      </h5>
      {activeTab === index ? (
        <div className={`${styles.active_indicator}`} />
      ) : null}
    </div>
  );
};

export default ProductDetails;
