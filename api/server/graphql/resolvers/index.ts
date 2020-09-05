import { NewsQueries } from './news'

const rootResolver = {
  Query: {
    ...NewsQueries
  }
}

export default rootResolver;
