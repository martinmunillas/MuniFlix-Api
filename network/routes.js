require('dotenv').config();

const movies = require('../components/movies/network');
const series = require('../components/series/network');

const { PATH } = process.env

const routes = (app) => {
  app.use(PATH + '/movies', movies);
  app.use(PATH + '/series', series);
};

module.exports = routes;
