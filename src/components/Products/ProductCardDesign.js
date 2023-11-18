import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const ProductCardDesign = ({item}) => {
    const { width } = Dimensions.get("window");
    const { colors } = useTheme();


  return (
    <View style={{
        maxHeight: 400,
   
    }}>
      <Text style={[styles.description, {color: "gray"}]}>{item.Description}</Text>
    </View>
  );
};

export default ProductCardDesign;

const styles = StyleSheet.create({
    description: {
        fontWeight: 'bold'
    }
});
