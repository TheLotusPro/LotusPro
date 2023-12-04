import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme, useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";

const CategoryList = ({ categoryItems }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handlePress = () => {
    // Check if shop exists and has a title property
    if (categoryItems && categoryItems.title) {
      // If the category exists and has subcategories, navigate to a new instance of ShopCategoryScreen
      // with the subcategories as the new data
      if (categoryItems.subItems && categoryItems.subItems.length > 0) {
        navigation.navigate("Catalog", { category: categoryItems }); // Pass the entire category object
      }
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.options}>
        <Text style={[{ color: colors.text }]}>{categoryItems.title}</Text>
        {categoryItems.subItems && categoryItems.subItems.length > 0 && (
          <Icons.ChevronRightIcon style={{ color: colors.text }} size={25} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
  options: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
