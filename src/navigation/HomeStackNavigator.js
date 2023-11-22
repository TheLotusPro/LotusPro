import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import HomeHeaderLeft from "../components/Home/HomeHeaderLeft";
import HomeHeaderRight from "../components/Home/HomeHeaderRight";
import ShopHome from "../screens/Shop/ShopHome";
import ShopHeaderLeft from "../components/Shop/ShopHeaderLeft";
import ShopHeaderRight from "../components/Shop/ShopHeaderRight";
import Stories from "../screens/Stories/Stories";
import Ideas from "../screens/Ideas/Ideas";
import Talks from "../screens/Stories/Talks";

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
         <HomeStack.Screen
        name="ShopHome"
        component={ShopHome}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: 'Shop',
          headerLeft: () => <ShopHeaderLeft />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
          <HomeStack.Screen
        name="StoryHome"
        component={Stories}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: 'Stories',
          // headerLeft: () => <ShopHeaderLeft />,
          // headerRight: () => <ShopHeaderRight />,
        }}
      />
         <HomeStack.Screen
        name="Ideas"
        component={Ideas}
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitle: 'Ideas',
          // headerLeft: () => <ShopHeaderLeft />,
          // headerRight: () => <ShopHeaderRight />,
        }}
      />
          <HomeStack.Screen
        name="Talks"
        component={Talks}
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitle: 'Talks',
          // headerLeft: () => <ShopHeaderLeft />,
          // headerRight: () => <ShopHeaderRight />,
        }}
      />
      
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
