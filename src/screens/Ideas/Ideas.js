import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as Icons from "react-native-heroicons/solid";
import IdeasHeader from "../../components/Ideas/IdeasHeader";
import IdeaCard from "../../components/Ideas/IdeaCard";
import ideas from "../../assets/data/ideas";

const Ideas = ({ navigation }) => {
 

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <IdeasHeader />
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          flexWrap: "wrap",
          marginBottom: 10,
        }}
      >
        {ideas.map((item, index) => (
          <View
            key={index}
            style={{
              alignItems: 'center',
              width: "48%", // Set the width of each HomeDesignCard
              margin: "1%", // Adjust margin as needed
            }}
          >
            <IdeaCard ideas={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Ideas;

const styles = StyleSheet.create({});
