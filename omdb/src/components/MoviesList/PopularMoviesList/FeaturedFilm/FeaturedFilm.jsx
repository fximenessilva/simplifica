/* eslint-disable no-unused-vars */
import React from 'react';
import './styles/FeaturedFilm.css';

const FeaturedFilm = (props) => (
  <>
    <div className="featuredFilm-wrapper">
      <div className="featured-img-wrapper">
        <img className="featured-img" src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/604115a9e8f4407a40cd1fe3/deebf4f245bb2e58dace6159cb445569/featuredFilm.webp" alt="" />
      </div>
      <div className="feature-dscrptn-img-wrapper">
        <img className="feature-dscrptn-img" src="https://trello-attachments.s3.amazonaws.com/60411589f3a6285816a489c0/604115a9e8f4407a40cd1fe3/1326c4346bb414542490e7b8d3408e5b/featuredFilmText.webp" alt="" />
      </div>
    </div>
  </>
);

export default FeaturedFilm;
