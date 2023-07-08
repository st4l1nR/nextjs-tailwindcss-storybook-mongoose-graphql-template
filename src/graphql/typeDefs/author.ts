import { gql } from 'apollo-server-micro';

export default gql`
  scalar Upload
  type Author {
    _id: ID!
    name: String!
  }

  input createAuthorInput {
    name: String!
  }

  input updateAuthorInput {
    _id: ID!
    name: String
  }

  extend type Query {
    listAuthor: [Author]!
    getAuthorById(_id: ID!): Author!
  }

  extend type Mutation {
    createAuthor(createAuthorInput: createAuthorInput!): Author!
    updateAuthor(updateAuthorInput: updateAuthorInput!): Author!
    deleteAuthor(_id: ID!): Author!
  }
`;
