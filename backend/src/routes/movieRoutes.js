const express = require('express');

const moviesController = require('../controllers/moviesController');

function movieRouter(Movie) {
  const router = express.Router();
  const movies = moviesController(Movie);

  router.route('/')
    .get(movies.getMethod);

  return router;
}

module.exports = movieRouter;
