import { View, Text } from "react-native";
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from "./BottomTabNavigator";
import ProductDetails from "../screens/Home/ProductDetails";
import ProductHeaderLeft from '../components/Products/ProductHeaderLeft'
import ProductHeaderRight from "../components/Products/ProductHeaderRight";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={BottomTabNavigator}
      options={{
        headerShown: false,
        headerBackTitle: ' ',
      }}
    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{
        headerShown: true,
        headerShadowVisible: false,
         headerTitle: 'Details',
          headerLeft: () => <ProductHeaderLeft />,
          headerRight: () => <ProductHeaderRight />,
      }}
    />
  </Stack.Navigator>
  );
};

export default RootNavigator;
