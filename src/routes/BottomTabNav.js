import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Todo from '../component/Todo';
import Done from '../component/Done';

const {Navigator, Screen} = createBottomTabNavigator();

export default function BottomTabNav() {
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
          component={Todo}
          options={{
            tabBarIcon: ({focused, size}) => (
              <Icon
                color={focused ? 'black' : 'grey'}
                name="add-task"
                size={size}
              />
            ),
            // tabBarBadge: tasks.todo.length,
            // tabBarBadgeStyle: {color: 'white', backgroundColor: 'gray'},
          }}
        />

        <Screen
          name="Done"
          component={Done}
          options={{
            tabBarIcon: ({focused, size}) => (
              <Icon
                color={focused ? 'black' : 'gray'}
                name="done-all"
                size={size}
              />
            ),
            // tabBarBadge: tasks.done.length,
            // tabBarBadgeStyle: {color: 'white', backgroundColor: 'gray'},
          }}
        />
      </Navigator>
    </>
  );
}
