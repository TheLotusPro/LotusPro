import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text, Avatar, AvatarFallbackText } from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation, useTheme } from "@react-navigation/native";

const LeadsWidget = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.project}>
        {/* header */}

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.CircleStackIcon size={14} color={colors.text} />
            <Text style={[styles.text, { color: colors.text }]}>
              {" "}
              Leads (18)
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Leads")}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={[styles.seeAll, { color: colors.text }]}>See All</Text>
            <Icons.ChevronRightIcon size={20} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* header */}

        {/* project */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ProjectDetails")}
          style={{ borderBottomWidth: 0.2, borderBottomColor: "gray" }}
        >
          <View style={styles.projectContainer}>
            <Avatar bgColor="$amber600" size="md" borderRadius="$full">
              <AvatarFallbackText>Sam Jon</AvatarFallbackText>
            </Avatar>

            <View style={{ marginLeft: 10 }}>
              <View>
                <Text style={[styles.projectName, { color: colors.text }]}>
                  Landscape Job for Sam
                </Text>
              </View>

              <View style={styles.userContainer}>
                <View></View>
                <Text style={[styles.username, { color: colors.text }]}>
                  Sam John
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* project */}

        {/* project */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ProjectDetails")}
          style={{ borderBottomWidth: 0.2, borderBottomColor: "gray" }}
        >
          <View style={styles.projectContainer}>
            <Avatar bgColor="$amber600" size="md" borderRadius="$full">
              <AvatarFallbackText>Mark Robert</AvatarFallbackText>
            </Avatar>

            <View style={{ marginLeft: 10 }}>
              <View>
                <Text style={[styles.projectName, { color: colors.text }]}>
                  Landscape Job for Mark
                </Text>
              </View>

              <View style={styles.userContainer}>
                <View></View>
                <Text style={[styles.username, { color: colors.text }]}>
                  Mark Robert
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* project */}

          {/* project */}
          <TouchableOpacity
          onPress={() => navigation.navigate("ProjectDetails")}
          style={{ borderBottomWidth: 0.2, borderBottomColor: "gray" }}
        >
          <View style={styles.projectContainer}>
            <Avatar bgColor="$amber600" size="md" borderRadius="$full">
              <AvatarFallbackText>Xavier James</AvatarFallbackText>
            </Avatar>

            <View style={{ marginLeft: 10 }}>
              <View>
                <Text style={[styles.projectName, { color: colors.text }]}>
                  Landscape Job for Xavier James
                </Text>
              </View>

              <View style={styles.userContainer}>
                <View></View>
                <Text style={[styles.username, { color: colors.text }]}>
                  Xavier James
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* project */}
      </View>
    </View>
  );
};

export default LeadsWidget;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  project: {
    backgroundColor: "#fa807210",
    padding: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'gray'
  },
  username: {
    fontSize: 14,
    fontWeight: "500",
  },
  projectName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  projectContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: "#33AB5F",
    padding: 10,
    borderRadius: 10,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  seeAll: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
