import React, { useState } from "react";
import { IoCloseCircle, IoHeart } from "react-icons/io5";
import styles from "../../styles/styles";
import { BsTrash, BsCartPlus } from "react-icons/bs";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Iphone 14 Pro Max 1TB 8GB RAM A16 Bionic",
      description: "Test",
      price: 999,
    },
    {
      name: "Iphone 14 Pro Max",
      description: "Test",
      price: 2999,
    },
    {
      name: "Iphone 14 Pro Max",
      description: "Test",
      price: 3999,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000002d] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-lg rounded-l-3xl">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <IoCloseCircle
              size={30}
              className="cursor-pointer text-gray-400 hover:text-gray-600"
              onClick={() => setOpenWishlist(false)}
            />
          </div>

          <div className={`${styles.normalFlex} p-4 items-center`}>
            <IoHeart size={25} className="text-[#D02222]" />
            <h5 className="pl-2 text-2xl font-semibold">
              {cartData.length} items
            </h5>
          </div>

          <br />
          <div className="w-full border-t" style={{ maxHeight: "70vh", overflowY: "auto" }}>
            {cartData &&
              cartData.map((item, index) => <CartSingle key={index} data={item} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = data.price * quantity;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://www.notebookcheck.net/uploads/tx_nbc2/AppleiPhone14Pro__1__01.JPG"
            alt=""
            className="w-[80px] h-[80px] object-cover rounded"
          />
          <div className="pl-[10px]">
            <h1 className="text-lg font-semibold">{data.name}</h1>
            <h4 className="text-base text-gray-600">
              US$ {data.price} * {quantity}
            </h4>
            <h4 className="text-2xl text-[#D02222] font-medium pt-1">
              US$ {totalPrice}
            </h4>
          </div>
        </div>
        <div className="flex items-center">
          <BsTrash
            size={24}
            className="cursor-pointer text-gray-400 hover:text-red-600 mr-3"
          />
          <BsCartPlus
            size={24}
            className="cursor-pointer text-teal-500 hover:text-teal-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
