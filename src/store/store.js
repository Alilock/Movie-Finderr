import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./slices/movieSlice";

const store = configureStore({
    reducer: combineSlices({
        movieSlice: movieReducer,

    })
})

export default store