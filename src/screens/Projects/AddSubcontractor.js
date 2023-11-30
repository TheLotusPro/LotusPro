import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import {
  Text,
  Avatar,
  AvatarFallbackText,
  ScrollView,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import * as Icon from "react-native-heroicons/outline";

const AddSubcontractor = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View>
     <View style={{ marginHorizontal: 15, marginBottom: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("InviteSubContractor")}
          style={styles.button}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Icon.PlusCircleIcon
              size={25}
              style={styles.icon}
              color={"white"}
            />
            <Text style={[styles.options, { color: "white" }]}> Invite</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Avatar bgColor="#33AB5F" size="md" borderRadius="$full">
                <AvatarFallbackText>James Duck</AvatarFallbackText>
              </Avatar>
            </View>
            <View style={styles.userContainer}>
              <Text style={[styles.username, { color: colors.text }]}>
              James Duck
              </Text>
              <Text style={[styles.title, { color: colors.text }]}>
                Subcontractor
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Icons.XMarkIcon size={25} color={colors.text} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default AddSubcontractor

const styles = StyleSheet.create({
  userContainer: {
    marginLeft: 5,
  },
  container: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  username: {
    fontWeight: "bold",
  },
  title: {
    fontWeight: "600",
    fontSize: 13,
  },
  button: {
    backgroundColor: "#33AB5F",
    maxWidth: 110,
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  options: {
    fontWeight: "bold",
  },
});
