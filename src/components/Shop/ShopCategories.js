import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";

const ShopCategories = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: 'center'
        }}
      >
        <Text style={styles.title}>{props?.shop?.title}</Text>
        <Icons.ChevronRightIcon style={{ color: "white" }} size={25} />
      </View>
    </TouchableOpacity>
  );
};

export default ShopCategories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#33AB5F90",
    margin: 15,
    borderRadius: 10,
    marginBottom: 1
  },
  title: {
    color: "white",
  },
});
