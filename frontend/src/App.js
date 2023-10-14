import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellersPage,
  TodaysDealPage,
  FAQPage,
  ProductDetailsPage,
} from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:name" element={<ProductDetailsPage />} />
          <Route path="/best-sellers" element={<BestSellersPage />} />
          <Route path="/todaysDeals" element={<TodaysDealPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </div>
  );
};

// <Route path="/checkout" element={<CheckoutPage />} />
// <Route path="/payment" element={<PaymentPage />} />
// <Route path="/order/success/:id" element={<OrderSuccessPage />} />

export default App;
