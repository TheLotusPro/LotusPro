import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const WriteReviewButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewReview")}
      style={styles.messageButton}
    >
      <Text style={{ fontWeight: "bold", color: "white" }}>Write a Review</Text>
    </TouchableOpacity>
  );
};

export default WriteReviewButton;

const styles = StyleSheet.create({
  messageButton: {
    backgroundColor: "#fa8072",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 5,
  },
});
