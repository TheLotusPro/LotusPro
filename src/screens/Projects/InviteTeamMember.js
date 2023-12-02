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

const InviteTeamMember = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [selectedProject, setSelectedProject] = useState("Select Project");

  const getBorderColor = (value) => {
    return value.length > 0 ? "#33AB5F90" : "#a9a9a950";
  };

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
              Invite
            </Text>
          )}
        </TouchableOpacity>
      ),
    });
  }, [navigation, isLoading]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={120}
      keyboardShouldPersistTaps="handled"
    >
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: -20, marginHorizontal: 30, fontSize: 13 }}>
          Email
        </Text>
        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(email) },
            ]}
            placeholder="Email *"
            value={email}
            multiline={false}
            autoFocus
            keyboardType="email-address"
            numberOfLines={1}
            placeholderTextColor={"#a9a9a9"}
            onChangeText={(text) => setEmail(text)}
            returnKeyType="done"
          />
          <View style={styles.permissionContainer}>
            <View>
              <Text style={[styles.title, { color: colors.text }]}>Access</Text>
              <Text style={[{ color: colors.text, marginTop: 10 }]}>
                Project Management
              </Text>
              <Text style={[{ color: "gray", fontSize: 13 }]}>
                Timeline, Takeoff, 3D Floor Plans etc....
              </Text>
              <View style={{ marginTop: 30 }}>
                <Text style={[{ color: colors.text }]}>Project</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ProjectList", {
                    handleProjectSelection: (selectedProject) => setSelectedProject(selectedProject),
                  })}
                  style={{
                    marginTop: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "gray",
                  }}
                >
                  <Text style={{ marginBottom: 10 }}>{selectedProject}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default InviteTeamMember;

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "90%",
    padding: 10,
    borderBottomWidth: 2,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  permissionContainer: {
    alignSelf: "flex-start",
    margin: 20,
    backgroundColor: "#33AB5F10",
    width: "90%",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
  },
});

