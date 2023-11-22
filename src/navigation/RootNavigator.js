import { View, Text, Button } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ProductDetails from "../screens/Shop/ProductDetails";
import ProductHeaderLeft from "../components/Products/ProductHeaderLeft";
import ProductHeaderRight from "../components/Products/ProductHeaderRight";
import EditClientProfile from "../screens/Profile/EditClientProfile";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation, useTheme } from "@react-navigation/native";
import ProfessionalsSearch from "../screens/Professionals/ProfessionalsSearch";
import ProfessionalsHeaderRight from "../components/Professionals/ProfessionalsHeaderRight";
import ShoppingCart from "../screens/Shop/ShoppingCart";
import ChatScreen from "../screens/Chat/ChatScreen";
import TalksPostScreen from "../screens/Stories/TalksPostScreen";
import ProductReviews from "../screens/Shop/ProductReviews";
import DesignProductDetails from "../screens/Shop/DesignProductDetails";
import ProfessionalDetails from "../screens/Professionals/ProfessionalDetails";
import ProDetailsHeaderRight from "../components/Professionals/ProDetailsHeaderRight";
import NewMessageModel from "../screens/Chat/NewMessageModel";

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
          headerBackTitle: " ",
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Details",
          headerLeft: () => <ProductHeaderLeft />,
          headerRight: () => <ProductHeaderRight />,
        }}
      />
      <Stack.Screen
        name="ProfessionalDetails"
        component={ProfessionalDetails}
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "Professional Details",
          // headerLeft: () => <ProductHeaderLeft />,
          headerRight: () => <ProDetailsHeaderRight />,
        }}
      />

      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Live Chat",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="DesignProductDetails"
        component={DesignProductDetails}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Design Details",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="ProductReviews"
        component={ProductReviews}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Product Review",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="TalksPostScreen"
        component={TalksPostScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Post",
          headerBackVisible: false,
        }}
      />

      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}
      >
        <Stack.Screen
          name="NewMessage"
          component={NewMessageModel}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "New Message",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          presentation: "fullScreenModal",
        }}
      >
        <Stack.Screen
          name="EditClientProfile"
          component={EditClientProfile}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Edit Profile",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: "Cart",
            headerLeft: () => (
              <Button title="Cancel" onPress={() => navigation.goBack()} />
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
