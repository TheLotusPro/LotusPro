import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import P1 from "../../assets/images/PodcastImages/p1.jpg";
import { useNavigation, useTheme } from "@react-navigation/native";

const LatestPodcast = (props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <Pressable 
     onPress={() => navigation.navigate('PodcastDetails')}
    style={styles.container}>
      <Image source= {props?.podcast?.image} style={styles.image} />
      <View style={{ marginBottom: 10, padding: 5 }}>
        <Text style={[styles.title, { color: colors.text }]}>
         {props?.podcast?.title}
        </Text>
        <Text style={[styles.user, { color: 'gray' }]}>by {props?.podcast?.user}</Text>
      </View>
    </Pressable>
  );
};

export default LatestPodcast;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 120,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container: {
    backgroundColor: "#fa807210",
    width: 200,
    margin: 5,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  title: {
    fontWeight: 400,
  },
  user: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
