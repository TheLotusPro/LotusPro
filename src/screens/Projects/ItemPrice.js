import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ItemPrice = ({ route }) => {
  const { subcategory } = route.params;
  // Use subcategory.items directly
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        {subcategory && subcategory.title
          ? subcategory.title
          : "Unknown Subcategory"}
      </Text>

      {subcategory && subcategory.items && subcategory.items.length > 0 ? (
        <FlatList
          data={subcategory.items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No items found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ItemPrice;
