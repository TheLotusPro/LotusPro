import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const ChatRoomItem = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ChatScreen")}
      style={styles.container}
    >
      <View>
        <Avatar style={styles.userImage}>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            style={styles.userImage}
            source={{
              uri: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
        </Avatar>
      </View>

      <View style={{ marginHorizontal: 5 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={[styles.username, { color: "#33AB5F" }]}>
            Black Diamond
          </Text>
          <Text style={[styles.time]}>1 min</Text>
        </View>

        <Text style={[styles.message, { color: colors.text }]}>
          Yes we will be able to fulfill your request by....
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRoomItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#fa807210",
    padding: 10,
    borderRadius: 10,
  },
  userImage: {
    width: 50,
    height: 50,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  message: {
    width: width - 90,
    fontWeight: "400",
    fontSize: 14,
  },
  time: {
    fontWeight: "500",
    fontSize: 12,
    color: "gray",
  },
});
