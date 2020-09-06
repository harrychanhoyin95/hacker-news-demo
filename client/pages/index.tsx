import React from 'react';
import styled from 'styled-components';
import GET_NEWS from '../src/graphql/query/news';
import NewsCard from '../src/components/NewsCard';

interface HomeProps {
  loading: boolean;
  data: Data;
  error: string;
}

interface Data {
  news: SingleNews[]
}

interface SingleNews {
  title: string;
  link: string;
  score: number;
  author: string;
  age: string;
  numberOfComments: number;
}

const Grid = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr;
  margin: 8px 16px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 18px 36px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 36px 72px;
    grid-gap: 16px;
  }
`

const Home = (props: HomeProps) => {
  console.log(props)
  const { loading, error, data } = props;
  let message = 'A piece of News'
  if (loading) message = 'Loading...';
  if (error) message = `Error! ${error}`;

  const { news } = data

  return (
    <Grid>
      {news.map((singleNews) => {
        return (
          <NewsCard
            key={singleNews.title}
            {...singleNews}
          >
            {singleNews.title}
          </NewsCard>
        )
      })}
    </Grid>
  )
}

Home.getInitialProps = async(ctx: any) => {
  try {
    const { data, loading } = await ctx.apolloClient.query({
      query: GET_NEWS,
    });
    return { data, loading };
  } catch (error) {
    return {
      error: 'Failed to fetch',
    };
  }
}

export default Home;
