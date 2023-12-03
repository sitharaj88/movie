import { createSlice } from "@reduxjs/toolkit";
import {
  progress,
  success,
  failure,
  getIntialState,
} from "../../../core/state/state_handler";

const trendingMovieSlice = createSlice({
  name: "trendingMovies",
  initialState: getIntialState(),
  reducers: {
    trendingMoviesRequest: (state) => progress(state),
    trendingMoviesSuccess: (state, action) => success(state, action),
    trendingMoviesFailure: (state, action) => failure(state, action),
  },
});

export const {
  trendingMoviesRequest,
  trendingMoviesSuccess,
  trendingMoviesFailure,
} = trendingMovieSlice.actions;

export default trendingMovieSlice.reducer;
