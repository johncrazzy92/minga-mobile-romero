import { createReducer } from "@reduxjs/toolkit";
import {allMangas} from "../actions/allMangas.js"

const initialState = {
  mangas: null,
  stateFull: true
};

const mangasReducer = createReducer(initialState, (builder) => { builder
    .addCase(allMangas.fulfilled, (state, action) => {
        state.stateFull = true;
        state.mangas = action.payload;
    })
    .addCase(allMangas.pending, (state) => {
      state.stateFull = false;
    });
});

export default mangasReducer;
