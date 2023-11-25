import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import PlaceHolder from "../../assets/images/HomeDesign&Remodel/HomeBuilding.jpeg";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const LatestTalksCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("TalksPostScreen")}>
      <View style={styles.container}>
        <Image source={props?.latestTalk?.image} style={styles.image} />
        <View style={styles.iconContainer}>
          <Text style={styles.comment}>{props?.latestTalk?.commentCount} </Text>
          <Icons.ChatBubbleBottomCenterIcon
            style={{ color: "white" }}
            size={20}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LatestTalksCard;

const styles = StyleSheet.create({
  image: {
    height: 140,
    width: 200,
    borderRadius: 10,
  },
  container: {
    backgroundColor: "#e0ffff",
    height: 140,
    width: 200,
    alignItems: "flex-end",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    margin: 5
  },
  iconContainer: {
    flexDirection: "row",
    padding: 5,
    position: "absolute",
  },
  comment: {
    color: "white",
  },
});
