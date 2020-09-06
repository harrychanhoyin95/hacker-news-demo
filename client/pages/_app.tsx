import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'
import withApollo from '../src/configureClient';

import 'fontsource-roboto';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
