import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";

const ChatRoomHeaderRight = () => {
  return (
    <TouchableOpacity style={styles.container}>
    <Icons.PencilSquareIcon size={30} color={"#33AB5F"} />
  </TouchableOpacity>
  );
};

export default ChatRoomHeaderRight;

const styles = StyleSheet.create({
  container: {
    marginRight: 5
}
});
