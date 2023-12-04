import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import AddItemsSearch from "../../components/Projects/AddItemsSearch";
import { Text } from "@gluestack-ui/themed";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const SubCatalog = ({ route, navigation }) => {
  const { subcategory } = route.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate an API call or any asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 800));

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.load} size="small" color="#33AB5F" />
      ) : (
        <List route={route} />
      )}
    </View>
  );
};

const List = ({ route }) => {
    const { subcategory } = route.params;
    const { colors } = useTheme();
    const navigation = useNavigation();
  
    const handleSubSubcategoryPress = (subSubcategory) => {
        if (subSubcategory.items && subSubcategory.items.length > 0) {
          navigation.navigate('ItemPrice', { subcategory: subSubcategory });
        } else {
          // Handle the case when there are no items for sale
          console.log('No items for sale in:', subSubcategory.title);
        }
      };
      
  
    return (
      <View>
        <AddItemsSearch />
        <Text style={[styles.title, { color: colors.text }]}>
          {subcategory.title}
        </Text>
  
        {/* Render subcategories */}
        <FlatList
          data={subcategory.subCategories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.options}
              onPress={() => handleSubSubcategoryPress(item)}
            >
              <View style={styles.subcategoryItem}>
                <Text style={[styles.subcategoryTitle, { color: colors.text }]}>
                  {item.title}
                </Text>
                {/* Add chevron icon if there are items for sale */}
                {item.hasItemsForSale && (
                  <Icons.ChevronRightIcon style={{ color: colors.text }} size={25} />
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
    marginHorizontal: 10,
  },
  subcategoryItem: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subcategoryTitle: {},
  load: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 299,
  },
  options: {
    margin: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
});

export default SubCatalog;
