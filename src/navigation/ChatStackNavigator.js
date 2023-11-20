import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatRoom from "../screens/Chat/ChatRoom";
import ChatRoomHeaderLeft from "../components/Chat/ChatRoomHeaderLeft";
import ChatRoomHeaderRight from "../components/Chat/ChatRoomHeaderRight";

const ChatStack = createNativeStackNavigator();

const ChatStackNavigator = () => {
  return (
    <ChatStack.Navigator
      screenOptions={{
        // ...
        style: { borderTopWidth: 0 },
      }}
    >
      <ChatStack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: 'Chat',
          headerLeft: () => <ChatRoomHeaderLeft />,
          headerRight: () => <ChatRoomHeaderRight />,
        }}
      />
    </ChatStack.Navigator>
  );
};

export default ChatStackNavigator;
