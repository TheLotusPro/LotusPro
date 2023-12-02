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

const TermsInputScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [termsText, setTermsText] = useState(""); // State to store entered text
    const { colors } = useTheme();
  
    const handleDonePress = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
  
      // Pass the entered text back to the Terms component
      navigation.navigate("EstimatesDetails", { termsText });
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
    }, [navigation, isLoading, termsText]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={120}
      keyboardShouldPersistTaps="handled"
    >
      <View style={{ margin: 10 }}>
      <TextInput
          style={[styles.input, { color: colors.text }]}
          placeholder="Terms and Conditions"
          multiline
          autoFocus
          placeholderTextColor={"#a9a9a9"}
          onChangeText={(text) => setTermsText(text)} // Update the state with entered text
          value={termsText} // Bind the input value to the state
          returnKeyType="done"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default TermsInputScreen;

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "90%",
    padding: 10,
    fontSize: 17,
  },
});
