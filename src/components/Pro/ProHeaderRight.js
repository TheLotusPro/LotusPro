import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const ProHeaderRight = () => {
  return (
    <TouchableOpacity>
       <Icons.InboxIcon size={30} color={"#33AB5F"} />
    </TouchableOpacity>
  );
};

export default ProHeaderRight;

const styles = StyleSheet.create({});
