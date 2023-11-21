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

const StoriesSearch = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={[styles.searchContainer]}>
        <View style={{ margin: 8, flexDirection: "row", alignItems: "center" }}>
          <Icons.MagnifyingGlassIcon size={20} color={"gray"} />
          <TextInput
            placeholder={"Search Talks...."}
            autoCapitalize="none"
            placeholderTextColor={"grey"}
            style={[styles.input, { color: colors.text }]}
          />
        </View>
      </View>
    </View>
  );
};

export default StoriesSearch;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginLeft: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
});
