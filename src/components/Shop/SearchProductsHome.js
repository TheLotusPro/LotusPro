import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { Text } from "@gluestack-ui/themed";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation, useTheme } from "@react-navigation/native";

const SearchProductsHome = ({shop}) => {
  
  const navigation = useNavigation();

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
  


  const {colors} = useTheme();
  return (
    <View 

    style={styles.container}>
      <TouchableWithoutFeedback
      onPress={handlePress}
       style={styles.imageContainer}>
        <View style={{ flexDirection: "column" }}>
          <Image source={shop?.image} style={styles.image} />
          <Text style={[styles.imageTitle, { color: colors.text  }]}>
            {shop?.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SearchProductsHome;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#fa807210",
    borderRadius: 10,
    height: 135,
    marginBottom: 20,
    shadowColor: "gray",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  image: {
    height: 100,
    width: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  imageContainer: {
    marginTop: 15,
    backgroundColor: "white",

    borderRadius: 10,
  },
  imageTitle: {
    fontWeight: "bold",
    fontSize: 13,
    alignSelf: "center",
    marginTop: 5,
    color: "white",
  },
});
