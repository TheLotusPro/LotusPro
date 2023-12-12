import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const ProHeaderRight = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Inbox")}>
      <Icons.InboxIcon size={25} color={"#33AB5F"} />
    </TouchableOpacity>
  );
};

export default ProHeaderRight;

const styles = StyleSheet.create({});
