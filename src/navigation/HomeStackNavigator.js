import { View, Text } from "react-native";
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../screens/Home/HomeScreen";


const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
    screenOptions={{
      // ...
      style: {borderTopWidth: 0},
    }}>
    <HomeStack.Screen
      name="HomeFeed"
      component={HomeScreen}
      options={{
        headerShown: true,
        headerShadowVisible: false,
        headerTitle: () => <></>,
        // headerLeft: () => <FeedHeaderLeft />,
        // headerRight: () => <FeedHeaderRight />,
      }}
    />
  </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
