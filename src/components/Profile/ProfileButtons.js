import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";

const ProfileButtons = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.margin}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.PresentationChartLineIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
              <Text style={[styles.option, { color: colors.text }]}>
                Activity
              </Text>
            </View>

            <View>
              <Icons.ChevronRightIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.margin}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.PresentationChartLineIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
              <Text style={[styles.option, { color: colors.text }]}>
                Following
              </Text>
            </View>

            <View>
              <Icons.ChevronRightIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.margin}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.PresentationChartLineIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
              <Text style={[styles.option, { color: colors.text }]}>
                Followers
              </Text>
            </View>

            <View>
              <Icons.ChevronRightIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.margin}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.PresentationChartLineIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
              <Text style={[styles.option, { color: colors.text }]}>
                Updates
              </Text>
            </View>

            <View>
              <Icons.ChevronRightIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.margin}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.PresentationChartLineIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
              <Text style={[styles.option, { color: colors.text }]}>
                History
              </Text>
            </View>

            <View>
              <Icons.ChevronRightIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.margin}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.PresentationChartLineIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
              <Text style={[styles.option, { color: colors.text }]}>
                Public Profile
              </Text>
            </View>

            <View>
              <Icons.ChevronRightIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.margin}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.PresentationChartLineIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
              <Text style={[styles.option, { color: colors.text }]}>
                Log Out{" "}
              </Text>
            </View>

            <View>
              <Icons.ChevronRightIcon
                size={25}
                color={colors.text}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
  },
  icon: {
    marginTop: 5,
  },
  option: {
    fontWeight: "bold",
    fontSize: 15,
  },
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 20,
    borderBottomColor: "gray",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  margin: {
    marginBottom: 30,
  },
});
