import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './router/AppRouter.tsx';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import './index.css';

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_APOLLO_SERVER}`,
  cache: new InMemoryCache(),
  devtools: {
    enabled: true
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
)
