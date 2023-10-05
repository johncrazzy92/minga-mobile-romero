import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk("loginAction",async(datas)=>{
        const data ={
                email: datas.email,
                password: datas.password
        }
       try {
               const response = await axios.post("http://192.168.0.142:8080/auth/signin",data)
               console.log("hola",response.data);
               return response.data 
        
       } catch (error) {

        throw new Error(error.response.data.message)
        
       }
        
})