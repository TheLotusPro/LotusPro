import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ItemPrice = ({ route }) => {
  const { subcategory } = route.params;
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>{subcategory.title}</Text>

      {subcategory.subCategories.map((subSubcategory) => (
        <View key={subSubcategory.id} style={styles.subcategoryItem}>
          <Text style={[styles.subcategoryTitle, { color: colors.text }]}>
            {subSubcategory.title}
          </Text>

          {subSubcategory.items && subSubcategory.items.length > 0 && (
            <FlatList
              data={subSubcategory.items}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                </View>
              )}
            />
          )}
        </View>
      ))}
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
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subcategoryItem: {
    marginBottom: 20,
  },
  subcategoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ItemPrice;
