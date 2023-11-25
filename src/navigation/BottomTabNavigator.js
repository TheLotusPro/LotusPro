import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icons from 'react-native-heroicons/solid';
import HomeScreen from '../screens/Home/HomeScreen'
import HomeStackNavigator from "./HomeStackNavigator";
import TestScreen from "../screens/TestScreen";
import ChatStackNavigator from "./ChatStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import IdeaStackNavigator from "./IdeaStackNavigator";
import ProNavigator from "./ProNavigator";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        // ...
        style: {borderTopWidth: 0},
        tabBarActiveTintColor: '#33AB5F',
        tabBarInactiveTintColor: '#ababab',
        tabBarShowLabel: true,
      }}>
         <BottomTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({color, style}) => (
            <Icons.HomeModernIcon size={25} color={color} />
          ),
        }}
      />
          <BottomTab.Screen
        name="Chat"
        component={ChatStackNavigator}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({color, style}) => (
            <Icons.ChatBubbleLeftEllipsisIcon size={25} color={color} />
          ),
        }}
      />
         <BottomTab.Screen
        name="My Ideas"
        component={IdeaStackNavigator}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({color, style}) => (
            <Icons.HeartIcon size={25} color={color} />
          ),
        }}
      />
       <BottomTab.Screen
        name="Pro"
        component={ProNavigator}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({color, style}) => (
            <Icons.BuildingOffice2Icon size={25} color={color} />
          ),
        }}
      />
         <BottomTab.Screen
        name="Test"
        component={TestScreen}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({color, style}) => (
            <Icons.RocketLaunchIcon size={25} color={color} />
          ),
        }}
      />
          <BottomTab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({color, style}) => (
            <Icons.UserCircleIcon size={25} color={color} />
          ),
        }}
      />

      </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
