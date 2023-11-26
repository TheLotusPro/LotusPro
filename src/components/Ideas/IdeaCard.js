import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Text } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";

const IdeaCard = (props) => {

  const {colors } = useTheme();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback style={styles.imageContainer}>
        <View style={{ flexDirection: "column" }}>
          <Image source={props?.ideas?.image} style={styles.image} />
          <Text style={[styles.imageTitle, { color: colors.text }]}>
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
    backgroundColor: "#fa807210",
    width: "90%",
    borderRadius: 5,
    height: 160,
    shadowColor: "gray",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
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
    marginTop: 10,
    color: "white",
  },
});
