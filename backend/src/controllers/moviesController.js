function moviesController(Movies) {
  function getMethod(req, res) {
    const query = {};

    Movies.find(query, (errorFindMovies, movies) => (
      errorFindMovies ? res.send(errorFindMovies) : res.send(movies)

    ));
  }
  return {
    getMethod,
  };
}

module.exports = moviesController;
