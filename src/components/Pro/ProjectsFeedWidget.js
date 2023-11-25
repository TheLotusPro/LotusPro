import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text, Avatar, AvatarFallbackText } from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation, useTheme } from "@react-navigation/native";

const ProjectsFeedWidget = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.project}>
        {/* header */}

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.WrenchScrewdriverIcon size={14} color={colors.text} />
            <Text style={[styles.text, { color: colors.text }]}>
              {" "}
              Projects (10)
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Projects")}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={[styles.seeAll, {color: colors.text}]}>See All</Text>
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
            <View style={styles.iconContainer}>
              <Icons.WrenchScrewdriverIcon size={25} color={colors.text} />
            </View>

            <View style={{ marginLeft: 10 }}>
              <View>
                <Text style={[styles.projectName, { color: colors.text }]}>
                  Kitchen and Bath Remodel
                </Text>
              </View>

              <View style={styles.userContainer}>
                <View>
                  <Avatar bgColor="$amber600" size="xs" borderRadius="$full">
                    <AvatarFallbackText>Sam Jon</AvatarFallbackText>
                  </Avatar>
                </View>
                <Text style={[styles.username, { color: colors.text }]}>
                  {" "}
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
            <View style={styles.iconContainer}>
              <Icons.WrenchScrewdriverIcon size={25} color={colors.text} />
            </View>

            <View style={{ marginLeft: 10 }}>
              <View>
                <Text style={[styles.projectName, { color: colors.text }]}>
                  Rebuilding Deck
                </Text>
              </View>

              <View style={styles.userContainer}>
                <View>
                  <Avatar bgColor="$amber600" size="xs" borderRadius="$full">
                    <AvatarFallbackText>Matt Foster</AvatarFallbackText>
                  </Avatar>
                </View>
                <Text style={[styles.username, { color: colors.text }]}>
                  {" "}
                  Matt Foster
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

export default ProjectsFeedWidget;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  project: {
    backgroundColor: "rgba(42, 42, 42, 0.1)",
    padding: 20,
    borderRadius: 10,
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
    marginBottom: 10,
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
