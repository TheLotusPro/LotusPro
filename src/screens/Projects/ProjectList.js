import { useRoute, useTheme } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ProjectList = ({ navigation,  }) => {
  const { colors } = useTheme();
  const projects = ['House Design Park City', 'Parking Lot Construction', 'Bathroom Remodel'];
  const route = useRoute() 

  const handleProjectSelection = (selectedProject) => {
    navigation.navigate("AddTimeEntry", {
      selectedProject,
      selectedTeamMember: route.params?.selectedTeamMember,
    });
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
            <Text style={[styles.title, { color: colors.text }]}>
              {project}
            </Text>
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
