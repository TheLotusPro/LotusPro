import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import AllFilters from "./AllFilters";
import Room from "./Room";
import Style from "./Style";
import Budget from "./Budget";
import Size from "./Size";
import Type from "./Type";

const PhotosHeaderBar = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <AllFilters />
      <Room />
      <Style />
      <Type />
      <Budget />
      <Size />
    </ScrollView>
  );
};

export default PhotosHeaderBar;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "#fa807210",
  
  },
});
