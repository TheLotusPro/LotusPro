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
import ShopCategories from "../../components/Shop/ShopCategories";
import shop from "../../assets/data/shop";
import ShopHeaderCarousel from "../../components/Shop/ShopHeaderCarousel";
import PopularProducts from "../../components/Products/PopularProducts";

const ShopHome = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <HeaderSale />
      <ScrollView>
        <ShopHeaderCarousel />
        {shop.map((item, index) => (
          <ShopCategories key={index.toString()} shop={item} />
        ))}
        <PopularProducts />
      </ScrollView>
    </View>
  );
};

const HeaderSale = () => {
  const { colors } = useTheme();

  return (
    <View>
      <TouchableOpacity style={styles.headerSaleContainer}>
        <Text style={{ color: "white", fontSize: 12 }}>
          FREE shipping on all orders over $50.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShopHome;

const styles = StyleSheet.create({
  headerSaleContainer: {
    alignItems: "center",
    backgroundColor: "#33AB5F90",
  },
});
