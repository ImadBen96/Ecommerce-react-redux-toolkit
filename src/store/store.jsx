import {configureStore} from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice.jsx";
import {categoryReducer} from "./categorySlice.jsx";
import productReducer from "./productSlice";
const store = configureStore({
    reducer: {
        category: categoryReducer,
        sidebar: sidebarReducer,
        product: productReducer,

    }
});

export default store;