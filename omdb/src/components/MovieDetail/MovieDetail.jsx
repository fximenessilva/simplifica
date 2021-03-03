/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';
import { requestMovieDetail } from '../../redux/actions/moviesActions';

import MovieDetailDummy from './MovieDetailDummy';

function MovieDetail({ movieDetail, dispatch }) {
  const id = `tt${window.location.pathname.match(/\d+/)[0]}`;

  useEffect(() => {
    dispatch(requestMovieDetail(id));
  }, [movieDetail?.imdbID]);

  return (
    <>
      {!movieDetail
        ? <BounceLoader color="#E50914" size={50} />
        : <MovieDetailDummy movieDetail={movieDetail} />}
    </>
  );
}

function mapStateToProps({ moviesReducer }) {
  return {
    movieDetail: moviesReducer.movieDetail,

  };
}

export default connect(mapStateToProps)(MovieDetail);
