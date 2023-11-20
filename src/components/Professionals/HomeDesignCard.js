import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import PlaceHolder from "../../assets/images/HomeReno.jpeg";

const HomeDesignCard = (props) => {
  const { colors } = useTheme();

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 5,
          marginBottom: 5,
        }}
      >
        <TouchableOpacity style={styles.container}>
          <Image style={styles.image} source={props?.homeDesign?.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props?.homeDesign?.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeDesignCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0ffff",
    width: "100%",
    borderRadius: 5,
    height: 200,
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
    height: 140,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textContainer: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  title: {
    fontWeight: "500",
    color: "black",
    fontSize: 13,
  },
});
