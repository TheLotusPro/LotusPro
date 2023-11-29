import { StyleSheet, View, TouchableOpacity,Image } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import { useTheme, useNavigation } from "@react-navigation/native";
import PlaceHolder from '../../assets/images/HomeDesign&Remodel/KitchenBath.jpeg'

const ShopCategories = ({ shop }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  console.log('Category:', shop); // Add this line

  const handlePress = () => {
    // Check if shop exists and has a title property
    if (shop && shop.title) {
      // If the category exists and has subcategories, navigate to a new instance of ShopCategoryScreen
      // with the subcategories as the new data
      if (shop.subcategories && shop.subcategories.length > 0) {
        navigation.navigate('ShopCategory', { category: shop });  // Pass the entire category object
      }
    }
  };
  
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
    <Image source={shop?.image} style={styles.headerImage}/>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: 'center'
        }}
      >
        <Text style={[styles.title, { color: colors.text }]}>{shop?.title}</Text>
        {shop?.subcategories && shop.subcategories.length > 0 && (
          <Icons.ChevronRightIcon style={{ color: colors.text }} size={25} />
        )}
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
  headerImage: {
    width: "100%",
    height: 70,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
});
