import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import { useTheme } from "@react-navigation/native";
import { ColorSpace } from "react-native-reanimated";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Video from "react-native-video";
import TalkCommentInput from "../../components/Stories/TalkCommentInput";
import TalkComments from "../../components/Stories/TalkComments";

const TalksPostScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50 }}
        >
          <Icons.ArrowLongLeftIcon style={{ color: "#33AB5F" }} size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Header />
      <PostHeader />
      <Attachments />
      <Footer />
      <TalkComments />
    </ScrollView>
    <TalkCommentInput />
    
    </View>
  );
};

const Header = () => {
  const { colors } = useTheme();

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}
    >
      <TouchableOpacity style={styles.hashtag}>
        <Text style={styles.hashtagText}>Building a home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.hashtag}>
        <Text style={styles.hashtagText}>Home Decor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.hashtag}>
        <Text style={styles.hashtagText}>Home Design</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const PostHeader = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.postHeaderContainer}>
      <View>
        <Text style={[styles.title, { color: colors.text }]}>
          Building a bathroom.
        </Text>
      </View>

      <View style={styles.userContainer}>
        <Avatar style={styles.userImage}>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            style={styles.userImage}
            source={{
              uri: "https://media.istockphoto.com/id/1461077577/photo/spring-portrait-of-excited-young-woman.jpg?s=1024x1024&w=is&k=20&c=omcVVJwN8tbu5R9DrM89A_XFgt64iOOVMg8xECfMOQI=",
            }}
          />
        </Avatar>

        <View style={{ marginHorizontal: 10 }}>
          <Text style={[styles.username, { color: colors.text }]}>
            Liz Taylor
          </Text>
          <Text style={styles.date}>Monday at 1:54 AM</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.description, { color: colors.text }]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          consectetur velit at massa vehicula, quis fringilla urna gravida
        </Text>
      </View>
    </View>
  );
};

const mediaData = [
  { type: "image", source: require("../../assets/images/HomeReno.jpeg") },
  { type: "video", source: require("../../assets/images/Video.mp4") },
  { type: "image", source: require("../../assets/images/Kitchen.jpeg") },
  {
    type: "image",
    source: require("../../assets/images/LandscapeDesign.jpeg"),
  },
  // Add more media items as needed
];

const Attachments = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => {
    if (item.type === "image") {
      return <Image style={styles.media} source={item.source} />;
    } else if (item.type === "video") {
      return (
        <Video
          source={item.source}
          style={styles.media}
          muted={true}
          resizeMode="cover"
          repeat={true}
          controls={false}
        />
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
    }, 10000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <View style={styles.attachmentsContainer}>
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

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Icons.HeartIcon style={{ color: "gray" }} size={18} />
          <Text> 12</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 15,
          }}
        >
          <Icons.ChatBubbleBottomCenterIcon
            style={{ color: "gray" }}
            size={18}
          />
          <Text> 12</Text>
        </View>
      </View>
    </View>
  );
};
export default TalksPostScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  hashtag: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    maxWidth: "60%",
    alignItems: "center",
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
  hashtagText: {
    color: "white",
  },
  postHeaderContainer: {
    margin: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  userContainer: {
    paddingVertical: 15,
    flexDirection: "row",
  },
  username: {
    fontWeight: "bold",
  },
  date: {
    fontSize: 13,
    color: "gray",
  },
  attachmentsContainer: {
    position: "relative",
    marginBottom: -20,
  },
  media: {
    width: "100%",
    height: 250,
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
  footerContainer: {
    marginHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#33AB5F30",

  },
});
