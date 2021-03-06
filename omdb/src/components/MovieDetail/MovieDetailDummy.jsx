/* eslint-disable no-mixed-operators */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetailDummy = ({ movieDetail }) => {
  function addBreak(str) {
    const arr = str.split(',');
    return arr.map((e) => (
      <li>
        {e}
      </li>
    ));
  }
  return (
    <article className="movieDetail-wrapper">

      <div className="movieDetail-info">
        <div className="movieDetail-btn-wrapper">
          <Link to="/">
            <span className="material-icons movieDetail-backBtn">
              arrow_back
            </span>
          </Link>
        </div>
        <ul className="length-year-rating-wrapper">
          <li className="movieDetail-length">{movieDetail.Runtime}</li>
          <p>•</p>
          <li className="movieDetail-year">{movieDetail.Year}</li>
          {movieDetail.Rated !== 'N/A' && movieDetail.Rated !== 'Not Rated' && (
          <>
            <p>•</p>
            <li className="movieDetail-rating">{movieDetail.Rated}</li>
          </>
          )}

        </ul>
        <div className="movieDetail-title-wrapper">
          <h3>
            {movieDetail.Title}
          </h3>
        </div>
        <ul className="movieDetail-rating-favorites-wrapper">
          <li className="imdb-rating">
            <img src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/604115a9e8f4407a40cd1fe3/5e5fb5e938ee63ec4d44f44b8b6b7a5d/favpng_television-logo-imdb.png" alt="" />
            <p>{movieDetail.imdbRating}</p>
          </li>
          <li className="metascore-rating">
            <img src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/604115a9e8f4407a40cd1fe3/46e676a6b211ddb3bbe62f224b9a14b9/Metascore.png" alt="" />
            <p>{movieDetail.Metascore}</p>
          </li>
          <li className="add-favorite">
            <span className="material-icons movieDetail-favorite">
              favorite_border
            </span>
          </li>
        </ul>
        <div className="movieDetail-plot-wrapper">
          <h5>Plot</h5>
          <p>
            {movieDetail.Plot}
          </p>
        </div>
        <div className="movieDetail-cast-genre-director-wrapper">
          <ul className="movieDetail-cast">
            <h5>Cast</h5>
            {addBreak(movieDetail.Actors)}
          </ul>
          <ul className="movieDetail-genre">
            <h5>Genre</h5>
            {addBreak(movieDetail.Genre)}
          </ul>
          {movieDetail.Director !== 'N/A' && (

          <ul className="movieDetail-director">
            <h5>Director</h5>
            <li>{movieDetail.Director}</li>
          </ul>
          )}
        </div>
      </div>

      <div className="movieDetail-poster-wrapper">
        <img
          src={movieDetail?.Poster === 'N/A' ? 'data:image/png;base64,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'
            : movieDetail?.Poster}
          alt=""
        />
      </div>
    </article>

  );
};

export default MovieDetailDummy;
