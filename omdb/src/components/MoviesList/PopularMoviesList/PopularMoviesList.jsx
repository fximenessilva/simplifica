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
        {rowNmbr === 2 ? <p className="classics-tag">Classics</p> : null}
        <ul className={`poplrMovie-row poplrMovie-row${rowNmbr}--wrapper`}>

          {arr.map((movie) => (
            <li key={movie?.imdbID}>
              <Link to={`/${movie?.imdbID}`}>
                <div className={`poplrMovie-img-wrapper poplrMovie${rowNmbr}-img-wrapper`}>

                  <img
                    id="puta"
                    className="poplrMovie-img"
                    src={movie?.Poster}
                    alt=""
                  />

                  <div className={`poplrMovie-detail poplrMovie-detail-row${rowNmbr}`}>
                    <h4 className="poplrMovie-detail-title">{movie.Title}</h4>
                    <p className="poplrMovie-detail-description">as</p>
                  </div>
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
