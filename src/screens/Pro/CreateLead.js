import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";

const CreateLead = ({ route }) => {
  const [selectedClient, setSelectedClient] = useState(
    route.params?.selectedClient || "Select Client"
  );

  useEffect(() => {
    // Update the state when route params change
    setSelectedClient(route.params?.selectedClient || "Select Project");
  }, [route.params]);

  return (
    <ScrollView>
      <ContactDetails selectedClient={selectedClient} />
      <LeadDetails />
    </ScrollView>
  );
};

const ContactDetails = ({ selectedClient }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleClientPress = () => {
    navigation.navigate("Client", {
      handleClientSelection: selectedClient,
    });
  };

  return (
    <View>
      <View style={{ margin: 20 }}>
        {/* header */}
        <View style={{ marginBottom: 30 }}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>
            Contact Details
          </Text>
        </View>
        {/* header */}

        {/* input */}
        <TouchableOpacity
          onPress={handleClientPress}
          style={{
            marginTop: 10,
            borderBottomWidth: 0.3,
            borderBottomColor: "gray",
          }}
        >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={[{ color: colors.text, marginBottom: 10 }]}>
            {selectedClient}
          </Text>
          <Icons.ChevronDownIcon size={20} color={colors.text} />
        </View>
        
        </TouchableOpacity>
        {/* input */}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("CreateNewClient")}
        style={{ margin: 20, flexDirection: "row", alignItems: "center" }}
      >
        <Icons.UserPlusIcon size={25} color={"#33AB5F"} />
        <View style={{ marginLeft: 5 }}>
          <Text style={[{ color: "#33AB5F" }]}>Create New Client</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const LeadDetails = () => {
  const { colors } = useTheme();
  const [name, setName] = useState("");

  return (
    <View>
      <View style={{ margin: 20 }}>
        <View style={{ marginBottom: 30 }}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>
            Lead Details
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={120}
        >
          <View>
            <TextInput
              style={[styles.input, { color: colors.text }]}
              placeholder="Lead Name*"
              value={name}
              placeholderTextColor={"gray"}
              onChangeText={(text) => setName(text)}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default CreateLead;

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: "600",
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
    marginBottom: 20,
    paddingVertical: 10,

    fontSize: 15,
  },
});
