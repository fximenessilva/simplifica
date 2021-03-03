/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function MoviesSearch({
  moviesSearchList, setMin, setMax, search, page,
}) {
  return (
    <>

      <div>
        <ul>
          {moviesSearchList?.Search && moviesSearchList?.Search?.length && (
            moviesSearchList.Search.map((movie) => (

              <li key={movie.imdbID}>
                <Link to={`/${movie.imdbID}`}>
                  {movie.Title}
                </Link>
              </li>

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

export default MoviesSearch;
