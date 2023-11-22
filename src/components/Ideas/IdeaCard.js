import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Text } from "@gluestack-ui/themed";

const IdeaCard = (props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback style={styles.imageContainer}>
        <View style={{ flexDirection: "column" }}>
          <Image source={props?.ideas?.image} style={styles.image} />
          <Text style={[styles.imageTitle, { color: "black" }]}>
            {props?.ideas?.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default IdeaCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0ffff",
    width: "100%",
    borderRadius: 5,
    height: 160,
    shadowColor: "#2f4f4f",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  imageContainer: {
    marginTop: 15,
    backgroundColor: "white",

    borderRadius: 10,
  },
  imageTitle: {
    fontWeight: "bold",
    fontSize: 13,
    alignSelf: "center",
    marginTop: 5,
    color: "white",
  },
});
