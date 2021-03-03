/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const PopularMoviesList = ({ popularMovies }) => (
  <>

    {popularMovies && popularMovies?.length && (
      popularMovies.map((movie) => (
        <li key={movie.imdbID}>
          <Link to={`/${movie.imdbID}`}>

            <img src={movie.Poster} alt="" />
          </Link>
        </li>
      ))
    )}
  </>
);

export default PopularMoviesList;
