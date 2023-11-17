import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import HomeHeaderLeft from "../components/Home/HomeHeaderLeft";
import HomeHeaderRight from "../components/Home/HomeHeaderRight";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        // ...
        style: { borderTopWidth: 0 },
      }}
    >
      <HomeStack.Screen
        name="HomeFeed"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <></>,
          headerLeft: () => <HomeHeaderLeft />,
          headerRight: () => <HomeHeaderRight />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
