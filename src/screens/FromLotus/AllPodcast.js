import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import AllPodcastHeader from "../../components/FromLotus/AllPodcastHeader";
import PodcastCard from "../../components/FromLotus/PodcastCard";
import podcast from "../../assets/data/podcast";

const AllPodcast = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={podcast}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PodcastCard podcast={item} />}
        ListHeaderComponent={() => <AllPodcastHeader />}
      />
    </View>
  );
};

export default AllPodcast;

const styles = StyleSheet.create({});
