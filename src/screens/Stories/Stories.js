import { ScrollView, StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
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
import { useNavigation, useTheme } from "@react-navigation/native";
import LatestTalksCard from "../../components/Stories/LatestTalksCard";
import latestTalk from "../../assets/data/latestTalk";

const Stories = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={[styles.header, { color: colors.text }]}>
            Latest Stories
          </Text>
        </View>
        <StoriesHeaderCarousel />
        <Latest />
      </ScrollView>
    </View>
  );
};

const Latest = () => {
  const navigation = useNavigation();

  const { colors } = useTheme();

  return (
    <View style={styles.latestContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={[styles.header, { color: colors.text }]}>
          Latest Talks
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Talks")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ color: "#33AB5F", fontSize: 13 }}>Sell All</Text>
          <Icons.ArrowLongRightIcon style={{ color: "#33AB5F" }} size={30} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={latestTalk}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <LatestTalksCard latestTalk={item} />}
      />


    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    marginHorizontal: 10
  },
  headerContainer: {
    margin: 10,
    
   
  },
  latestContainer: {
    margin: 10,
  },
});
