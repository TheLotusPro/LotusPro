import {
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme, useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";

const IdeaDetails = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={{ fontWeight: "bold", color:  "#33AB5F", fontSize: 18 }}>
          My Home Ideas
        </Text>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Header />
      <Options />
    </View>
  );
};

const Header = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={{ margin: 10 }}>
      <View style={{ marginBottom: 15 }}>
        <Text style={[styles.titleHeader, { color: colors.text }]}>
          My Home Ideas
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("InviteCollaborator")}
        style={styles.inviteButton}
      >
        <Icons.PlusCircleIcon size={25} color={colors.text} />
        <Text style={[{ color: colors.text, fontWeight: "600" }]}> Invite</Text>
      </TouchableOpacity>
    </View>
  );
};

const Options = () => {
  const { colors } = useTheme();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <Pressable style={styles.boxContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Photos </Text>
        <View style={{ flexDirection: "row" }}>
          <Icons.PhotoIcon size={25} color={colors.text} />
          <Icons.ChevronRightIcon size={25} color={colors.text} />
        </View>
      </Pressable>

      <Pressable style={styles.boxContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Videos </Text>
        <View style={{ flexDirection: "row" }}>
          <Icons.VideoCameraIcon size={25} color={colors.text} />
          <Icons.ChevronRightIcon size={25} color={colors.text} />
        </View>
      </Pressable>

      <Pressable style={styles.boxContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Products </Text>
        <View style={{ flexDirection: "row" }}>
          <Icons.ShoppingBagIcon size={25} color={colors.text} />
          <Icons.ChevronRightIcon size={25} color={colors.text} />
        </View>
      </Pressable>

      <Pressable style={styles.boxContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Pros </Text>
        <View style={{ flexDirection: "row" }}>
          <Icons.BriefcaseIcon size={25} color={colors.text} />
          <Icons.ChevronRightIcon size={25} color={colors.text} />
        </View>
      </Pressable>

      <Pressable style={styles.boxContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Talks </Text>
        <View style={{ flexDirection: "row" }}>
          <Icons.SpeakerWaveIcon size={25} color={colors.text} />
          <Icons.ChevronRightIcon size={25} color={colors.text} />
        </View>
      </Pressable>

      <Pressable style={styles.boxContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Stories </Text>
        <View style={{ flexDirection: "row" }}>
          <Icons.UserGroupIcon size={25} color={colors.text} />
          <Icons.ChevronRightIcon size={25} color={colors.text} />
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default IdeaDetails;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: "row",
  },
  boxContainer: {
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
    backgroundColor: "#fa807210",
    borderWidth: 0.3,
    borderColor: "#33AB5F",
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
  },
  titleHeader: {
    fontWeight: "bold",
    fontSize: 20,
  },
  inviteButton: {
    backgroundColor: "#fa807210",

    width: 90,
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
});
