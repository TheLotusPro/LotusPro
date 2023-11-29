import React from "react";
import { useTheme } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import {Text} from '@gluestack-ui/themed'
import PlaceHolder from '../../../assets/images/HomeDesign&Remodel/KitchenBath.jpeg'


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
    <View style={styles.container}>
     <HeaderSale />
    <Image source={category.image} style={styles.headerImage}/>
      <Text style={[styles.headerTitle, { color: colors.text }]}>
        {category.title}
      </Text>
      <FlatList
        data={category.subcategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSubcategoryPress(item)}>
            <View style={styles.subcategoryItem}>
              <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
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
    padding: 15
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 20
  },
  headerImage: {
    width: "100%",
    height: 100,
    borderRadius: 10
  },
  headerSaleContainer: {
    alignItems: "center",
    backgroundColor: "#33AB5F90",
    marginBottom: 5
  },
});
