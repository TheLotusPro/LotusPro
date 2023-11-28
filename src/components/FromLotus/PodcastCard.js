import { StyleSheet, View, Image , Pressable} from "react-native";
import React from "react";
import PlaceHolder from "../../assets/images/PodcastImages/p1.jpg";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import { useNavigation, useTheme } from "@react-navigation/native";

const PodcastCard = (props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Pressable 
    onPress={() => navigation.navigate('PodcastDetails')}
    style={styles.container}>
      <Image source={props?.podcast?.image} style={styles.thumbnail} />
      <View style={styles.userContainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginLeft: 5 }}>
            <Text style={[styles.title, { color: colors.text }]}>
              {props?.podcast?.title}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.user, { color: "gray" }]}>
                by {props?.podcast?.user}
              </Text>
              
              <Text style={[styles.date, { color: "gray" }]}>
                {" "}
                {props?.podcast?.date}
              </Text>
            </View>
            <View>
              <Text style={[ styles.type, {color: 'green'}]}>{props?.podcast?.type}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default PodcastCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    flexDirection: "row",

    backgroundColor: "#fa807210",

    shadowColor: "gray",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  thumbnail: {
    width: "40%",
    height: 100,
    resizeMode: "cover",
  },
  userContainer: {
    padding: 5,
  },
  date: {
    fontSize: 11,
    fontWeight: "400",
    marginLeft: 10,
  },
  user: {
    fontSize: 13,
  },
  title: {
    fontWeight: 400,
    width: 210,
    fontSize: 14,
  },
  podcast: {
    fontSize: 13,
  },
  type: {
    fontSize: 12
  }
});
