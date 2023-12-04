import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SubCatalog = ({ route }) => {
  const { subcategory } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subcategory.title}</Text>

      {/* Render subcategories */}
      {subcategory.subCategories.map((subSubcategory) => (
        <View key={subSubcategory.id} style={styles.subcategoryItem}>
          <Text style={styles.subcategoryTitle}>{subSubcategory.title}</Text>
          {/* Add content specific to each sub-subcategory */}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subcategoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SubCatalog;
