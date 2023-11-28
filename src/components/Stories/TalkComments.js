import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const TalkComments = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
        <Avatar style={styles.userImage}>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            style={styles.userImage}
            source={{
              uri: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
        </Avatar>
          <View style={{ marginLeft: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.username, { color: colors.text }]}>
                James Win
              </Text>
              <Text style={[styles.time, { color: "gray" }]}>2 min go</Text>
            </View>

            <Text style={[styles.comment, { color: colors.text }]}>
              This is a test comment. I want to see the width of the comment
            </Text>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
        <Icons.HeartIcon style={{ color: "gray" }} size={20} />
          <Text style={[{ color: colors.text }]}>0</Text>
        </View>
      </View>

      {/* <Text style={[{color: colors.text}]}>This is a test comment. I want to see the width of the comment</Text> */}
    </View>
  );
};

export default TalkComments;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  comment: {
    width: 255,
  },
  time: {
    fontSize: 13,
    marginLeft: 15,
  },
  username: {
    fontWeight: "bold",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
