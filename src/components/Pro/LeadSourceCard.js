import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const LeadSourceCard = (props) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Text style={[{ color: colors.text }]}>{props?.leadSource?.title}</Text>
      </View>
    </View>
  );
};

export default LeadSourceCard;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
});
