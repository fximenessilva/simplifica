import axios from 'axios';
import actionTypes from './actionTypes';

const apiKey = 'cbe310eb';

function searchMoviesSuccess(moviesSearchList) {
  return {
    type: actionTypes.LOAD_SEARCH,
    moviesSearchList,
  };
}

function searchMoviesError(error) {
  return {
    type: actionTypes.LOAD_SEARCH_ERROR,
    error,
  };
}

export function searchMovies(searchValue, page) {
  return async (dispatch) => {
    const endpoint = `http://www.omdbapi.com/?s=${searchValue}&page=${page}&apikey=${apiKey}`;

    try {
      const movies = await axios.get(endpoint);

      dispatch(searchMoviesSuccess(movies.data));
    } catch (error) {
      dispatch(searchMoviesError(error));
    }
  };
}

function requestMovieDetailSuccess(movieDetail) {
  return {
    type: actionTypes.LOAD_MOVIE_DETAIL,
    movieDetail,
  };
}

function requestMovieDetailError(error) {
  return {
    type: actionTypes.LOAD_MOVIE_DETAIL_ERROR,
    error,
  };
}

export function requestMovieDetail(id) {
  return async (dispatch) => {
    const endpoint = `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;

    try {
      const movieDetail = await axios.get(endpoint);

      dispatch(requestMovieDetailSuccess(movieDetail.data));
    } catch (error) {
      requestMovieDetailError(error);
    }
  };
}

function requestPopularMoviesSuccess(popularMovies) {
  return {
    type: actionTypes.LOAD_POPULAR_MOVIES,
    popularMovies,
  };
}

function requestPopularMoviesError(error) {
  return {
    type: actionTypes.LOAD_POPULAR_MOVIES_ERROR,
    error,
  };
}

export function requestPopularMovies() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:3075/movies';

    try {
      const popularMovies = await axios.get(endpoint);

      dispatch(requestPopularMoviesSuccess(popularMovies.data));
    } catch (error) {
      dispatch(requestPopularMoviesError(error));
    }
  };
}
