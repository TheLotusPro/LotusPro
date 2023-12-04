import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AddItemsSearch from "../../components/Projects/AddItemsSearch";
import { Text } from "@gluestack-ui/themed";
import { useNavigation, useTheme } from "@react-navigation/native";

const Catalog = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const { category } = route.params;
  const { colors } = useTheme();

  useEffect(() => {
    // Simulating data loading delay
    const fetchData = async () => {
      // Simulate an API call or any asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Set loading to false after 2 seconds to hide the activity indicator
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.load} size="small" color="#33AB5F" />
      ) : (
        <CatalogList route={route} />
      )}
    </View>
  );
};

const CatalogList = ({ route }) => {
  const { category } = route.params;
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleSubcategoryPress = (subcategory) => {
    // Handle navigation to a specific subcategory or perform other actions
    Example:  navigation.navigate('SubCatalog', { subcategory });
  };

  return (
    <View>
      <AddItemsSearch />
      <Text style={[styles.headerTitle, { color: colors.text }]}>
        {category.title}
      </Text>

      <FlatList
        data={category.subItems}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.options}
            onPress={() => handleSubcategoryPress(item)}
          >
            <View style={styles.subcategoryItem}>
              <Text style={[styles.title, { color: colors.text }]}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  load: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 299,
  },
  subcategoryItem: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  options: {
    margin: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
    marginHorizontal: 10,
  },
});

export default Catalog;
