import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Text } from "@gluestack-ui/themed";

const SearchProductsHome = (props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback style={styles.imageContainer}>
        <View style={{ flexDirection: "column" }}>
          <Image source={props?.shopHomeData?.image} style={styles.image} />
          <Text style={[styles.imageTitle, { color: "black" }]}>
            {props?.shopHomeData?.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SearchProductsHome;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#e0ffff",
    borderRadius: 10,
    height: 135,
    marginBottom: 20,
    shadowColor: "gray",
    shadowOpacity: 1.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  image: {
    height: 100,
    width: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
