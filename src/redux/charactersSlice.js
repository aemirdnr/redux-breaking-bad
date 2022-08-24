import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import axios from "axios";

const char_limit = 9;

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (page) => {
    const res = await axios(
      `https://www.breakingbadapi.com/api/characters?limit=${char_limit}&offset=${
        page * char_limit
      }`
    );
    return res.data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    status: "idle",
    page: 0,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.status = "succeeded";
      state.page++;

      if (action.payload.length < char_limit) {
        state.hasNextPage = false;
      }
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default charactersSlice.reducer;
