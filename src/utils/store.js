import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import UserSlice from "./UserSlice";
import searchSlice from "./searchSlice";

let store=configureStore({
    reducer:{
        product:ProductSlice,
        user:UserSlice,
        search:searchSlice

    }
});

export default store;