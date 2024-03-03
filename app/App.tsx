import React from 'react';
import Main from './src/Main';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryProvider = new QueryClient();

function App(): React.JSX.Element {
  return (
    <React.Fragment>
      <NavigationContainer>
        <QueryClientProvider client={queryProvider}>
          <Main />
        </QueryClientProvider>
      </NavigationContainer>
    </React.Fragment>
  );
}

export default App;
