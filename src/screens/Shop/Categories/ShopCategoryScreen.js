import React from "react";
import { useTheme } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const ShopCategoryScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const { colors } = useTheme();

  const handleSubcategoryPress = (subcategory) => {
    // Handle navigation to a specific subcategory or perform other actions
    Example: navigation.navigate("SubcategoryScreen", { subcategory });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        {category.title}
      </Text>
      <FlatList
        data={category.subcategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSubcategoryPress(item)}>
            <View style={styles.subcategoryItem}>
              <Text style={{ color: colors.text }}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ShopCategoryScreen;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    padding: 10
  },
  container: {
    margin: 5,
    flex: 1
  },
  subcategoryItem: {
    backgroundColor: "#33AB5F10",
    margin: 15,
    borderRadius: 10,
    marginBottom: 1, 
    padding: 20
  },
});
