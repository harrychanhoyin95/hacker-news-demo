import { gql, ApolloServerExpressConfig } from 'apollo-server-express';
import resolvers from '../resolvers/index';

const typeDefs = gql`
  type Query {
    news: [SingleNews]!
  }

  type SingleNews {
    title: String!
    link: String!
    score: Int!
    author: String!
    age: String!
    numberOfComments: Int!
  }
`
const schema: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
}

export default schema;
