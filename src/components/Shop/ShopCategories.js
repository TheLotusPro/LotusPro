import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";

const ShopCategories = (props) => {
  const {colors} = useTheme();
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
        <Text style={[styles.title, {color: colors.text}]}>{props?.shop?.title}</Text>
        <Icons.ChevronRightIcon style={{ color: colors.text }} size={25} />
      </View>
    </TouchableOpacity>
  );
};

export default ShopCategories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#33AB5F10",
    margin: 15,
    borderRadius: 10,
    marginBottom: 1
  },
  title: {
   
  },
});
