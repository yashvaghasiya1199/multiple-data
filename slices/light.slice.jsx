import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const lightslice = createSlice({
    name: "lightslice",
    initialState: {
        value: true,
    },
    reducers: {
        off: (state) => {
            state.value = !state.value;
        },
    },
  
});

export default lightslice.reducer;
export const { off } = lightslice.actions;
