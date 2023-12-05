import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import { useTheme } from "@react-navigation/native";

const Reviews = (props) => {
  const {colors} = useTheme();
  return (
    <Pressable style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Avatar style={styles.userImage}>
            <AvatarFallbackText>SS</AvatarFallbackText>
            <AvatarImage size="xl" source={props?.reviews?.image} />
          </Avatar>
          <View>
            <Text style={[styles.username, {color: colors.text}]}>{props?.reviews?.name}</Text>
            <View style={{ marginHorizontal: 5, flexDirection: "row" }}>
              <Icons.StarIcon size={14} color={"gold"} />
              <Icons.StarIcon size={14} color={"gold"} />
              <Icons.StarIcon size={14} color={"gold"} />
              <Icons.StarIcon size={14} color={"gold"} />
              <Icons.StarIcon size={14} color={"gold"} />
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.date}>{props?.reviews?.date}</Text>
        </View>
      </View>

      <Text style={[styles.review, {color: colors.text}]}>{props?.reviews?.review} </Text>
    </Pressable>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    borderRadius: 10,
 
    backgroundColor: "#fa807210",
    alignSelf: "center",

    shadowColor: "#2f4f4f",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  username: {
    marginHorizontal: 5,
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  review: {
    fontSize: 14,
    width: 300,
  },
  userImage: {
    width: 40,
    height: 40,
  },
  date: {
    fontSize: 12,
    color: "gray",
  },
});
