import { all, put, takeEvery } from "redux-saga/effects";
import MovieService from "../../../services/movie_services";
import {
  trendingMoviesRequest,
  trendingMoviesSuccess,
  trendingMoviesFailure,
} from "./slice";

function* fetchTrendingMovies() {
  try {
    const response = yield MovieService.getTrendingMovies();
    yield put({ type: trendingMoviesSuccess.type, payload: response.data });
  } catch (error) {
    yield put({ type: trendingMoviesFailure.type, payload: error });
  }
}

function* trendingMoviewsRequestSaga() {
  yield takeEvery(trendingMoviesRequest.type, fetchTrendingMovies);
}

export default trendingMoviewsRequestSaga;
