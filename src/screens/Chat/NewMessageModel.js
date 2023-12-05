import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const NewMessageModel = ({ navigation }) => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");

  const getBorderColor = (value) => {
    return value.length > 0 ? "#33AB5F" : "#a9a9a950";
  };

  const handleDonePress = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={120}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.userContainer}>
          <View style={{ padding: 10, flexDirection: "row" }}>
            <Avatar size="md">
              <AvatarFallbackText>SS</AvatarFallbackText>
              <AvatarImage
                size="md"
                source={{
                  uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                }}
              />
            </Avatar>

            <View style={{ marginLeft: 5 }}>
              <Text style={[styles.user, { color: colors.text }]}>
                James Webb Contractors
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flexDirection: "row" }}>
                  <Icons.StarIcon style={{ color: "gold" }} size={22} />
                  <Icons.StarIcon style={{ color: "gold" }} size={22} />
                  <Icons.StarIcon style={{ color: "gold" }} size={22} />
                  <Icons.StarIcon style={{ color: "gold" }} size={22} />
                  <Icons.StarIcon style={{ color: "gold" }} size={22} />
                </View>
                <Text style={[{ color: colors.text }]}>(90)</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(email) },
            ]}
            placeholder="Email"
            value={email}
            autoFocus
            keyboardType="email-address"
            placeholderTextColor={"gray"}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(phone) },
            ]}
            placeholder="Phone Number"
            value={phone}
            auto
            keyboardType="numeric"
            placeholderTextColor={"gray"}
            onChangeText={(text) => setPhone(text)}
          />
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(zip) },
            ]}
            placeholder="Zip Code"
            placeholderTextColor={"gray"}
            value={zip}
            keyboardType="numeric"
            onChangeText={(text) => setZip(text)}
          />

          <TextInput
            style={[
              styles.inputMessage,
              { color: colors.text },
              { borderColor: getBorderColor(message) },
            ]}
            placeholder="Message"
            placeholderTextColor={"gray"}
            multiline
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
        </View>

        <View style={{ padding: 10, marginHorizontal: 10 }}>
          <Text style={[styles.disclaimer, { color: colors.text }]}>
            By clicking "Send", I agree to the Lotus Pro terms of use and Lotus
            Pro Privacy Policy as well as to receive text messages or calls from
            Lotus Pro and professionals about my projects under these terms.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewMessageModel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "90%",
    borderRadius: 10,
    padding: 15,
    borderColor: "gray",
  },
  inputMessage: {
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "90%",
    borderRadius: 10,
    padding: 15,
    borderColor: "gray",
    height: 150,
  },
  userContainer: {
    backgroundColor: "#fa807210",
    marginBottom: 10,
  },
  user: {
    fontWeight: "600",
  },
  disclaimer: {
    fontSize: 13,
  },
});
