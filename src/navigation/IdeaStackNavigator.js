import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import IdeaRightHeader from "../components/Ideas/IdeaRightHeader";
import MyIdeas from "../screens/Ideas/MyIdeas";

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