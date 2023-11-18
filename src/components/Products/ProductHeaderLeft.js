import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";

const ProductHeaderLeft = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={goBack} style={[styles.backButton]}>
      <View style={{ padding: 3 }}>
        <Icons.ArrowLongLeftIcon style={{ color: '#fa8072'  }} size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductHeaderLeft;

const styles = StyleSheet.create({});
