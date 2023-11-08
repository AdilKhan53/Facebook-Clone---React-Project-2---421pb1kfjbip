import { createSlice } from "@reduxjs/toolkit";

let UserSlice=createSlice({
    name:"user",
    initialState:{
        userDetails:null
    },
    reducers:{
        getuser:(state,action)=>{
            state.userDetails=action.payload

        },
        logout:(state) => {
            state.userDetails = null
        }
    }

})

export const{getuser, logout}=UserSlice.actions;
export default UserSlice.reducer