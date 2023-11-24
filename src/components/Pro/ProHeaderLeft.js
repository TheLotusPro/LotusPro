import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const ProHeaderLeft = () => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={[styles.title, {color: colors.text}]}>Lotus Pro</Text>
    </View>
  );
};

export default ProHeaderLeft;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 22
    }
});
