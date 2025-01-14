import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme, useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const ShopHeaderRight = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate("ShoppingCart")} style={styles.container}>
      <Icons.ShoppingBagIcon style={{ color: "#33AB5F" }} size={25} />
    </TouchableOpacity>
  );
};

export default ShopHeaderRight;

const styles = StyleSheet.create({
  container: {
    marginRight: 5
}
});
