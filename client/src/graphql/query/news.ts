import gql from 'graphql-tag';

const GET_NEWS = gql`
  {
    news {
      title
      link
      score
      author
      age
      numberOfComments
    }
  }
`

export default GET_NEWS;