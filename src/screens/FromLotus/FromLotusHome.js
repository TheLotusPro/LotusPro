import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FromLotusHeader from "../../components/FromLotus/FromLotusHeader";

const FromLotusHome = () => {

  return (
    <View style={{flex: 1}}>
    <ScrollView>
    <FromLotusHeader />

    </ScrollView>
  
    </View>
  );
};

export default FromLotusHome;

const styles = StyleSheet.create({});
