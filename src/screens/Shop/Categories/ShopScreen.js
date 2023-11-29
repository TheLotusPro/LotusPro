import React from "react";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import ShopCategoryHeaderBar from "../../../components/Shop/Categories/ShopCategoryHeaderBar";

const ShopScreen = ({ route }) => {
  const { subcategory } = route.params;
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Header route={route} />
    </View>
  );
};

const Header = ({ route }) => {
  const { subcategory } = route.params;
  const { colors } = useTheme();

  return (
    <View style={styles.containerHeader}>
      <ShopCategoryHeaderBar />
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: colors.text }]}>
          {subcategory.title}
        </Text>
      </View>
    </View>
  );
};

const Products = () => {};
export default ShopScreen;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {},
  titleContainer: {
    margin: 20,
  },
});
