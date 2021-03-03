/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */


import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import React from 'react';

import { Link } from 'react-router-dom';


import './styles/PopularMoviesList.css';

const PopularMoviesList = ({ popularMovies, dispatch }) => {
  let poplrMoviesCopy;
  let dividedArray;

  useEffect(() => {
    if (!popularMovies || !popularMovies.length) {
      dispatch(requestPopularMovies());
    }
  }, [popularMovies?.length]);

  if (popularMovies) {
    poplrMoviesCopy = [...popularMovies];
    dividedArray = new Array(Math.ceil(poplrMoviesCopy.length / 10)).fill().map((_) => poplrMoviesCopy.splice(0, 10));
    console.log(dividedArray[0]);
  }

  function printPopularMoviesRow(arr, rowNmbr) {
    return (
      <ul className={`poplrMovie-row poplrMovie-row${rowNmbr}--wrapper`}>
        {arr.map((movie) => (
          <li key={movie?.imdbID}>
            <Link to={`/${movie?.imdbID}`}>
              <div className="poplrMovie-img-wrapper">
                <img
                  className="poplrMovie-img"
                  src={movie?.Poster}
                  alt=""
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div className="poplrMovies-wrapper">

        { dividedArray && dividedArray?.length && (printPopularMoviesRow(dividedArray[0], 1)) }
        { dividedArray && dividedArray?.length && (printPopularMoviesRow(dividedArray[1], 2)) }
        { dividedArray && dividedArray?.length && (printPopularMoviesRow(dividedArray[2], 3)) }
        { dividedArray && dividedArray?.length && (printPopularMoviesRow(dividedArray[3], 4)) }
        { dividedArray && dividedArray?.length && (printPopularMoviesRow(dividedArray[4], 5)) }

      </div>

    </>
  );
};


export default PopularMoviesList;
