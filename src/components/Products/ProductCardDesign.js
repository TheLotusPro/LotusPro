import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductCardDesign = ({item}) => {
    const { width } = Dimensions.get("window");

  return (
    <View style={{
        height: 400,
        // width: width,
   
    }}>
      <Text>{item.Description}</Text>
    </View>
  );
};

export default ProductCardDesign;

const styles = StyleSheet.create({});
