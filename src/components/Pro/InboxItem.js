import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation, useTheme } from "@react-navigation/native";
import { ColorSpace } from "react-native-reanimated";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const InboxItem = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={() => navigation.navigate("InboxDetails")}
      style={styles.container}
    >
      <View style={styles.inboxItem}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Avatar size="sm">
              <AvatarFallbackText>SS</AvatarFallbackText>
              <AvatarImage
                size="xl"
                source={{
                  uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                }}
              />
            </Avatar>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={[styles.title, { color: colors.text }]}>
              Construction in Park City
            </Text>
            <Text style={[styles.username, { color: colors.text }]}>
              Sam Jon
            </Text>
            <Text style={[ styles.message, { color: colors.text }]}>Hi Patty,</Text>
          </View>
        </View>
        <Text style={[styles.time, { color: "gray" }]}>Dec 10, 2023</Text>
      </View>
    </Pressable>
  );
};

export default InboxItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: 'gray',
   borderBottomLeftRadius: 55
  },
  inboxItem: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontWeight: "500",
    marginBottom: 5,
    fontSize: 15,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    width: 220,
    fontWeight: "bold",
    marginBottom: 5,
  },
  time: {
    fontSize: 12,
    fontWeight: "bold",
  },
  message: {
    marginBottom: 5,
  }
});
