import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";

const ShoppingCart = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TouchableOpacity style={{ width: 50, marginLeft: 20 }}>
          <Icons.ShoppingBagIcon style={{ color: "#fa8072" }} size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>ShoppingCart</Text>
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({});
