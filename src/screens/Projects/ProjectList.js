import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useTheme } from "@react-navigation/native";

const ProjectList = ({ navigation }) => {
  const { colors } = useTheme();
  const projects = ['House Design Park City', 'Parking Lot Construction', 'Bathroom Remodel'];
  const route = useRoute();

  useEffect(() => {
    console.log("Route Params in ProjectList: ", route.params);
  }, [route.params]);

  const handleProjectSelection = (selectedProject) => {
    // Check if route.params is defined
    if (route.params && route.params.handleProjectSelection) {
      // Call the handleProjectSelection function from the navigation options
      route.params.handleProjectSelection(selectedProject);

      // Navigate back to the previous screen
      navigation.goBack();
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
