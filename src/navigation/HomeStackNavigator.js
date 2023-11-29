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
import ProfessionalsHeaderRight from "../components/Professionals/ProfessionalsHeaderRight";
import ProfessionalsSearch from "../screens/Professionals/ProfessionalsSearch";
import ProfessionalList from "../screens/Professionals/ProfessionalList";
import Photos from "../screens/Ideas/Photos";
import GoBackHeaderButton from "../components/GoBackHeaderButton";
import SearchHeader from "../components/SearchHeader";
import FromLotusHome from "../screens/FromLotus/FromLotusHome";
import AllPodcast from "../screens/FromLotus/AllPodcast";
import VideoHome from "../screens/Videos/VideoHome";
import ShopCategoryScreen from "../screens/Shop/Categories/ShopCategoryScreen";
import ShopScreen from "../screens/Shop/Categories/ShopScreen";

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
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
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
          headerTitle: "Stories",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="Ideas"
        component={Ideas}
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="Talks"
        component={Talks}
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="ProfessionalList"
        component={ProfessionalList}
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitle: "Professionals",
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="Professionals"
        component={ProfessionalsSearch}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Find Professionals",
          headerBackVisible: false,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ProfessionalsHeaderRight />,
        }}
      />

      <HomeStack.Screen
        name="AllPhotos"
        component={Photos}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="VideoHome"
        component={VideoHome}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="FromLotus"
        component={FromLotusHome}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="AllPodcast"
        component={AllPodcast}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="ShopCategory"
        component={ShopCategoryScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />

      <HomeStack.Screen
        name="SubcategoryScreen"
        component={ShopScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
