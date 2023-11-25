import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClientProfile from '../screens/Profile/ClientProfile';


const ProfileStack = createNativeStackNavigator();


const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator
    screenOptions={{
      // ...
      style: { borderTopWidth: 0 },
    }}
  >
   <ProfileStack.Screen
        name="HomeFeed"
        component={ClientProfile}
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: () => <></>,
        }}
      />
     

  </ProfileStack.Navigator>
  )
}

export default ProfileStackNavigator