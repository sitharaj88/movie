import { all, put, takeEvery } from "redux-saga/effects";
import MovieService from "../../../services/movie_services";
import {
  popularMoviesRequest,
  popularMoviesFailure,
  popularMoviesSuccess,
} from "./slice";

function* fetchpopularMovies() {
  try {
    const response = yield MovieService.getPoularMovies();
    yield put({ type: popularMoviesSuccess.type, payload: response.data });
  } catch (error) {
    yield put({ type: popularMoviesFailure.type, payload: error });
  }
}

function* popularMoviewsRequestSaga() {
  yield takeEvery(popularMoviesRequest.type, fetchpopularMovies);
}

export default popularMoviewsRequestSaga;
