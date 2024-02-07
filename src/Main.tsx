import React from 'react';
import Home from './screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from './screens/Chat';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Chat" component={Chat} options={{title: 'chat'}} />
    </Stack.Navigator>
  );
};

export default Main;
