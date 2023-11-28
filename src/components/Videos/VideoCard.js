import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import PlaceHolder from "../../assets/images/Ideas/Bedroom.jpg";

const VideoCard = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={props?.videos?.video} style={styles.video} />
      </View>
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: {

    


   
  },
  video: {
    width: 120,
    height: 220,
    marginBottom: 5,
   
  },
});
