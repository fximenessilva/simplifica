/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';
import { searchMovies } from '../../../redux/actions/moviesActions';
import './styles/MoviesList.css';

import PopularMovies from '../PopularMoviesList/PopularMovies';
import MoviesSearch from '../MoviesSearch/MoviesSearch';

function MoviesList({
  dispatch, moviesSearchList,
}) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [inputSelected, setInputSelected] = useState(false);
  const input = document.querySelector('.searchInput');

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
    <div className="moviesList-wrapper">

      <div className="searchInput-wrapper">
        <input
          placeholder="Search Titles..."
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); }}
          onBlur={() => { setInputSelected(false); }}
          className={inputSelected ? 'searchInput searchInput-selected' : 'searchInput searchInput-notSelected'}
        />
        <span
          role="button"
          onClick={() => { setInputSelected(true); setTimeout(() => { input.focus(); }); }}
          className={`material-icons searchInput-icon ${!inputSelected ? 'searchInput-icon-notSelected' : 'searchInput-icon-Selected'}  `}
        >
          search
        </span>
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
        : search.length === 0 ? (<PopularMovies />)
          : (<BounceLoader color="#E50914" size={50} />) }

    </div>
  );
}

function mapStateToProps({ moviesReducer }) {
  return {
    moviesSearchList: moviesReducer.moviesSearchList,

  };
}

export default connect(mapStateToProps)(MoviesList);
