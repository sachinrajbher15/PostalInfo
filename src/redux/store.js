import { configureStore } from "@reduxjs/toolkit";
import postalReducer from "./postalSlice";
const store = configureStore({
    reducer: {
        postal : postalReducer,
    },
});
export default store;