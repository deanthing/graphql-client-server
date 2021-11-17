module.exports = async (_, { id }, { models }) => {
  await models.Podcast.deleteOne({ _id: id });
};
