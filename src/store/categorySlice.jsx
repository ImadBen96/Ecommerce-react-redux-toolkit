import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BASE_URL} from "../utils/apiURL.jsx";
import {STATUS} from "../utils/status.jsx";

const initialState = {
    categories: [],
    categoriesStatus: STATUS.IDLE,
    categoryProducts: [],
    categoryProductsStatus: STATUS.IDLE
}

const categorySlice = createSlice({
   name: "category",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
       builder
           .addCase(fetchAsyncCategories.pending,
               (state,action) => {
               state.categoriesStatus = STATUS.LOADING;
           });
       builder.addCase(fetchAsyncCategories.fulfilled, (state, action) => {
           state.categoriesStatus = STATUS.SUCCEEDED;
           state.categories = action.payload;
       });
       builder.addCase(fetchAsyncCategories.rejected, (state, action) => {
           state.categoriesStatus = STATUS.FAILED;
       });
   }
});
export const fetchAsyncCategories = createAsyncThunk('categories/fetch',async() => {
    const response = await fetch(`${BASE_URL}products/categories`);
    const data = await response.json();

    return data;
});

export const getAllCategories = (state) => state.category.categories;

export const categoryReducer = categorySlice.reducer;


