import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useDataProvider} from '../Provider';
import {TodoScreen, DoneScreen} from '../screens';

const {Navigator, Screen} = createBottomTabNavigator();

export default function BottomTabNav() {
  const tasks = useDataProvider();

  return (
    <>
      <Navigator
        screenOptions={{
          tabBarStyle: {paddingVertical: 5},
          tabBarLabelStyle: {fontSize: 15},
          tabBarActiveTintColor: 'black',
        }}>
        <Screen
          name="ToDo"
          component={TodoScreen}
          options={{
            tabBarIcon: ({focused, size}) => (
              <Icon
                color={focused ? 'black' : 'grey'}
                name="add-task"
                size={size}
              />
            ),
            tabBarBadge: tasks.todo.length,
            tabBarBadgeStyle: {color: 'black', backgroundColor: 'gray'},
          }}
        />

        <Screen
          name="Done"
          component={DoneScreen}
          options={{
            tabBarIcon: ({focused, size}) => (
              <Icon
                color={focused ? 'black' : 'gray'}
                name="done-all"
                size={size}
              />
            ),
            tabBarBadge: tasks.done.length,
            tabBarBadgeStyle: {color: 'black', backgroundColor: 'gray'},
          }}
        />
      </Navigator>
    </>
  );
}
