import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import HeaderButtons from "./HeaderButtons";

const AllPodcastHeader = () => {
  return (
    <View
      style={styles.container}
    >
   <HeaderButtons />
    </View>
  );
};

export default AllPodcastHeader;

const styles = StyleSheet.create({
  container: {

    backgroundColor: "#fa807210",
  },
});
