const express = require('express');

const service = require('./service');

const router = express.Router();



//                SERIE

//GET SERIES
router.get('/', async (req, res, next) => {
  try {
    const series = await service.getSeries();

    res.status(200).send({
      message: 'Series retrieved correctly',
      data: series,
    });
  } catch (error) {
    next(error);
  }
});

//POST SERIE
router.post('/', async (req, res, next) => {
  try {
    const series = req.body;

    await service.postSeries(series);

    res.status(200).send({
      message: `series posted correctly`,
    });
  } catch (error) {
    next(error);
  }
});

//UPDATE SERIE
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const series = req.body;

    await service.updateSeries(id, series);

    res.status(200).send({
      message: 'Series updated correctly',
    });
  } catch (error) {
    next(error);
  }
});

//DELETE SERIE
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    await service.deleteSeries(id);

    res.status(200).send({
      message: 'Series deleted correctly',
    });
  } catch (error) {
    next(error);
  }
});



//                  SEASON

//POST SEASON
router.post('/season', async (req, res, next) => {
  try {
    const season = req.body;

    await service.postSeason(season);

    res.status(200).send({
      message: `Season posted correctly`,
    });
  } catch (error) {
    next(error);
  }
});

//UPDATE SEASON
router.put('/season/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const season = req.body;

    await service.updateSeason(id, season);

    res.status(200).send({
      message: 'Season updated correctly',
    });
  } catch (error) {
    next(error);
  }
});

//DELETE SEASON
router.delete('/season/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    await service.deleteSeason(id);

    res.status(200).send({
      message: 'Season deleted correctly',
    });
  } catch (error) {
    next(error);
  }
});




//                  EPISODE

//POST EPISODE
router.post('/episode', async (req, res, next) => {
  try {
    const episode = req.body;

    await service.postEpisode(episode);

    res.status(200).send({
      message: `Episode posted correctly`,
    });
  } catch (error) {
    next(error);
  }
});

//UPDATE EPISODE
router.put('/episode/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const episode = req.body;

    await service.updateEpisode(id, episode);

    res.status(200).send({
      message: 'Episode updated correctly',
    });
  } catch (error) {
    next(error);
  }
});

//DELETE EPISODE
router.delete('/episode/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    await service.deleteEpisode(id);

    res.status(200).send({
      message: 'Episode deleted correctly',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
