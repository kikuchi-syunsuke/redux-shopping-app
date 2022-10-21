import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import modalReducer from "./fearures/modal/modalSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
});
