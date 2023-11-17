import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <View>
      <Text style={{color: 'red'}}>BottomTabNavigator</Text>
    </View>
  );
};

export default BottomTabNavigator;
