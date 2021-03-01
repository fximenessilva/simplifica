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

export default function searchMovies(searchValue, page) {
  return async (dispatch) => {
    const endpoint = `http://www.omdbapi.com/?s=${searchValue}&page=${page}&apikey=${apiKey}`;
    console.log({ endpoint });

    try {
      const movies = await axios.get(endpoint);
      dispatch(searchMoviesSuccess(movies.data));
    } catch (error) {
      dispatch(searchMoviesError(error));
    }
  };
}
