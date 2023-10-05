import { configureStore } from "@reduxjs/toolkit";
import mangas from "./reducers/mangas";
import userLogin from "./reducers/user";

export const store = configureStore({
    reducer: {
        mangas,
        userLogin,
    }
})