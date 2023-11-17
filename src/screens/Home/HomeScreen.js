import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeHeaderButtons from "../../components/Home/HomeHeaderButtons";
import FindProfessionals from "../../components/Home/FindProfessionals";

const HomeScreen = () => {
  return (
    <View>
      <HomeHeaderButtons />
      <FindProfessionals />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
