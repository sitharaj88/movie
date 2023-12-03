import { createSlice } from "@reduxjs/toolkit";
import {
  progress,
  success,
  failure,
  getIntialState,
} from "../../../core/state/state_handler";

const popularMovieSlice = createSlice({
  name: "popularMovies",
  initialState: getIntialState(),
  reducers: {
    popularMoviesRequest: (state) => progress(state),
    popularMoviesSuccess: (state, action) => success(state, action),
    popularMoviesFailure: (state, action) => failure(state, action),
  },
});

export const {
  popularMoviesRequest,
  popularMoviesSuccess,
  popularMoviesFailure,
} = popularMovieSlice.actions;

export default popularMovieSlice.reducer;
