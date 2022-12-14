import React from 'react';
import {render} from 'react-dom';
import { App } from './App.js';
import { TodoProvider } from './context/TodoContext.js';

import {ApolloClient,InMemoryCache,ApolloProvider,createHttpLink} from "@apollo/client"
import { setContext } from '@apollo/client/link/context';


const container = document.getElementById('root');

const httpLink = createHttpLink({
  uri:'http://localhost:4000/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers:{
      ...headers,
      authorization: token || ''
    }
  }
})

const client = new ApolloClient({
  link:authLink.concat(httpLink),
  cache: new InMemoryCache({
    fetchOptions: {
      credentials: 'include',
    },
  })
})

render(
    <ApolloProvider
    client={client}
    >
      <TodoProvider>
        <App/>
      </TodoProvider>
    </ApolloProvider>
  , container, () => {
  console.log('rendered');
});