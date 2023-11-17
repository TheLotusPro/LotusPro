import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";

const HomeHeaderRight = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icons.BellAlertIcon size={30} color={"dodgerblue"} />
    </TouchableOpacity>
  );
};

export default HomeHeaderRight;

const styles = StyleSheet.create({
    container: {
        marginRight: 5
    }
});
