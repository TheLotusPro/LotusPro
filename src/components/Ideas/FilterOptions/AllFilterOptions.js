import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const AllFilterOptions = (props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={[styles.options, { color: colors.text }]}>
          {props?.allFilters?.title}
        </Text>
        <Icons.ChevronRightIcon
          style={{ color: colors.text }}
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AllFilterOptions;

const styles = StyleSheet.create({
  container: {},
  options: {
    fontSize: 17,
    marginVertical: 18,
    marginBottom: 15,
    fontWeight: "400",
  },
});
