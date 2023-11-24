import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ProHeaderButtons = () => {
  return (
    <View style={styles.container}>

    <TouchableOpacity>
    <Text>ProHeaderButtons</Text>
    </TouchableOpacity>


    </View>
  );
};

export default ProHeaderButtons;

const styles = StyleSheet.create({
    container: {
        margin: 20
    }
});
