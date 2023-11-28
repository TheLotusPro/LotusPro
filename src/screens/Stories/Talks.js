import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";

import { useTheme } from "@react-navigation/native";

import TalksCard from "../../components/Stories/TalksCard";
import TalksHeaderTopic from "../../components/Stories/TalksHeaderTopic";

const Talks = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ScrollView>
      <TalksHeaderTopic />
      <TalksCard />
    </ScrollView>
  );
};

export default Talks;

const styles = StyleSheet.create({});
