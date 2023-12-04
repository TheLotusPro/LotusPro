import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme, useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";

const AddItemsSearch = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={[styles.searchContainer]}>
        <View style={{ margin: 8, flexDirection: "row", alignItems: "center" }}>
          <Icons.MagnifyingGlassIcon size={20} color={"gray"} />
          <Text style={[{ color: "gray" }]}>Search Items</Text>
        </View>
      </View>
    </View>
  );
};

export default AddItemsSearch;

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
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
  container: {
    margin: 20,
    marginLeft: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
