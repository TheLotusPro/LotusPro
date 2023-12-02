import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const EstimatesDetailsFooter = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.messageButton}>
      <Text style={{ fontWeight: "bold", color: "white" }}>
        Preview and Send{" "}
      </Text>
    </TouchableOpacity>
  );
};

export default EstimatesDetailsFooter;

const styles = StyleSheet.create({
  messageButton: {
    backgroundColor: "#33AB5F",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
    width: "90%",
    alignSelf: "center",
  },
});
