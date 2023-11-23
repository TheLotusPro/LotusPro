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

const FollowingCard = () => {
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
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            }}
          />
        </Avatar>
        <View style={{ marginLeft: 10 }}>
          <Text style={[styles.user, { color: colors.text }]}>
            Michael Jordan
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followText}>Following</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FollowingCard;

const styles = StyleSheet.create({
  user: {
    fontWeight: "bold",
    width: 190
    
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
    backgroundColor: "gray",
    padding: 5,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
  },
});
