import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";

import TaskCard from "../../components/Projects/TaskCard";
import {
  Text
} from "@gluestack-ui/themed";

const AddTask = () => {
  return (
    <View>
      <Header />
      <TaskCard />
    </View>
  );
};

const Header = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
     onPress={() => navigation.navigate('NewTask')}
    style={styles.button}>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <Icons.PlusCircleIcon size={25} style={styles.options} />
        <Text style={styles.options}> New</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#33AB5F",
    width: 120,
    padding: 5,
    margin: 15,
    marginBottom: 5,
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  options: {
    color: "white",
  },

});
