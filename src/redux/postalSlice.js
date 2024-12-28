import { createSlice } from "@reduxjs/toolkit";

const postalSlice = createSlice({
    name: 'postal',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchStart, fetchSuccess, fetchFailure } = postalSlice.actions;
export default postalSlice.reducer;