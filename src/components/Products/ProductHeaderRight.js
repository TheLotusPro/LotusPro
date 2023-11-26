import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from "react";
import { useNavigation, useTheme } from '@react-navigation/native';
import * as Icons from "react-native-heroicons/solid";

const ProductHeaderRight = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };


  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate("ShoppingCart")}
    style={[styles.backButton]}>
    <View style={{ padding: 3 }}>
      <Icons.ShoppingCartIcon style={{ color: '#33AB5F' }} size={25} />
    </View>
  </TouchableOpacity>
  );
};

export default ProductHeaderRight;

const styles = StyleSheet.create({});
