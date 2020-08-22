const express = require('express');

const service = require('./service');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const movies = await service.getMovies();

    res.status(200).send({
      message: 'Movies retrieved correctly',
      data: movies,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const movie = req.body;

    await service.postMovie(movie);

    res.status(200).send({
      message: `Movie posted correctly`,
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = req.body;

    await service.updateMovie(id, movie);

    res.status(200).send({
      message: 'Movie updated correctly',
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    await service.deleteMovie(id);

    res.status(200).send({
      message: 'Movie deleted correctly',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
