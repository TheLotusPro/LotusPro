import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import TaskCard from "../../components/Projects/TaskCard";

const AddTask = () => {
  return (
    <View>
      <TaskCard />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({});
