import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {TodoScreen, DoneScreen} from '../screens';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {paddingVertical: 5},
        tabBarLabelStyle: {fontSize: 14},
      }}>
      <Screen
        name="To Do"
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="checkbox-marked-circle-plus-outline"
              size={20}
              color={focused ? 'black' : 'grey'}
            />
          ),
          // tabBarLabelStyle: {fontSize: 14},
        }}
        component={TodoScreen}
      />

      <Screen
        name="Done"
        component={DoneScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="check-all"
              size={20}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default BottomTabNav;
