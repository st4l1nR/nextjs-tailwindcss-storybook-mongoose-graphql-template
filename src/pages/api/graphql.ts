import { ApolloServer } from 'apollo-server-micro';
import connectDb from '@lib/connectDb';
import typeDefs from '@graphql/typeDefs';
import resolvers from '@graphql/resolvers';
import models from '@graphql/models';
import Cors from 'micro-cors';
import processRequest from 'graphql-upload/processRequest.mjs';
import jwt from 'jsonwebtoken';

const cors = Cors();

connectDb()
  .then()
  .catch((error) => {
    console.log(error);
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const authorization = req.headers.authorization ?? '';
    const token: string = authorization.split(' ')[1];
    let user;
    if (token !== null && token !== undefined) {
      try {
        user = jwt.verify(token, process.env.SECRET as string);
      } catch (error) {
        user = null;
      }
    }
    return {
      models,
      user,
    };
  },
});
export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  const contentType = req.headers['content-type'];
  if (
    typeof contentType === 'string' ??
    contentType.startsWith('multipart/form-data')
  ) {
    req.filePayload = await processRequest(req, res);
  }
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
});
