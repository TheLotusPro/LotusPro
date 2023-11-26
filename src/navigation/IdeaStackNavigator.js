import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import GoBackHeaderButton from "../components/GoBackHeaderButton";
import IdeaRightHeader from "../components/Ideas/IdeaRightHeader";
import MyIdeas from "../screens/Ideas/MyIdeas";
import Photos from "../screens/Ideas/Photos";

const IdeaStack = createNativeStackNavigator();

const IdeaStackNavigator = () => {
  return (
    <IdeaStack.Navigator
      screenOptions={{
        // ...
        style: { borderTopWidth: 0 },
      }}
    >
     <IdeaStack.Screen
        name="Idea"
        component={MyIdeas}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: 'My Ideas',
          // headerLeft: () => <HomeHeaderLeft />,
          headerRight: () => <IdeaRightHeader />,
        }}
      />
  
     


    </IdeaStack.Navigator>
  )
}

export default IdeaStackNavigator