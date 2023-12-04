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
        <List route={route} />
      )}
    </View>
  );
};

const List = ({ route }) => {
  const { subcategory } = route.params;
  const { colors } = useTheme();

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
            // onPress={() => handleSubcategoryPress(item)}
          >
            <View style={styles.subcategoryItem}>
              <Text style={[styles.subcategoryTitle, { color: colors.text }]}>
                {item.title}
              </Text>
              {/* Add content specific to each sub-subcategory */}
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
