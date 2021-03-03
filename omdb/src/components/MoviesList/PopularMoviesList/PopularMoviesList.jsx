/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestPopularMovies } from '../../../redux/actions/moviesActions';

const PopularMoviesList = ({ popularMovies, dispatch }) => {
  useEffect(() => {
    if (!popularMovies || !popularMovies.length) {
      dispatch(requestPopularMovies());
    }
  }, [popularMovies]);

  return (
    <>
      {popularMovies && popularMovies?.length && (
        popularMovies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/${movie.imdbID}`}>
              {movie.Title}
              <img src={movie.Poster} alt="" />
            </Link>
          </li>
        ))
      )}
    </>

  );
};

function mapStateToProps({ moviesReducer }) {
  return {
    popularMovies: moviesReducer.popularMovies,
  };
}

export default connect(mapStateToProps)(PopularMoviesList);
