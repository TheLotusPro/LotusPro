import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import ProjectsHeader from "../../components/Projects/ProjectsHeader";
import ProjectsHomeCard from "../../components/Projects/ProjectsHomeCard";

const ProjectsHome = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ width: 50 }}
            >
              <Icons.ArrowLongLeftIcon style={{ color: "#33AB5F" }} size={30} />
            </TouchableOpacity>
          ),
        });
      }, [navigation]);

  return (
    <View style={{flex: 1}}>
    <ProjectsHeader />
    <ScrollView>
   <ProjectsHomeCard />
    </ScrollView>
    
    </View>
  );
};

export default ProjectsHome;

const styles = StyleSheet.create({});
