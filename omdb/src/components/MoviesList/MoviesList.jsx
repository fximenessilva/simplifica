/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import searchMovies from '../../redux/actions/moviesActions';

function MoviesList({ dispatch, moviesSearchList }) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  // console.log(moviesSearchList);

  useEffect(() => {
    dispatch(searchMovies(search, page));
  }, [search, page]);

  function setMin() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => { setSearch(e.target.value); }}
      />
      {moviesSearchList?.Search && moviesSearchList?.Search?.length && (
        moviesSearchList.Search.map((movie) => <p key={movie.imdbID}>{movie.Title}</p>)
      )}
      <button onClick={() => setMin()} type="button">-</button>
      <span>
        Page
        {' '}
        {page}
      </span>
      <button onClick={() => setPage(page + 1)} type="button">+</button>
    </>
  );
}

function mapStateToProps({ moviesReducer }) {
  return {
    moviesSearchList: moviesReducer.moviesSearchList,
  };
}

export default connect(mapStateToProps)(MoviesList);
