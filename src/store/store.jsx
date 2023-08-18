import {configureStore} from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice.jsx";
import {categoryReducer} from "./categorySlice.jsx";
import productReducer from "./productSlice";
import { cartReducer } from "./cartSlice.jsx";
import SearchReducer from "./searchSlice";

const store = configureStore({
    reducer: {
        category: categoryReducer,
        sidebar: sidebarReducer,
        product: productReducer,
        cart: cartReducer,
        search: SearchReducer

    }
});

export default store;