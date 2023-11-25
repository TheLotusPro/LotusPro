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

        <View style={{ marginHorizontal: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.user}>Black Diamond</Text>
            <View style={{ marginHorizontal: 5 }}>
              <Icons.CheckBadgeIcon style={{ color: "dodgerblue" }} size={18} />
            </View>
          </View>

          <View>
            <Text style={styles.time}>20 min ago</Text>
            <View style={styles.commentContainer}>
              <Text style={[ styles.comment, { color: colors.text }]}>
                Wow that looks amazing. Glad to have worked with you and the
                team.{" "}
              </Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Icons.HandThumbUpIcon style={{ color: "gray" }} size={20} />
              </TouchableOpacity>

              <TouchableOpacity style={{ marginHorizontal: 20 }}>
                <Icons.FlagIcon style={{ color: "gray" }} size={20} />
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.like}>1 Like</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TalkComments;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  user: {
    fontWeight: "bold",
  },
  time: {
    color: "gray",
    fontSize: 12,
  },
  commentContainer: {
    marginTop: 5,
  },
  iconContainer: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  like: {
    fontSize: 12,
    color: "gray",
  },
  comment: {
    width: 300
  }
});
