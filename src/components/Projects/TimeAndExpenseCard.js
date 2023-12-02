import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";

const TimeAndExpenseCard = () => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={[styles.projectName, { color: colors.text }]}>
              Project Name
            </Text>
            <View
              style={{ marginTop: 10, flexDirection: "row", marginBottom: 15 }}
            >
              <Text style={[styles.service, { color: colors.text }]}>
                Service
              </Text>
              <Text style={[styles.service, { color: colors.text }]}>
                {" "}
                - Dumpster renter
              </Text>
            </View>
          </View>

          <Text style={[styles.type, { color: "green" }]}>Expense</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Avatar size="sm">
              <AvatarFallbackText>SS</AvatarFallbackText>
              <AvatarImage
                size="sm"
                source={{
                  uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                }}
              />
            </Avatar>
            <View style={{ marginLeft: 5 }}>
              <Text style={[{ color: colors.text }]}>Team member</Text>
            </View>
          </View>

          <View>
            <Text style={[styles.rate, { color: colors.text }]}>
              Rate: $800
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TimeAndExpenseCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  cardContainer: {
    backgroundColor: "#fa807210",
    padding: 20,
    borderRadius: 10,
  },
  type: {
    fontSize: 13,
    fontWeight: "600",
  },
  projectName: {
    fontWeight: "bold",
  },
  rate: {
    fontSize: 13,
  },
  service: {},
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.3,
    borderColor: "gray",
  },
});
