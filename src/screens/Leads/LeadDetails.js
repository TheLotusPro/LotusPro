import { StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import React from "react";
import { Text } from "@gluestack-ui/themed";
import LeadDetailsHeader from "../../components/Leads/LeadDetailsHeader";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const LeadDetails = () => {
  return (
    <ScrollView>
      <LeadDetailsHeader />
      <Lead />
      <Team />
      <Files />
      <Estimates />
      <Notes />
    </ScrollView>
  );
};

const Lead = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.border}>
      <View style={styles.borderContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditClient")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Icons.CircleStackIcon size={20} color={"gray"} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.optionTitle, { color: colors.text }]}>
              James Warren
            </Text>
            <Icons.ChevronRightIcon size={20} color={colors.text} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("EditClient")}>
          <Text style={[styles.textButton, { color: "dodgerblue" }]}>
            Contact
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Team = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.border}>
      <View style={styles.borderContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddTeamMember")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Icons.CircleStackIcon size={20} color={"gray"} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.optionTitle, { color: colors.text }]}>
              Team (0)
            </Text>
            <Icons.ChevronRightIcon size={20} color={colors.text} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("InviteTeamMember")}
        >
          <Text style={[styles.textButton, { color: "dodgerblue" }]}>
            Invite
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Files = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AddFiles")}
      style={styles.border}
    >
      <View style={styles.borderContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.CircleStackIcon size={20} color={"gray"} />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.optionTitle, { color: colors.text }]}>
                Files (0)
              </Text>

              <Icons.ChevronRightIcon size={20} color={colors.text} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Estimates = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("EstimatesDetails")}
      style={styles.border}
    >
      <View style={styles.borderContainerEstimate}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Icons.CircleStackIcon size={20} color={"gray"} />

            <Text style={[styles.optionTitle, { color: colors.text }]}>
              Estimate (0)
            </Text>
          </View>

          <TouchableOpacity>
            <Icons.PlusCircleIcon size={25} color={"dodgerblue"} />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={[{ color: colors.text }]}>Estimate for project</Text>
          <Text style={[{ color: colors.text }]}>$0.00</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Notes = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      // onPress={() => navigation.navigate("AddFiles")}
      style={styles.border}
    >
      <View style={styles.borderContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.CircleStackIcon size={20} color={"gray"} />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.optionTitle, { color: colors.text }]}>
                Notes (0)
              </Text>

              <Icons.ChevronRightIcon size={20} color={colors.text} />
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Icons.PlusCircleIcon size={25} color={"dodgerblue"} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default LeadDetails;

const styles = StyleSheet.create({
  borderContainer: {
    padding: 20,
    backgroundColor: "#fa807210",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "gray",
    borderWidth: 0.5,
  },

  border: {
    margin: 20,
    marginBottom: 1,
  },
  optionTitle: {
    fontWeight: "bold",
    marginLeft: 5,
  },

  textButton: {
    fontWeight: "bold",
  },
  borderContainerEstimate: {
    padding: 20,
    backgroundColor: "#fa807210",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 0.5,
  },
});
