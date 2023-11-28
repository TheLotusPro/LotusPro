import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  FlatList,
  Pressable,
  SafeAreaView,
} from "react-native";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video";
import Carousel, { Pagination } from "react-native-snap-carousel";

const mediaData = [
  { type: "video", source: require("../../assets/images/LotusHeader.mp4") },
  // { type: 'image', source: require('../../assets/images/LandscapeDesign.jpeg') },
  // Add more media items as needed
];

const PodcastDetailsHeader = () => {
  const { colors } = useTheme();
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => {
    if (item.type === "image") {
      return <Image style={styles.media} source={item.source} />;
    } else if (item.type === "video") {
      return (
        <Pressable>
          <Video
            source={item.source}
            style={styles.media}
            muted={true}
            resizeMode="cover"
            repeat={true}
            controls={true}
          />
        </Pressable>
      );
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.background, "#33AB5F80", "#33AB5F99"]}
        style={styles.linearGradient}
      >
        <SafeAreaView>
          <View style={{ margin: 20 }}>
            <Text style={[styles.title, { color: colors.text }]}>
              Building your 1st home with no money down and no experience.{" "}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.user, { color: colors.text }]}>
                by Lotus CEO
              </Text>
              <View style={{ marginLeft: 5 }}>
             
              </View>
            </View>

            <Text style={[styles.date, { color: "gray" }]}>1 week ago</Text>
          </View>
          <View>
            <Carousel
              ref={carouselRef}
              data={mediaData}
              style={{ borderRadius: 50 }}
              renderItem={renderItem}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={Dimensions.get("window").width}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default PodcastDetailsHeader;

const styles = StyleSheet.create({
  container: {
    height: 420,
    alignItems: "center",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  media: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  date: {
    fontSize: 12,
  },
  user: {
    fontWeight: "500",
    fontSize: 14,
  },
});
