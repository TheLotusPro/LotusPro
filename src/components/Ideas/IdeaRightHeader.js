import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const IdeaRightHeader = () => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('SearchIdeas')}
    >
      <Icons.MagnifyingGlassIcon style={{ color: "#33AB5F" }} size={30} />
    </TouchableOpacity>
  );
};

export default IdeaRightHeader;

const styles = StyleSheet.create({});
