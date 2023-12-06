import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Filter from "./Filter";
import Location from "./Location";
import ProfessionalCategory from "./ProfessionalCategory";
import ProjectType from "./ProjectType";

const ProfessionalListHeader = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <Filter />
      <Location />
      <ProfessionalCategory />
      <ProjectType />
    </ScrollView>
  );
};

export default ProfessionalListHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "#fa807210",
  },
});
