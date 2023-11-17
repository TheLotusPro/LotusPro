import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icons from 'react-native-heroicons/solid';
import HomeScreen from '../screens/Home/HomeScreen'
import HomeStackNavigator from "./HomeStackNavigator";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        // ...
        style: {borderTopWidth: 0},
        tabBarActiveTintColor: '#fa8072',
        tabBarInactiveTintColor: '#ababab',
        tabBarShowLabel: false,
      }}>
         <BottomTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({color, style}) => (
            <Icons.HomeModernIcon size={30} color={color} />
          ),
        }}
      />

      </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
