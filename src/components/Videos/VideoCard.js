import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import PlaceHolder from "../../assets/images/Ideas/Bedroom.jpg";
import Video from "react-native-video";
import Vid from "../../assets/images/vid/V.mp4";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height - 79;

const VideoCard = (props) => {
  return (
    <View style={styles.container}>
      <Attachments />
    </View>
  );
};

const Attachments = () => {
  const [VideoDimensions, SetVideoDimensions] = useState({
    width: "100%",
    height: ScreenHeight,
  });

  const [isPlaying, setIsPlaying] = useState(true); // State to track whether the video is playing or paused
  const videoRef = useRef(null);

  return (
    <View>
      <Video
        // source={item.source}
        source={Vid}
        style={VideoDimensions}
        resizeMode="cover"
        controls={false}
        ref={videoRef}
        paused={!isPlaying}
        repeat={true}
        muted
      />
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: {},
  video: {
    width: 120,
    height: 220,
    marginBottom: 5,
  },
});
