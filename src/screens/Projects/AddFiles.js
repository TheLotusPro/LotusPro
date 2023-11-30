import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import DocumentPicker from "react-native-document-picker";
import { BottomSheet } from "react-native-btr";

const AddFiles = () => {
  return (
    <View>
      <SearchFiles />
      <Filter />
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

const Filter = () => {
  const { colors } = useTheme();
  const [selectedType, setSelectedType] = useState("All");
  const [visible, setVisible] = useState(false);

  const handleRoleSelection = (type) => {
    setSelectedType(type);
    toggleBottomSheet();
  };

  const toggleBottomSheet = () => {
    setVisible((_visible) => !_visible);
  };

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity onPress={toggleBottomSheet} style={styles.button}>
        <Text style={[styles.filterText, { color: colors.text }]}>
          File Type: {selectedType}
        </Text>
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomSheet}
        onBackdropPress={toggleBottomSheet}
      >
        <View
          style={[
            styles.bottomSheetContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <View style={{ marginBottom: 30 }}>
            <Text style={{ fontSize: 16, color: colors.text }}>
              Select Type *
            </Text>
          </View>

          <TouchableOpacity
            style={{ marginBottom: 30 }}
            onPress={() => handleRoleSelection("All")}
          >
            <Text style={[styles.bottomText, { color: colors.text }]}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginBottom: 30 }}
            onPress={() => handleRoleSelection("Folder")}
          >
            <Text style={[styles.bottomText, { color: colors.text }]}>
              Folder
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleRoleSelection("png")}>
            <Text style={[styles.bottomText, { color: colors.text }]}>png</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

const Files = () => {
  const { colors } = useTheme();
  return (
    <View style={{ margin: 10 }}>
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <Icons.PaperClipIcon size={20} color={"gray"} />
        <Text style={[{ color: "gray" }]}>Add Images, Videos or Files</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  filterContainer: {
    margin: 20,
    flexDirection: "row",
  },
  button: {
    borderColor: "green",
    borderWidth: 1,
    maxWidth: 290,
    alignItems: "center",
    padding: 10,
  },
  filterText: {
    fontWeight: "500",
  },
  titleMenu: {
    fontWeight: "bold",
  },
  bottomSheetContainer: {
    height: 250,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
});
