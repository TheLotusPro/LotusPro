import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/outline";

const AddTimeEntry = ({ route }) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { colors } = useTheme();
  const [selectedProject, setSelectedProject] = useState(
    route.params?.selectedProject || "Select Project"
  );
  const [selectedTeamMember, setSelectedTeamMember] = useState(
    route.params?.selectedTeamMember || "Select Team Member"
  );

  const handleDonePress = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    navigation.goBack();
  };

  useEffect(() => {
    // Update the state when route params change
    setSelectedProject(route.params?.selectedProject || "Select Project");
    setSelectedTeamMember(
      route.params?.selectedTeamMember || "Select Team Member"
    );
  }, [route.params]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleDonePress} style={{ marginRight: 5 }}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#33AB5F" />
          ) : (
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#33AB5F" }}
            >
              Done
            </Text>
          )}
        </TouchableOpacity>
      ),
    });
  }, [navigation, isLoading]);

  const handleProjectPress = () => {
    navigation.navigate("ProjectList", {
      selectedProject,
      selectedTeamMember,
    });
  };

  const handleTeamMemberPress = () => {
    navigation.navigate("TeamMemberList", {
      selectedProject,
      selectedTeamMember,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={120}
      keyboardShouldPersistTaps="handled"
    >
      <View style={{ flex: 1, marginHorizontal: 30 }}>
        {/* option */}
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.title, { color: "gray" }]}>Project *</Text>

          <TouchableOpacity onPress={handleProjectPress} style={styles.option}>
            <View style={styles.optionContainer}>
              <Text style={[{ color: colors.text }]}>{selectedProject}</Text>

              <Icons.ChevronDownIcon size={20} color={"gray"} />
            </View>
          </TouchableOpacity>
        </View>
        {/* option */}

        {/* option */}
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.title, { color: "gray" }]}>Team Member *</Text>

          <TouchableOpacity
            onPress={handleTeamMemberPress}
            style={styles.option}
          >
            <View style={styles.optionContainer}>
              <Text style={[{ color: colors.text }]}>{selectedTeamMember}</Text>

              <Icons.ChevronDownIcon size={20} color={"gray"} />
            </View>
          </TouchableOpacity>
        </View>
        {/* option */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddTimeEntry;

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 5,
  },
  title: {
    fontSize: 13,
  },
  option: {
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
});
