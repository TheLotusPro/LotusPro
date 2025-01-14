import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTheme, useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const HeaderSearch = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={[styles.searchContainer]}
      >
        <View style={{ margin: 8, flexDirection: "row", alignItems: "center" }}>
          <Icons.MagnifyingGlassIcon size={20} color={"gray"} />
          <Text style={[{ color: "gray" }]}>Search</Text>
        </View>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Icons.CameraIcon size={20} color={"gray"} />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginLeft: 15 }}
        onPress={() => navigation.navigate("ShoppingCart")}
      >
        <Icons.ShoppingBagIcon size={25} color={"#33AB5F"} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginLeft: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainer: {
    width: "90%",
    borderColor: "#a9a9a950",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    marginLeft: 3,
  },
});
