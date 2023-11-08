import { createSlice } from "@reduxjs/toolkit";

let ProductSlice=createSlice({
    name:"product",
    initialState:{
        product:null
    },
    reducers:{
        getProduct:(state,action)=>{
            state.product=action.payload
        }
    }
})

export const{getProduct}=ProductSlice.actions;
export default ProductSlice.reducer