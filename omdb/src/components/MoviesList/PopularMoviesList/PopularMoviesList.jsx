/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PopularMoviesList.css';

const PopularMoviesList = ({ popularMovies }) => {
  function printPopularMoviesRow(arr, rowNmbr) {
    return (
      <>
        {rowNmbr === 1 ? <p className="pplr-tag">Popular</p> : null}
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
      </>
    );
  }

  return (
    <>
      <div className="poplrMovies-wrapper">

        { popularMovies && popularMovies?.length && (printPopularMoviesRow(popularMovies[0], 1)) }
        { popularMovies && popularMovies?.length && (printPopularMoviesRow(popularMovies[1], 2)) }
        { popularMovies && popularMovies?.length && (printPopularMoviesRow(popularMovies[2], 3)) }
        { popularMovies && popularMovies?.length && (printPopularMoviesRow(popularMovies[3], 4)) }
        { popularMovies && popularMovies?.length && (printPopularMoviesRow(popularMovies[4], 5)) }

      </div>

    </>
  );
};

export default PopularMoviesList;
