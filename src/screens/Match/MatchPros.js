import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import SelectProfessionals from "../../components/Match/SelectProfessionals";
import match from "../../assets/data/match";
import * as Icons from "react-native-heroicons/solid";
import { useTheme } from "@react-navigation/native";

const MatchPros = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={match}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <SelectProfessionals match={item} />}
        ListHeaderComponent={Search}
      />
    </View>
  );
};

const Search = () => {
  const [professional, setProfessional] = useState("");
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.searchContainer]}>
        <View style={{ margin: 8, flexDirection: "row", alignItems: "center" }}>
          <Icons.MagnifyingGlassIcon size={20} color={"gray"} />
          <TextInput
            style={[styles.input, { color: colors.text }]}
            placeholder="What do you need help with?"
            value={professional}
            numberOfLines={4}
            placeholderTextColor={"gray"}
            onChangeText={(text) => setProfessional(text)}
          />
        </View>
      </View>
    </View>
  );
};

export default MatchPros;

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    borderColor: "#a9a9a950",
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 20,
    borderBottomColor: "#a9a9a950",
  },
});
