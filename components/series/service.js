const seriesModel = require('./schemas/seriesSchema');
const seasonModel = require('./schemas/seasonSchema');
const episodeModel = require('./schemas/episodeSchema');

const getSeries = async () => {
  const emptySeries = await seriesModel.find();
  const emptySeasons = await seasonModel.find();
  const episodes = await episodeModel.find();

  const fullSeasons = emptySeasons.map((season) => ({
    ...season._doc,
    episodes: episodes.filter((episode) => episode.season == season.id),
  }));

  const fullSeries = emptySeries.map((serie) => ({
    ...serie._doc,
    seasons: fullSeasons.filter((season) => season.serie == serie.id),
  }));

  return fullSeries;
};

// SERIES
const postSeries = async (series) => {
  return await new seriesModel(series).save();
};

const updateSeries = async (id, series) => {
  return await seriesModel.updateOne({ _id: id }, series);
};

const deleteSeries = async (id) => {
  const deletedSeries = await seriesModel.deleteOne({ _id: id });
  await deleteSeasonsBySeries(id);
  return deletedSeries;
};

// SEASONS
const postSeason = async (season) => {
  return await new seasonModel(season).save();
};

const updateSeason = async (id, season) => {
  return await seasonModel.updateOne({ _id: id }, season);
};

const deleteSeason = async (id) => {
  const deletedSeason = await seasonModel.deleteOne({ _id: id });
  deleteEpisodesBySeason(id);
  return deletedSeason;
};

const deleteSeasonsBySeries = async (serieId) => {
  const seasons = await seasonModel.find({ serie: serieId });
  seasons.forEach((season) => deleteEpisodesBySeason(season._id));
  await seasonModel.deleteMany({ serie: serieId });
};

// EPISODES
const postEpisode = async (episode) => {
  return await new episodeModel(episode).save();
};

const updateEpisode = async (id, episode) => {
  return await episodeModel.updateOne({ _id: id }, episode);
};

const deleteEpisode = async (id) => {
  return await episodeModel.deleteOne({ _id: id });
};

const deleteEpisodesBySeason = async (seasonId) => {
  return await episodeModel.deleteMany({ season: seasonId });
};

module.exports = {
  getSeries,
  postSeries,
  updateSeries,
  deleteSeries,

  postSeason,
  updateSeason,
  deleteSeason,

  postEpisode,
  updateEpisode,
  deleteEpisode,
};
