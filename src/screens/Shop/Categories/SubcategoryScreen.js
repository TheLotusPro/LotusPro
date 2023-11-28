import React from 'react';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

const SubcategoryScreen = ({ route }) => {
  const { subcategory } = route.params;
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>{subcategory.title}</Text>
    </View>
  );
};

export default SubcategoryScreen;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
margin: 20
  },
});
