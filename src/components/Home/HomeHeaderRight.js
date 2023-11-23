import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const HomeHeaderRight = () => {
  const navigation = useNavigation();


  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('Notifications')}
    style={styles.container}>
      <Icons.BellAlertIcon size={30} color={"#fa8072"} />
    </TouchableOpacity>
  );
};

export default HomeHeaderRight;

const styles = StyleSheet.create({
    container: {
        marginRight: 5
    }
});
