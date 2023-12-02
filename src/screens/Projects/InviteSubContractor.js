import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import {
  Text,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckIcon,
  Actionsheet,
} from "@gluestack-ui/themed";
import { BottomSheet } from "react-native-btr";

const InviteSubContractor = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Subcontractor");

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    toggleBottomSheet();
  };

  const toggleBottomSheet = () => {
    setVisible((_visible) => !_visible);
  };
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
      keyboardShouldPersistTaps="handled" // Add this line
    >
      <ScrollView 
        contentContainerStyle={styles.scrollViewContainer}
      style={{ flex: 1 }}>
        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(firstName) },
            ]}
            placeholder="First Name *"
            value={firstName}
            numberOfLines={1}
            autoFocus
            placeholderTextColor={"#a9a9a9"}
            onChangeText={(text) => setFirstName(text)}
            returnKeyType="done" // Set returnKeyType to "done"
            // onSubmitEditing={handleDonePress} // Call handleDonePress when return key is pressed
          />

          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(lastName) },
            ]}
            placeholder="Last Name *"
            value={lastName}
            numberOfLines={1}
            placeholderTextColor={"#a9a9a9"}
            onChangeText={(text) => setLastName(text)}
            returnKeyType="done" // Set returnKeyType to "done"
            // onSubmitEditing={handleDonePress} // Call handleDonePress when return key is pressed
          />

          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(email) },
            ]}
            placeholder="Email *"
            value={email}
            numberOfLines={1}
            placeholderTextColor={"#a9a9a9"}
            onChangeText={(text) => setEmail(text)}
            returnKeyType="done" // Set returnKeyType to "done"
            // onSubmitEditing={handleDonePress} // Call handleDonePress when return key is pressed
          />
          <View style={styles.option}>
            <Checkbox
              aria-label="Checkbox Label"
              size="md"
              isInvalid={false}
              isDisabled={false}
            >
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
            </Checkbox>

            <Text style={[styles.optionText, { color: colors.text }]}>
              Send request via email
            </Text>
          </View>

          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(phone) },
            ]}
            placeholder="Phone Number *"
            value={phone}
            numberOfLines={1}
            keyboardType="phone-pad"
            placeholderTextColor={"#a9a9a9"}
            onChangeText={(text) => setPhone(text)}
            returnKeyType="done" // Set returnKeyType to "done"
            // onSubmitEditing={handleDonePress} // Call handleDonePress when return key is pressed
          />

          <View style={styles.option}>
            <Checkbox
              aria-label="Checkbox Label"
              size="md"
              isInvalid={false}
              isDisabled={false}
            >
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
            </Checkbox>

            <Text style={[styles.optionText, { color: colors.text }]}>
              Send request via text
            </Text>
          </View>

          <View style={styles.option2}>
            <Text style={{ fontSize: 13 }}>Role*</Text>
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: "gray" }}>
              <TouchableOpacity
                onPress={toggleBottomSheet}
                style={{ marginBottom: 10 }}
              >
                <Text>{selectedRole}</Text>
              </TouchableOpacity>
            </View>

            <BottomSheet
              visible={visible}
              onBackButtonPress={toggleBottomSheet}
              onBackdropPress={toggleBottomSheet}
            >
              <View
                style={[
                  styles.bottomSheetContainer,
                  { backgroundColor: colors.background },
                ]}
              >
                <View style={{ marginBottom: 30 }}>
                  <Text style={{ fontSize: 16, color: colors.text }}>
                    Select Role *
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ marginBottom: 30 }}
                  onPress={() => handleRoleSelection("Subcontractor")}
                >
                  <Text style={[styles.bottomText, { color: colors.text }]}>
                    Subcontractor
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleRoleSelection("Vendor")}>
                  <Text style={[styles.bottomText, { color: colors.text }]}>
                    Vendor
                  </Text>
                </TouchableOpacity>
              </View>
            </BottomSheet>
          </View>

          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(message) },
            ]}
            placeholder="Add Short Message *"
            value={message}
            numberOfLines={5}
        
            placeholderTextColor={"#a9a9a9"}
            onChangeText={(text) => setMessage(text)}
            returnKeyType="done" // Set returnKeyType to "done"
            // onSubmitEditing={handleDonePress} // Call handleDonePress when return key is pressed
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InviteSubContractor;

const styles = StyleSheet.create({
  input: {
    marginBottom: 30,
    paddingHorizontal: 10,
    width: "90%",

    padding: 10,
    borderBottomWidth: 2,
    fontSize: 17,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  option: {
    marginHorizontal: 25,
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 30,
  },
  optionText: { fontSize: 17 },
  option2: {
    marginHorizontal: 25,
    alignSelf: "flex-start",

    marginBottom: 30,
    width: "90%",
  },
  titleMenu: {
    fontWeight: "bold",
  },
  bottomSheetContainer: {
    height: 250,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
});
