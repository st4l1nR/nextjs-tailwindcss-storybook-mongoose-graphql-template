export const authorQueries = {
  listAuthor: async (parent, args, { models, user }) => {
    return await models.author.find({});
  },
  getAuthorById: async (parent, { _id }, { models }) => {
    return await models.author.findOne({ _id });
  },
};
export const authorMutations = {
  createAuthor: async (parent, { createAuthorInput: args }, { models }) => {
    const newAuthor = new models.Author(args);
    return await newAuthor.save();
  },
  updateAuthor: async (parent, { _id, ...args }, { models }) => {
    return await models.author.findByIdAndUpdate(_id, args, {
      new: true,
    });
  },
  deleteAuthor: async (parent, { _id }, { models }) => {
    return await models.author.findByIdAndDelete(_id);
  },
};
