import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";

const Zip = () => {
  const [zip, setZip] = useState("");
  const { colors } = useTheme();

  const getBorderColor = (value) => {
    return value.length > 4 ? "#33AB5F" : "#a9a9a950";
  };

  const isNextButtonDisabled = zip.length !== 5;

  return (
    <View style={styles.container}>
      {/* Content Above the Buttons */}
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: colors.text }]}>
          Please enter your Zip Code
        </Text>
        <Text style={[{ color: colors.text }]}>1/13</Text>
      </View>

      <View style={{ alignItems: "center", flex: 1 }}>
        <TextInput
          style={[
            styles.input,
            { color: colors.text },
            { borderColor: getBorderColor(zip) },
          ]}
          placeholder="Zip"
          value={zip}
          keyboardType="number-pad"
          autoFocus
          numberOfLines={4}
          placeholderTextColor={"#a9a9a980"}
          onChangeText={(text) => setZip(text)}
        />
      </View>

      <View style={styles.content}>{/* Add your content here */}</View>

      {/* Buttons */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={105}
      >
        <View style={styles.buttonContainer}>
          {/* Back Button */}
          <TouchableOpacity style={styles.buttonBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          {/* Next Button */}
          <TouchableOpacity
            style={[
              styles.buttonNext,
              { backgroundColor: isNextButtonDisabled ? "gray" : "#33AB5F" },
            ]}
            disabled={isNextButtonDisabled}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Zip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  content: {
    flex: 1,
    // Other styles for the content above the buttons
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonNext: {
    backgroundColor: "#33AB5F",
    width: 170,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonBack: {
    backgroundColor: "gray",
    width: 170,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 3,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "90%",
    borderRadius: 5,
    padding: 15,
    marginTop: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
  titleContainer: {
    marginHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
});
