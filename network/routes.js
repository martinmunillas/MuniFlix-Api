const movies = require('../components/movies/network');

const routes = (app) => {
  app.use('/movies', movies);
};

module.exports = routes;
