import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProHeaderButtons from "../../components/Pro/ProHeaderButtons";
import ProjectsFeedWidget from "../../components/Pro/ProjectsFeedWidget";
import { ScrollView } from "react-native";

const ProHome = () => {
  return (
    <View style={{flex: 1}}>
      <ProHeaderButtons />
      <ScrollView>
      <ProjectsFeedWidget />
      </ScrollView>
     
      
     
    </View>
  );
};




export default ProHome;

const styles = StyleSheet.create({});
