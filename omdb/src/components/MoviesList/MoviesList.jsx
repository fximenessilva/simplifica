/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchMovies, requestMovieDetail } from '../../redux/actions/moviesActions';

function MoviesList({ dispatch, moviesSearchList, movieDetail }) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(searchMovies(search, page));
  }, [search, page]);

  // console.log(movieDetail);

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
      <div>
        <ul>
          {moviesSearchList?.Search && moviesSearchList?.Search?.length && (
            moviesSearchList.Search.map((movie) => (
              <ul key={movie.imdbID}>
                <li key={movie.imdbID} onClick={() => dispatch(requestMovieDetail(movie.imdbID))}>
                  <Link to={`/${movie.imdbID}`}>
                    {movie.Title}
                  </Link>
                </li>

              </ul>

            ))
          )}
        </ul>
      </div>
      <div>
        <button onClick={() => setMin()} type="button">-</button>
        <span>
          Page
          {' '}
          {page}
        </span>
        <button onClick={() => setMax()} type="button">+</button>
      </div>

    </>
  );
}

function mapStateToProps({ moviesReducer }) {
  return {
    moviesSearchList: moviesReducer.moviesSearchList,

  };
}

export default connect(mapStateToProps)(MoviesList);
