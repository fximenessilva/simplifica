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
            <>
              <li key={movie?.imdbID}>
                <Link to={`/${movie?.imdbID}`}>
                  <div className={`poplrMovie-img-wrapper poplrMovie${rowNmbr}-img-wrapper`}>

                    <img
                      className="poplrMovie-img"
                      src={movie?.Poster}
                      alt=""
                    />
                    <div className={`poplrMovie-detail poplrMovie-detail-row${rowNmbr}`}>
                      <h4 className="poplrMovie-detail-title">{movie.Title}</h4>
                      <div className="poplrMovie-detail-rating-runtime-wrapper">
                        <span className="poplrMovie-detail-rating">
                          <img className="poplrMovie-detail-rating-logo" src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/604115a9e8f4407a40cd1fe3/5e5fb5e938ee63ec4d44f44b8b6b7a5d/favpng_television-logo-imdb.png" alt="" />
                          {movie.imdbRating}
                        </span>
                        <p className="poplrMovie-detail-runtime">{movie.Runtime}</p>
                      </div>
                      <p className="poplrMovie-detail-description">{movie.Genre}</p>
                    </div>
                  </div>
                </Link>
              </li>

            </>
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
