import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import React from 'react';

interface ApolloProviderWrapperProps {
  children: React.ReactNode;
}

const ApolloProviderWrapper: React.FC<ApolloProviderWrapperProps> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

export default ApolloProviderWrapper;