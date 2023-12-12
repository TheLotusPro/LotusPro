import React, { useState, forwardRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";

const InboxInput = () => {
  const { colors } = useTheme();
  const [message, setMessage] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={105}
    >
      <View style={[styles.root, { backgroundColor: colors.background }]}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { color: colors.text }]}
            value={message}
            multiline
            onChangeText={setMessage}
            placeholder="Write a message"
            placeholderTextColor={"gray"}
          />

          <View style={{ flexDirection: "row", flex: 1 }}>
            <TouchableOpacity style={{ marginBottom: 10 }}>
              <Icons.PaperClipIcon size={20} color={"gray"} />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginLeft: 15 }}>
              <Icons.MicrophoneIcon size={20} color={"gray"} />
            </TouchableOpacity>
          </View>
        </View>

        <Pressable style={styles.buttonContainer}>
          {message ? (
            <Text style={{ fontWeight: "bold", color: "dodgerblue" }}>
              Send
            </Text>
          ) : (
            <Text style={{ fontWeight: "bold", color: "grey" }}>Send</Text>
          )}
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default InboxInput;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  inputContainer: {
    borderColor: "grey",
    flex: 1,
    padding: 10,
  },
  input: {
    fontSize: 17,
    marginBottom: 15,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
