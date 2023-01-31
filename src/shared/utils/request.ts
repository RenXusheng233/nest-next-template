import 'server-only';

import { GraphQLClient } from 'graphql-request';
import { PORT } from '../constants/env';

export const request = (document, variablesAndHeaders?) =>
  new GraphQLClient(`http://localhost:${PORT}/graphql`)
    .request(document, variablesAndHeaders)
    .then((res) => res);
