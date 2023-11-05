import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/user";
import { sellerReducer } from "./reducer/seller";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
  },
});

export default Store;
