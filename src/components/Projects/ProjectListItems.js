import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const ProjectListItems = () => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <View>
          <Text style={[styles.project, { color: colors.text }]}>
            Lotus Pro HQ Development{" "}
          </Text>
        </View>

        <View>
          <Icons.CheckIcon size={25} color={"#33AB5F"} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProjectListItems;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderBottomWidth: 0.5,
    padding: 10,
    borderBottomColor: "gray",
  },
  project: {
    fontWeight: "500",
  },
});
