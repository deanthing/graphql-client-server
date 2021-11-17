module.exports = async (_, { input }, { models }) => {
  try {
    return models.Podcast.create(input);
  } catch (e) {
    console.log(e);
  }
};
