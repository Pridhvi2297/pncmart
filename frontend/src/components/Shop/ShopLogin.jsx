import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { server } from "../../server";

const ShopLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  

  const handleLogin = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/shop/login-shop`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Successfully!");
        navigate("/dashboard");
        window.location.reload(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="min-h-screen bg-yellow-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Sign into your Shop
        </h2>
        <form className="mt-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-base font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-base text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-base">
              <a
                href=".forgot-password"
                className="font-medium text-yellow-500 hover:text-yellow-600"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 shadow-yellow-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="w-full text-center mt-4">
          <p className="text-base">
            New Seller? {" "}
            <Link
              to="/shop-create"
              className=" text-yellow-500 hover:text-yellow-600"
            >
              Create your Seller account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopLogin;
