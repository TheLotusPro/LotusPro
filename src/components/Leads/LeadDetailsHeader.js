import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "@gluestack-ui/themed";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const LeadDetailsHeader = () => {
  const { colors } = useTheme();
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={[styles.status, { color: colors.text }]}>
        Status: Estimate Sent
      </Text>

      <View style={styles.buttonContainer}>
        {/* button */}

        <TouchableOpacity style={{ alignItems: "center" }}>
          <View style={styles.button}>
            <Icons.Bars3Icon color={colors.text} />
          </View>
          <Text>Menu</Text>
        </TouchableOpacity>

        {/* button */}

        {/* button */}

        <TouchableOpacity style={{ alignItems: "center" }}>
          <View style={styles.button}>
            <Icons.EnvelopeIcon color={colors.text} />
          </View>
          <Text>Messages</Text>
        </TouchableOpacity>

        {/* button */}

        {/* button */}
        <TouchableOpacity 
              onPress={() => navigation.navigate("AddFiles")}
        style={{ alignItems: "center" }}>
          <View style={styles.button}>
            <Icons.DocumentIcon color={colors.text} />
          </View>
          <Text>Files</Text>
        </TouchableOpacity>

        {/* button */}
      </View>
    </View>
  );
};

export default LeadDetailsHeader;

const styles = StyleSheet.create({
  status: {
    fontSize: 13,
  },
  container: {
    margin: 30,
    marginTop: 1,
  },
  button: {
    backgroundColor: "#fa807210",
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
 
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
