import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import Resume from '../screens/Resume';
const {Navigator, Screen} = createBottomTabNavigator();
import colors from '../utils/styles/colors';
import {rh} from '../utils/responsive';
import {Platform} from 'react-native';

export function AppRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.text,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? rh(20) : 0,
          height: 88,
        },
      }}>
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
