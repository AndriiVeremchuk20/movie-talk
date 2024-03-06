import React from 'react';
import Home from './screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from './screens/Chat';
import {RootStackParamList} from './types/navigation';
import {WithNet} from './provider/WithNet';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <WithNet>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </WithNet>
  );
};

export default Main;
