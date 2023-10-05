import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signout = createAsyncThunk("signout",async(token)=>{
    console.log(token,"!!!!!!!!!");
    const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };
  
      try {
        const response = await axios.post("http://192.168.0.142:8080/auth/signout", null, headers);
        return response.data
      } catch (error) {
          
          throw new Error(error.response.data.message)
      }   
        
})