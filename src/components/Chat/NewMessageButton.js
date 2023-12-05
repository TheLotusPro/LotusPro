import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NewMessageButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewMessage")}
      style={styles.messageButton}
    >
      <Text style={{ fontWeight: "bold", color: "white" }}>Send Message</Text>
    </TouchableOpacity>
  );
};

export default NewMessageButton;

const styles = StyleSheet.create({
  messageButton: {
    backgroundColor: "#33AB5F",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    width: "95%",
    justifyContent: 'center',
    alignSelf: 'center'
    

  },
});
