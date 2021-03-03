/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../../../redux/actions/moviesActions';

import PopularMoviesList from '../PopularMoviesList/PopularMoviesList';
import MoviesSearch from '../MoviesSearch/MoviesSearch';

function MoviesList({ dispatch, moviesSearchList }) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(searchMovies(search, page));
  }, [search, page]);

  function setMin() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function setMax() {
    if (moviesSearchList?.Search?.length === 10) {
      setPage(page + 1);
    }
  }

  return (
    <>

      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); }}
        />
      </div>
      {search.length >= 3 ? (
        <MoviesSearch
          setSearch={setSearch}
          moviesSearchList={moviesSearchList}
          setMin={setMin}
          setMax={setMax}
          search={search}
          page={page}
        />
      )
        : <PopularMoviesList />}

    </>
  );
}

function mapStateToProps({ moviesReducer }) {
  return {
    moviesSearchList: moviesReducer.moviesSearchList,

  };
}

export default connect(mapStateToProps)(MoviesList);
