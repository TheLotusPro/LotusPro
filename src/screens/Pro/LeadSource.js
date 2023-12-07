import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import leadSource from "../../assets/data/leadSource";
import LeadSourceCard from "../../components/Pro/LeadSourceCard";

const LeadSource = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {leadSource.map((item, index) => (
        <View key={index} style={{}}>
          <LeadSourceCard leadSource={item} />
        </View>
      ))}
    </ScrollView>
  );
};

export default LeadSource;

const styles = StyleSheet.create({});
