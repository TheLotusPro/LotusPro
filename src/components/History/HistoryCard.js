import { ScrollView, StyleSheet, View, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import Couch from "../../assets/images/Shop/Couch.jpg";
import { useTheme } from "@react-navigation/native";
const HistoryCard = () => {
  const { colors } = useTheme();

  return (
    <Pressable style={styles.container}>
      <Image source={Couch} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.title, { color: "black" }]}>
          New Couch from Louis Vuittondjlle
        </Text>
        <Text style={[styles.userInfo, { color: "black" }]}>
          by Louis Vuitton
        </Text>
      </View>
    </Pressable>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0ffff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 1.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  info: {
    marginLeft: 10,
  },
  title: {
    width: 200,
    fontWeight: "bold",
  },
  userInfo: {
    fontSize: 13,
  },
});
