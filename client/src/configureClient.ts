import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';
import withApollo from 'next-with-apollo';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { WebSocketLink } from 'apollo-link-ws';
import { SERVER, WEB_SOCKET_LINK } from './config';

interface Definition {
  kind: string;
  operation?: string;
}

const httpLink = new HttpLink({
  fetch,
  uri: SERVER,
});

const webSocketLink: any = process.browser
  ? new WebSocketLink({
      uri: WEB_SOCKET_LINK,
      options: {
        reconnect: true,
      },
    })
  : null;

const link = process.browser
  ? split(
      ({ query }) => {
        const { kind, operation }: Definition = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      webSocketLink,
      httpLink
    )
  : httpLink;

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache().restore(initialState || {}),
    })
);