import { createReducer } from "@reduxjs/toolkit";
import { loginAction } from "../actions/loginAction.js";
import { errorFalse } from "../actions/errorFalse.js";
import { signout } from "../actions/signout.js";



const initialState = {
  userOn: false,
  stateFull: null,
  token: null,
  userPhoto: null,
  role: null,
  author:null,
  rejected:false,
  error:null,
};

const userLogin = createReducer(initialState, (builder) => { builder
    .addCase(loginAction.fulfilled, (state, action) => {
        state.stateFull = true;
        state.userOn = true;
        state.token = action.payload.response.token
        state.userPhoto = action.payload.response.user.photo
        state.role = action.payload.response.user.role
        state.author = action.payload.response.user._id

    })
    .addCase(loginAction.pending, (state) => {
      state.stateFull = false;
    })
    .addCase(loginAction.rejected,(state,action)=>{
        state.stateFull = true
        state.rejected = true
        state.error = action.error.message
    })
    .addCase(errorFalse,(state)=>{
        state.error = null
        state.rejected = false
        
    })
    .addCase(signout.fulfilled, (state, action) => {
      console.log("full");
        state.stateFull = true;
        state.userOn = false;
        state.token = null
        state.userPhoto = null
        state.role = null
        state.author = null

    })
    .addCase(signout.pending, (state) => {
      state.stateFull = false;
    })
});

export default userLogin;