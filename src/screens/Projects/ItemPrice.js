import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

const ItemPrice = ({ route }) => {
  const { subcategory } = route.params;
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Add any additional logic here to calculate the total price
    // For example, you can sum the prices of selected items
  }, []);

  const handleItemPress = (item) => {
    // Update the price in your state or context
    setTotalPrice((prevTotal) => prevTotal + parseFloat(item.price));

    // Navigate back to EstimatesDetails screen and pass the selected item
    navigation.navigate('EstimatesDetails', { selectedItem: item });
  };
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        {subcategory.title}
      </Text>

      {/* Display items */}
      {subcategory.items.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handleItemPress(item)}
          style={styles.itemContainer}
        >
          <Text style={[styles.itemTitle, { color: colors.text }]}>
            {item.title}
          </Text>
          <Text style={[styles.itemPrice, { color: colors.text }]}>
            {item.price}
          </Text>
        </TouchableOpacity>
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
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
