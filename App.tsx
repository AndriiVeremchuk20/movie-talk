import React from 'react';
import Main from './src/Main';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryProvider = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryProvider}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
