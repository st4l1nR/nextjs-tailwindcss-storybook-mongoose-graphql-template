import { gql } from 'apollo-server-micro';

export default gql`
  type SingleUploadResponse {
    url: String!
  }

  type MultipleUploadResponse {
    urls: [String!]!
  }
  extend type Mutation {
    singleUpload(file: Upload!): SingleUploadResponse!
    multipleUpload(files: [Upload!]!): MultipleUploadResponse!
  }
`;
