import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import LotusCarousel from "./LotusCarousel";

const FromLotusHeader = () => {
    const {colors} = useTheme();

  return (
    <View>

  
    <View style={styles.container}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Icons.ArrowTrendingUpIcon size={25} color={"#33AB5F"} />

      <Text style={[styles.trendingTitle, { color: "gray" }]}>
        Latest from Lotus
      </Text>
    </View>
  </View>
  <LotusCarousel />
  </View>
  );
};

export default FromLotusHeader;

const styles = StyleSheet.create({
    container: {
        margin: 20,
      },
      trendingTitle: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 5,
      },
});
