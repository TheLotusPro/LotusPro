import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const ProfessionalsHeaderRight = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
      onPress={() => navigation.navigate("ShoppingCart")}
       style={{marginHorizontal: 5}}>
        <Icons.ShoppingBagIcon size={25} color={"#33AB5F"} />
      </TouchableOpacity>

    </View>
  );
};

export default ProfessionalsHeaderRight;

const styles = StyleSheet.create({});
