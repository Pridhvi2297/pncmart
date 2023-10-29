import React, { useState } from "react";
import { IoCloseCircle, IoBagHandleOutline } from "react-icons/io5";
import styles from "../../styles/styles";
import { IoRemoveCircle, IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "Iphone 14 Pro Max 1TB 8GB RAM A16 Bionic",
      description: "Test",
      price: 999,
    },
    {
      name: "Iphone 14 Pro Max 1TB 8GB RAM A16 Bionic",
      description: "Test",
      price: 2999,
    },
    {
      name: "Iphone 14 Pro Max 1TB 8GB RAM A16 Bionic",
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
              onClick={() => setOpenCart(false)}
            />
          </div>

          <div className={`${styles.normalFlex} p-4 items-center`}>
            <IoBagHandleOutline size={25} className="text-[#e44343]" />
            <h5 className="pl-2 text-2xl font-semibold">
              {cartData.length} items
            </h5>
          </div>

          <br />
          <div className="w-full border-t" style={{ maxHeight: "60vh", overflowY: "auto" }}>
            {cartData &&
              cartData.map((item, index) => <CartSingle key={index} data={item} />)}
          </div>
        </div>
        <div className="px-5 mb-3">
          <Link to="/checkout">
            <div className="h-12 flex items-center justify-center w-full bg-[#e44343] rounded-[5px]">
              <h1 className="text-[#fff] text-2xl font-semibold">
                Checkout Now (USD$1080)
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = data.price * quantity;

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <IoRemoveCircle
            size={60}
            className="cursor-pointer text-[#e44343] hover:text-red-500"
            onClick={handleDecrease}
          />
          <span className="pl-2 pr-2 text-base font-semibold">{quantity}</span>
          <IoAddCircle
            size={60}
            className="cursor-pointer text-[#e44343] hover:text-teal-500"
            onClick={handleIncrease}
          />
          <img
            src="https://www.notebookcheck.net/uploads/tx_nbc2/AppleiPhone14Pro__1__01.JPG"
            alt=""
            className="w-20 h-20 object-cover rounded-lg ml-4"
          />
          <div className="pl-4">
            <h1 className="text-lg font-semibold">{data.name}</h1>
            <h4 className="text-base text-gray-600">
              ${data.price} * {quantity}
            </h4>
            <h4 className="text-2xl text-[#e44343] font-medium pt-1">
              US$ {totalPrice}
            </h4>
          </div>
        </div>
        <IoCloseCircle
          size={40}
          className="cursor-pointer text-gray-400 hover:text-red-600"
        />
      </div>
    </div>
  );
};

export default Cart;
