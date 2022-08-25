import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import axios from "axios";

export const fetchQuotes = createAsyncThunk("quotes/getQuotes", async () => {
  const res = await axios(`https://www.breakingbadapi.com/api/quotes`);
  return res.data;
});

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchQuotes.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchQuotes.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default quotesSlice.reducer;
