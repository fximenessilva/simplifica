const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  Poster: { type: String },
  Runtime: { type: String },
  Title: { type: String },
  imdbID: { type: String },
  imdbRating: { type: String },

});

module.exports = model('movies', movieSchema);
