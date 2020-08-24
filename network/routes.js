const movies = require('../components/movies/network');
const series = require('../components/series/network')

const routes = (app) => {
  app.use('/movies', movies);
  app.use('/series', series);
};

module.exports = routes;
