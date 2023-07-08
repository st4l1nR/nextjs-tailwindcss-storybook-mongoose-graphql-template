import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import { authorQueries, authorMutations } from './author';
import { imageMutations } from './image';

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    ...authorQueries,
  },
  Mutation: {
    ...authorMutations,
    ...imageMutations,
  },
};
export default resolvers;
