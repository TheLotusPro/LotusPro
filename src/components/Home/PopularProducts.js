import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Design from "../../assets/images/BathroomRemodeling.jpeg";
import { Text } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";

const PopularProducts = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={Design} style={styles.image} />
      </View>
      <View style={{ margin: 5, marginTop: 5, padding: 10 }}>
        <Text style={[styles.title, { color: 'white' }]}>
          Victorian Villa by Absolute Architecture
        </Text>
        <Text style={[styles.user, { color: 'white' }]}>
          by James Architecture Group
        </Text>
      </View>
    </View>
  );
};

export default PopularProducts;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#708090",
    borderRadius: 10,
    maxHeight: 350,
    shadowColor: "gray",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
  },
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
  },
  user: {
    fontWeight: "bold",
  },
});
