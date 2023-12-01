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
  const [description, setDescription] = useState("");

  const handleDonePress = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    navigation.goBack();
  };
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
    navigation.navigate("ProjectList");
  };

  const handleTeamMemberPress = () => {
    navigation.navigate("TeamMemberList");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={120}
      keyboardShouldPersistTaps="handled" // Add this line
    >
      <View style={{ flex: 1, marginHorizontal: 30 }}>
        {/* option */}
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.title, { color: "gray" }]}>Project *</Text>

          <TouchableOpacity onPress={handleProjectPress} style={styles.option}>
            <View style={styles.optionContainer}>
              <Text style={[{ color: colors.text }]}>
                {route.params?.selectedProject || "Select Project"}
              </Text>

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
              <Text style={[{ color: colors.text }]}>
                {route.params?.selectedTeamMember || "Select Team Member"}
              </Text>

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
