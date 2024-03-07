import React from 'react';
import Main from './src/Main';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const queryProvider = new QueryClient();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView className="flex-1">
      <QueryClientProvider client={queryProvider}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
