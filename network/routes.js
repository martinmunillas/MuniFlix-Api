require('dotenv').config();

const movies = require('../components/movies/network');
const series = require('../components/series/network');

const { APP_PATH } = process.env

const routes = (app) => {
  app.use(APP_PATH + '/movies', movies);
  app.use(APP_PATH + '/series', series);
};

module.exports = routes;
