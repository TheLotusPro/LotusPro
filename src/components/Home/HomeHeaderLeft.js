import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {useNavigation, useTheme} from '@react-navigation/native';

const HomeHeaderLeft = () => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>
          <MaterialIcons name="menu-open" size={34} color={colors.text}/>
        </Text>
      </TouchableOpacity>
      <View style={{marginLeft: 5}}>
        <Text style={[{color: colors.text}]}>Good Day</Text>
        <Text style={[styles.username, {color: colors.text}]}>Sam!</Text>
      </View>
    </View>
  );
};

export default HomeHeaderLeft;

const styles = StyleSheet.create({
  username: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
