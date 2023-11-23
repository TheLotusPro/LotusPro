import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import { useNavigation, useTheme } from "@react-navigation/native";

const FollowersCard = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar size="md">
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            size="xl"
            source={{
              uri: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=2968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
        </Avatar>
        <View style={{ marginLeft: 10 }}>
          <Text style={[styles.user, { color: colors.text }]}>
            Matthew Contractors
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FollowersCard;

const styles = StyleSheet.create({
  user: {
    fontWeight: "bold",
    width: 190,
  },
  followText: {
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 15,
  },
  followButton: {
    backgroundColor: "dodgerblue",
    padding: 5,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
  },
});
