import { View, Text, Button } from "react-native";
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from "./BottomTabNavigator";
import ProductDetails from "../screens/Home/ProductDetails";
import ProductHeaderLeft from '../components/Products/ProductHeaderLeft'
import ProductHeaderRight from "../components/Products/ProductHeaderRight";
import EditClientProfile from "../screens/Profile/EditClientProfile";
import * as Icons from 'react-native-heroicons/solid';
import { useNavigation, useTheme } from "@react-navigation/native";
import ProfessionalsSearch from "../screens/Home/ProfessionalsSearch";
import ProfessionalsHeaderRight from "../components/Professionals/ProfessionalsHeaderRight";
import ShoppingCart from "../screens/Shop/ShoppingCart";
import ChatScreen from "../screens/Chat/ChatScreen";
import TalksPostScreen from "../screens/Stories/TalksPostScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { colors } = useTheme();
    const navigation = useNavigation();


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
     <Stack.Screen
      name="Professionals"
      component={ProfessionalsSearch}
      options={{
        headerShown: true,
        headerShadowVisible: false,
         headerTitle: 'Find Professionals',
         headerBackVisible: false,
         headerRight: () => <ProfessionalsHeaderRight />,
      }}
    />
      <Stack.Screen
      name="ChatScreen"
      component={ChatScreen}
      options={{
        headerShown: true,
        headerShadowVisible: false,
         headerTitle: 'Live Chat',
         headerBackVisible: false,
     
      }}
    />
      <Stack.Screen
      name="TalksPostScreen"
      component={TalksPostScreen}
      options={{
        headerShown: true,
        headerShadowVisible: false,
         headerTitle: 'Post',
         headerBackVisible: false,
     
      }}
    />
       <Stack.Group
        screenOptions={{
          presentation: 'fullScreenModal',
        }}>
     <Stack.Screen
      name="EditClientProfile"
      component={EditClientProfile}
      options={{
        headerShown: true,
        headerShadowVisible: false,
         headerTitle: 'Edit Profile',
         headerLeft: () => (
          <Button title="Cancel"   onPress={() => navigation.goBack()} />
          ),
      }}
    />
      <Stack.Screen
      name="ShoppingCart"
      component={ShoppingCart}
      options={{
        headerShown: true,
        headerShadowVisible: false,
         headerTitle: 'Cart',
         headerLeft: () => (
          <Button title="Cancel"   onPress={() => navigation.goBack()} />
          ),
      }}
    />
    </Stack.Group>
  </Stack.Navigator>
  );
};

export default RootNavigator;
