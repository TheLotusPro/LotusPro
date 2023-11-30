import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import DocumentPicker from 'react-native-document-picker'

const AddFiles = () => {
  return (
    <View>
      <SearchFiles />
      <Files />
    </View>
  );
};

const SearchFiles = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.containerSearch}>
      <TouchableOpacity style={[styles.searchContainer]}>
        <View style={{ margin: 8, flexDirection: "row", alignItems: "center" }}>
          <Icons.MagnifyingGlassIcon size={20} color={"gray"} />
          <Text style={[{ color: "gray" }]}>Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Files = () => {
  return (
    <View>
  
      <Text>
        Files
      </Text>
    </View>
  )
}

export default AddFiles;

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
  containerSearch: {
    margin: 20,
    marginLeft: 19,
  },
});
