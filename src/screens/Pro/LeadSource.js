import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from "react-native";
import React from "react";
import leadSource from "../../assets/data/leadSource";
import LeadSourceCard from "../../components/Pro/LeadSourceCard";

const LeadSource = ({ navigation }) => {
  const handleLeadSourcePress = (selectedLeadSource) => {
    navigation.navigate("CreateLead", { selectedLeadSource });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {leadSource.map((item, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => handleLeadSourcePress(item)}
        >
          <View style={{flex: 1,}}>
            <LeadSourceCard leadSource={item} />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
};

export default LeadSource;

const styles = StyleSheet.create({});
