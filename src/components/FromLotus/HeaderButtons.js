import { Pressable, StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";
import { Text } from "@gluestack-ui/themed";
import podcastHeader from "../../assets/data/podcastHeader";

const HeaderButtons = () => {
  return (
    <View>
      <FlatList
        data={podcastHeader}
        horizontal
        renderItem={({ item }) => <Button podcastHeader={item} />}
      />
    </View>
  );
};

const Button = (props) => {
  const { colors } = useTheme();
  return (
    <Pressable style={styles.buttonContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.option, { color: colors.text }]}>
          {props?.podcastHeader?.title}
        </Text>
      </View>
    </Pressable>
  );
};

export default HeaderButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
    padding: 8,
    backgroundColor: "#fa807210",
    borderColor: "#33AB5F",
    borderWidth: 0.3,

    alignItems: "center",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  option: {
    fontWeight: "500",
    fontSize: 14,
  },
});
