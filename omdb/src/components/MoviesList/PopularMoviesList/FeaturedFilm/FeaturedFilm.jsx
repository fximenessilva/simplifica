/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/FeaturedFilm.css';

const FeaturedFilm = (props) => (
  <>
    <div className="featuredFilm-wrapper">
      <div className="featured-img-wrapper">
        <div className="featured-dscrptn-img-wrapper">
          <img src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/604115a9e8f4407a40cd1fe3/1326c4346bb414542490e7b8d3408e5b/featuredFilmText.webp" alt="" />
          <p>
            Waking from a coma, Vanessa finds lone soldier Axel protecting her from a vampire apocalypse called
            {' '}
            <strong>The Rising</strong>
            {' '}
            and discovers she has unusual powers.
          </p>
        </div>
        <div className="featuredFilm-btns-wrapper">
          <button type="button" className="featured-play-btn">
            <span className="material-icons">
              play_arrow
            </span>
            PLAY
          </button>

          <Link to="/tt0472198">
            <button type="button" className="featured-info-btn">
              <img src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/604115a9e8f4407a40cd1fe3/b77d33c685ca7a1b90a32039fc82806f/14213041731615200897.svg" alt="" />
              MORE INFO
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default FeaturedFilm;
