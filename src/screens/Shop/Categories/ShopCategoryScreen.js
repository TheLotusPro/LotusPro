import React from "react";
import { useTheme } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Text } from "@gluestack-ui/themed";
import PlaceHolder from "../../../assets/images/HomeDesign&Remodel/KitchenBath.jpeg";

const ScreenWidth = Dimensions.get("window").width;

const ShopCategoryScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const { colors } = useTheme();

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

  const handleSubcategoryPress = (subcategory) => {
    // Handle navigation to a specific subcategory or perform other actions
    Example: navigation.navigate("SubcategoryScreen", { subcategory });
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderSale />
      <Image source={category.image} style={styles.headerImage} />

      <View style={styles.container}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          {category.title}
        </Text>
        <FlatList
          data={category.subcategories}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSubcategoryPress(item)}>
              <View style={styles.subcategoryItem}>
                <Text style={[styles.title, { color: colors.text }]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ShopCategoryScreen;

const styles = StyleSheet.create({
  title: {},
  container: {
    margin: 5,
    flex: 1,
  },
  subcategoryItem: {
    backgroundColor: "#33AB5F10",
    margin: 15,
    borderRadius: 10,
    marginBottom: 1,
    padding: 15,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 10,
  },
  headerImage: {
    width: ScreenWidth,
    height: 100,
  },
  headerSaleContainer: {
    alignItems: "center",
    backgroundColor: "#33AB5F90",
  },
});
