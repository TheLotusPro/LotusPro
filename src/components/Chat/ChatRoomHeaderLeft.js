import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {useNavigation, useTheme} from '@react-navigation/native';
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from '@gluestack-ui/themed';

const ChatRoomHeaderLeft = () => {
  return (
    <View>
    <Avatar style={styles.userImage}>
    <AvatarFallbackText>SS</AvatarFallbackText>
    <AvatarImage
   style={styles.userImage}
      source={{
        uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      }}
    />
  </Avatar>
    </View>
  )
}

export default ChatRoomHeaderLeft

const styles = StyleSheet.create({
  userImage: {
    height: 35,
    width: 35
  },
})