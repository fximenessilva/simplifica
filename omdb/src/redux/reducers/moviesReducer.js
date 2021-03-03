import actionTypes from '../actions/actionTypes';

export default function moviesReducers(state = {}, action = {}) {
  switch (action.type) {
    case actionTypes.LOAD_SEARCH:
      return { ...state, moviesSearchList: action.moviesSearchList };
    case actionTypes.LOAD_SEARCH_ERROR:
      return { ...state, error: action.error };

    case actionTypes.LOAD_MOVIE_DETAIL:
      return { ...state, movieDetail: action.movieDetail };
    case actionTypes.LOAD_MOVIE_DETAIL_ERROR:
      return { ...state, error: action.error };

    case actionTypes.LOAD_POPULAR_MOVIES:
      return { ...state, popularMovies: action.popularMovies.sort(() => Math.random() - 0.5) };
    case actionTypes.LOAD_POPULAR_MOVIES_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
}
