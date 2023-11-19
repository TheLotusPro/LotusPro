import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import PlaceHolder from "../../assets/images/HomeReno.jpeg";

const HomeDesignCard = () => {
  const { colors } = useTheme();

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity style={styles.container}>
          <Image style={styles.image} source={PlaceHolder} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Architects & Building Designs</Text>
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
    width: "48%",
    borderRadius: 10,
    height: 200,
    shadowColor: "gray",
    shadowOpacity: 1.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  image: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  title: {
    fontWeight: "500",
    color: "black",
    fontSize: 14,
  },
});
