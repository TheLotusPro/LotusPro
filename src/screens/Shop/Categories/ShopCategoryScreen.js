import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const ShopCategoryScreen = ({ route }) => {
  const { category } = route.params;
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: colors.text}]}>{category.title}</Text>
    </View>
  );
};

export default ShopCategoryScreen;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        margin: 10
    }
})
