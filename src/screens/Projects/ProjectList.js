import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useNavigation, useTheme } from "@react-navigation/native";

const ProjectList = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { colors } = useTheme();

  const projects = ['House Design Park City', 'Parking Lot Construction', 'Bathroom Remodel'];

  const handleProjectSelection = (selectedProject) => {
    const routeParams = route.params || {};
    console.log("routeParams:", routeParams);

    if (routeParams.name === "InviteTeamMember") {
      console.log("Navigating to InviteTeamMember");
      navigation.navigate("InviteTeamMember", {
        selectedProject,
        selectedTeamMember: routeParams.selectedTeamMember,
      });
    } else if (routeParams.name === "AddTimeEntry") {
      console.log("Navigating to AddTimeEntry");
      navigation.navigate("AddTimeEntry", {
        selectedProject,
        selectedTeamMember: routeParams.selectedTeamMember,
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      {projects.map((project, index) => (
        <TouchableOpacity
          style={styles.optionContainer}
          key={index.toString()}
          onPress={() => handleProjectSelection(project)}
        >
          <View style={{ marginBottom: 15 }}>
            <Text style={[styles.title, { color: colors.text }]}>{project}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ProjectList;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  optionContainer: {
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
    marginBottom: 20,
  },
  title: {
    fontSize: 17,
  },
});
