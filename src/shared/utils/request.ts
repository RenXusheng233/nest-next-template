import 'server-only';

import { GraphQLClient } from 'graphql-request';
import { PORT } from '../constants/env';

export const request = async (document, variablesAndHeaders?) => {
  try {
    const res = await new GraphQLClient(
      `http://localhost:${PORT}/graphql`,
    ).request(document, variablesAndHeaders);
    return res;
  } catch (error) {
    return error; // FIXME error handling
  }
};
