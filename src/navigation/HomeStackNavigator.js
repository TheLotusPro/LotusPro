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
import Bath from "../screens/Shop/Categories/Bath";
import Bedroom from "../screens/Shop/Categories/Bedroom";
import Designs from "../screens/Shop/Categories/Designs";
import Furniture from "../screens/Shop/Categories/Furniture";
import HolidayDecor from "../screens/Shop/Categories/HolidayDecor";
import HomeImprovement from "../screens/Shop/Categories/HomeImprovement";
import LivingRoom from "../screens/Shop/Categories/LivingRoom";
import Outdoor from "../screens/Shop/Categories/Outdoor";
import StorageAndOrganization from "../screens/Shop/Categories/StorageAndOrganization";

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
        name="Bath"
        component={Bath}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
       <HomeStack.Screen
        name="Bedroom"
        component={Bedroom}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
       <HomeStack.Screen
        name="Designs"
        component={Designs}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
       <HomeStack.Screen
        name="Furniture"
        component={Furniture}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
       <HomeStack.Screen
        name="HolidayDecor"
        component={HolidayDecor}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
       <HomeStack.Screen
        name="HomeImprovement"
        component={HomeImprovement}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
       <HomeStack.Screen
        name="KitchenAndDining"
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
        name="LivingRoom"
        component={LivingRoom}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
       <HomeStack.Screen
        name="Outdoor"
        component={Outdoor}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <SearchHeader />,
          headerLeft: () => <GoBackHeaderButton />,
          headerRight: () => <ShopHeaderRight />,
        }}
      />
       <HomeStack.Screen
        name="StorageAndOrganization"
        component={StorageAndOrganization}
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
