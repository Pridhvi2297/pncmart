import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { FcPicture } from "react-icons/fc";

const SellerCreate = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const newForm = new FormData();

    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("phoneNumber", phoneNumber);
    newForm.append("address", address);
    newForm.append("zipCode", zipCode);
    newForm.append("password", password);


    axios
      .post(`${server}/shop/create-shop`, newForm, config)
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setAvatar("");
        setAddress("");
        setZipCode("");
        setPhoneNumber("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-8 space-y-6 sm:max-w-[40rem]">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Join Our PNC Marketplace
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-800">
              Shop Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0f041] text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone-number" className="text-sm font-medium text-gray-800">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone-number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0f041] text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-800">
              Email address
            </label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0f041] text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm font-medium text-gray-800">
              Address
            </label>
            <input
              type="text"
              name="address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0f041] text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="zipcode" className="text-sm font-medium text-gray-800">
              Zip Code
            </label>
            <input
              type="number"
              name="zipcode"
              required
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#762323] text-sm"
            />
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-sm font-medium text-gray-800">
              Password
            </label>
            <input
              type={visible ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0f041] text-sm"
            />
            {visible ? (
              <AiFillEye
                className="absolute top-7 right-4 cursor-pointer text-xl text-[#922525]"
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiFillEyeInvisible
                className="absolute top-7 right-4 cursor-pointer text-xl text-[#922525]"
                onClick={() => setVisible(true)}
              />
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="avatar" className="text-sm font-medium text-gray-800">
              Avatar
            </label>
            <div className="mt-2 flex items-center">
              <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                {avatar ? (
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <FcPicture className="text-[#762323] w-6 h-6" />
                )}
              </span>
              <label
                htmlFor="file-input"
                className="ml-5 flex items-center justify-center px-4 py-2 border rounded-md text-sm font-medium text-gray-800 bg-white hover:bg-gray-100 cursor-pointer"
              >
                <span>Upload a file</span>
                <input
                  type="file"
                  name="avatar"
                  id="file-input"
                  onChange={handleFileInputChange}
                  className="sr-only"
                />
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-[#f0f041] bg-[#0f4b65] hover:bg-[#286464] transition duration-300 ease-in-out"
            >
              Start Selling
            </button>
          </div>
        </form>

        <div className="text-center text-sm font-medium text-gray-800">
          <span>Already have an account?</span>
          <Link to="/shop-signin" className="text-[#4a6025] hover:underline cursor-pointer mt-2">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerCreate;
