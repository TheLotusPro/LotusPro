import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";

const ProfileButtons = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();


  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
       onPress={() => navigation.navigate('Activity')}
      style={styles.margin}>
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

      <TouchableOpacity 
       onPress={() => navigation.navigate('Following')}
      style={styles.margin}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.UserPlusIcon
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

      <TouchableOpacity 
       onPress={() => navigation.navigate('Followers')}
      style={styles.margin}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.UserPlusIcon
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

      <TouchableOpacity 
       onPress={() => navigation.navigate('Updates')}
      style={styles.margin}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.MegaphoneIcon
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

      <TouchableOpacity 
       onPress={() => navigation.navigate('History')}
      style={styles.margin}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.DocumentMagnifyingGlassIcon
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

      <TouchableOpacity 
       onPress={() => navigation.navigate('PublicProfile')}
      style={styles.margin}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.UserIcon
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
    margin: 15,
  },
  icon: {
    marginTop: 5,
  },
  option: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10
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
