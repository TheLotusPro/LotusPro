import { StyleSheet, Text, View } from "react-native";
import React from "react";
import VideoCard from "../../components/Videos/VideoCard";
import videos from "../../assets/videos";

const VideoHome = () => {
  return (
    <View>
      <VideoThumbnail />
    </View>
  );
};

const VideoThumbnail = () => {
  return (
    <View>
      <VideoCard />

      {/* 
     {videos.map((item, index) => (
        <View
          key={index}
          style={{
            width: 115, // Set the width
            // Adjust margin as needed
            margin: '1%'
           
         
          }}
        >
          <VideoCard videos={item} />
        </View>
      ))} */}
    </View>
  );
};

export default VideoHome;

const styles = StyleSheet.create({});
