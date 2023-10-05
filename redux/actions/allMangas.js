import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allMangas = createAsyncThunk("allMangas",async()=>{
    try {
        const response = await axios.get("http://192.168.0.142:8080/mangas/allMangas")
        return response.data.response
    } catch (error) {
        console.log(error);
    }
})

