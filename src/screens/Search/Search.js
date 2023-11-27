import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme, useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const Search = ({ navigation }) => {
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return (
          <Pressable
            onPress={() => navigation.navigate("Search")}
            style={[styles.searchContainer]}
          >
            <View
              style={{ margin: 8, flexDirection: "row", alignItems: "center" }}
            >
              <Icons.MagnifyingGlassIcon size={20} color={"gray"} />
              <TextInput
                placeholder={"Search"}
                autoCapitalize="none"
                autoFocus
                placeholderTextColor={"grey"}
                style={[styles.input, { color: colors.text }]}
              />
            </View>
            <TouchableOpacity style={{ marginRight: 40 }}>
              <Icons.CameraIcon size={20} color={"gray"} />
            </TouchableOpacity>
          </Pressable>
        );
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icons.ArrowTrendingUpIcon size={25} color={"#33AB5F"} />

        <Text style={[styles.trendingTitle, { color: "gray" }]}>
          Trending Searches
        </Text>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    width: "86%",
    borderColor: "#a9a9a950",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    right: 21,
  },
  input: {
    marginLeft: 1,
    width: "82%",
  },
  container: {
    margin: 20,
  },
  trendingTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 5,
  },
});
