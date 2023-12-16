import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useTheme, useNavigation } from "@react-navigation/native";

const Client = () => {
  const { colors } = useTheme();
  const clients = ["Nicole Doe", "John Doe", "George Doe"];
  const route = useRoute();
  const navigation = useNavigation();

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

  const handleClientSelection = (selectedClient) => {
    navigation.navigate("CreateLead" ,  {
      selectedClient,

    });
  };

  return (
    <ScrollView style={styles.container}>
      {clients.map((client, index) => (
        <TouchableOpacity
          style={styles.optionContainer}
          key={index.toString()}
          onPress={() => handleClientSelection(client)}
        >
          <View style={{ marginBottom: 15 }}>
            <Text style={[styles.title, { color: colors.text }]}>{client}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Client;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  optionContainer: {
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
    marginBottom: 20,
  },
  title: {
    fontSize: 17,
  },
});
