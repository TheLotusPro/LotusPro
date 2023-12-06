import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";

const CreateLead = () => {
  return (
    <ScrollView>
      <ContactDetails />
    </ScrollView>
  );
};

const ContactDetails = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [selectedClient, setSelectedClient] = useState("Select Client");

  useEffect(() => {
    // Set options dynamically when the component mounts
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            // Perform any action you need
            navigation.goBack();
          }}
          style={{ marginRight: 10 }}
        >
          <Text style={{ color: colors.primary }}>Done</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
          onPress={() =>
            navigation.navigate("Client", {
              handleClientSelection: (selectedClient) =>
                setSelectedClient(selectedClient),
            })
          }
          style={{
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: "gray",
          }}
        >
          <Text style={[{ color: colors.text, marginBottom: 15 }]}>
            {selectedClient}
          </Text>
        </TouchableOpacity>
        {/* input */}
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
});
