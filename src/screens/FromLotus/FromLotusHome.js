import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import FromLotusHeader from "../../components/FromLotus/FromLotusHeader";
import LatestPodcast from "../../components/FromLotus/LatestPodcast";
import * as Icons from "react-native-heroicons/outline";
import { useNavigation, useTheme } from "@react-navigation/native";
import podcast from "../../assets/data/podcast";

const FromLotusHome = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <FromLotusHeader />
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
          marginTop: 20,
        }}
      >
        <Text style={[styles.header, { color: colors.text }]}>
          Latest Podcast
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("AllPodcast")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ color: "#33AB5F", fontSize: 13 }}>Sell All</Text>
          <Icons.ArrowLongRightIcon style={{ color: "#33AB5F" }} size={30} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={podcast}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <LatestPodcast podcast={item} />}
      />
    </View>
  );
};

export default FromLotusHome;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  headerContainer: {
    margin: 10,
  },
  latestContainer: {
    margin: 10,
  },
});
