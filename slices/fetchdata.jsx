

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define async thunk for data fetching
export const fetchData = createAsyncThunk('fetchdata/fetchData', async (api) => {
  const response = await fetch(api);
  const result = await response.json();
  return result;
});

const fetchdataSlice = createSlice({
  name: 'fetchdata',
  initialState: {
    apidata: [],  // Should be an array, or it can be null depending on your use case
    pending: true,  // Initialize pending as false
    error: null,  // Initialize error as null
  },
  reducers: {
    removedata: (state) => {
      state.apidata = [];  // Clear data
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.pending = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.pending = false;
        state.apidata = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message;
      });
  }
});

export const { removedata } = fetchdataSlice.actions;

export default fetchdataSlice.reducer;
