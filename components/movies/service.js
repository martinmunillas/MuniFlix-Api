const model = require('./schema');

const getMovies = async () => {
  return await model.find();
};

const postMovie = async (movie) => {
  return await new model(movie).save();
};

const updateMovie = async (id, movie) => {
  return await model.updateOne({ _id: id }, movie);
};

const deleteMovie = async (id) => {
  return await model.deleteOne({ _id: id });
};

module.exports = {
  getMovies,
  postMovie,
  updateMovie,
  deleteMovie
};
