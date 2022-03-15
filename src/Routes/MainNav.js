import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GithubSearch from '../Github/GithubSearch';
import GithubRepo from '../Github/GithubRepo';

const Stack = createNativeStackNavigator();

const MainNav = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Github Search" component={GithubSearch} />

      <Stack.Screen name="Github Repositories" component={GithubRepo} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNav;
