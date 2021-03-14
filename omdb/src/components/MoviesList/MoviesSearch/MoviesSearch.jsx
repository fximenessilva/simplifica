/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import './styles/MoviesSearch.css';

function MoviesSearch({
  moviesSearchList, setMin, setMax, page,
}) {
  return (
    <>

      {!moviesSearchList
        ? <BounceLoader color="#E50914" size={50} />
        : (
          <>
            <div className="moviesSearchList-wrapper">
              <ul>
                {moviesSearchList?.Search && moviesSearchList?.Search?.length && (
                  moviesSearchList.Search.map((movie) => (
                    <li key={movie.imdbID}>
                      <Link to={`/${movie.imdbID}`}>
                        <div className="moviesSearchList-img-wrapper">
                          <img
                            className="moviesSearchList-img"
                            src={movie?.Poster === 'N/A' ? 'https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/604115a9e8f4407a40cd1fe3/0f0257c69340458359a831bdde1b352b/angryimg_(1).png'
                              : movie?.Poster}
                            alt=""
                          />
                          {movie?.Poster === 'N/A' ? (
                            <div className="moviesSearchList-detail">
                              {movie.Title}
                            </div>
                          ) : null}

                        </div>
                      </Link>
                    </li>

                  ))
                )}
              </ul>
            </div>
            <div className="navigation-btn-wrapper">
              <span role="button" onClick={() => setMin()} className="material-icons">
                navigate_before
              </span>
              <p>
                Page
                {' '}
                {page}
              </p>
              <span role="button" onClick={() => setMax()} type="button" className="material-icons">
                navigate_next
              </span>

            </div>
          </>
        )}

    </>

  );
}

export default MoviesSearch;
