import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import StoriesHeaderCarousel from "../../components/Stories/StoriesHeaderCarousel";
import { useTheme } from "@react-navigation/native";

const Stories = ({ navigation }) => {
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50 }}
        >
          <Icons.ArrowLongLeftIcon style={{ color: "#fa8072" }} size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={[styles.header, { color: colors.text }]}>
            Latest Stories
          </Text>
        </View>
        <StoriesHeaderCarousel />
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
  },
  headerContainer: {
    margin: 10
  }
});
