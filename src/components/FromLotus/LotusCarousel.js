import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Video from "react-native-video";

const mediaData = [
  { type: "video", source: require("../../assets/images/LotusHeader.mp4") },
  // { type: 'image', source: require('../../assets/images/LandscapeDesign.jpeg') },
  // Add more media items as needed
];

const LotusCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    if (item.type === "image") {
      return <Image style={styles.media} source={item.source} />;
    } else if (item.type === "video") {
      return (
        <Pressable
        onPress={() => navigation.navigate('PodcastDetails')}
        >
        <Video
          source={item.source}
          style={styles.media}
          muted={true}
          resizeMode="cover"
          repeat={true}
          controls={false}
        />
        </Pressable>
      );
    }
  };

  const handleSnapToItem = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (activeIndex + 1) % mediaData.length;
      carouselRef.current.snapToItem(newIndex);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={mediaData}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
        onSnapToItem={handleSnapToItem}
      />
      <Pagination
        dotsLength={mediaData.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default LotusCarousel;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginBottom: -20,
  },
  media: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  paginationContainer: {
    bottom: 10,
    alignSelf: "center",
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#33AB5F",
  },
  inactiveDotStyle: {
    // Customize inactive dot style if needed
  },
});
