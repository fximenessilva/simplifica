/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';
import { requestPopularMovies } from '../../../redux/actions/moviesActions';

import PopularMoviesList from './PopularMoviesList';

const PopularMovies = ({ popularMovies, dispatch }) => {
  useEffect(() => {
    if (!popularMovies || !popularMovies.length) {
      dispatch(requestPopularMovies());
    }
  }, [popularMovies]);

  return (
    <>
      {!popularMovies
        ? <BounceLoader color="#E50914" size={50} />
        : <PopularMoviesList popularMovies={popularMovies} />}
    </>

  );
};

function mapStateToProps({ moviesReducer }) {
  return {
    popularMovies: moviesReducer.popularMovies,
  };
}

export default connect(mapStateToProps)(PopularMovies);
