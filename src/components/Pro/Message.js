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
import {
  Text,
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";

const Message = () => {
  const [message, setMessage] = useState();
  const isMe = message;
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <View>
          <Avatar size="sm">
            <AvatarFallbackText>SS</AvatarFallbackText>
            <AvatarImage
              size="xl"
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </Avatar>
        </View>

        {/* input */}
        <View style={{ marginLeft: 5 }}>
          <Text style={[styles.username, { color: colors.text }]}>
            James Web Contractors
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.time}>10:30am</Text>
            <View style={styles.sentContainer}>
              <Text style={[styles.sent, { color: colors.text }]}>Sent</Text>
              <Icons.CheckIcon size={12} color={colors.text} />
            </View>
          </View>
          <Text style={[styles.message, { color: colors.text }]}>
            Hey Sarah, we plan to have your estimate by tomorrow afternoon. In
            the meantime if you have any question let me know. Thanks - Sam
          </Text>
        </View>
        {/* input */}
      </TouchableOpacity>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    maxWidth: "80%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  leftContainer: {
    marginLeft: 10,
    marginRight: "auto",
  },
  rightContainer: {
    marginLeft: "auto",
    marginRight: 10,
    flexDirection: "row-reverse",
  },
  username: {
    fontWeight: "bold",
  },
  sent: {
    padding: 5,
    fontSize: 13,
  },
  sentContainer: {
    backgroundColor: "#33AB5F10",
    marginLeft: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    color: "gray",
    fontSize: 13,
  },
  message: {},
});
