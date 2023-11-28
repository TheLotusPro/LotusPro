import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";
import podcast from "../../assets/data/podcast";

const PodcastInformation = () => {
  return (
    <View style={styles.container}>
      <Title />

      {podcast.map((item, index) => (
          <View
            key={index}
            // style={{
            //   alignItems: 'center',
            //   width: "48%", // Set the width of each HomeDesignCard
            //   margin: "1%", // Adjust margin as needed
            // }}
          >
            <Details podcast={item} />
          </View>
        ))}
    </View>
  );
};

const Title = () => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={[styles.title, { color: colors.text }]}>Information</Text>
    </View>
  );
};

const Details = (props) => {
  const { colors } = useTheme();

  return (
    <View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={[{color: colors.text}]}>Channel</Text>
          <Text>{props?.podcast?.channel}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
        <Text style={[{color: colors.text}]}>Creator</Text>
          <Text>{props?.podcast?.creator}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
        <Text style={[{color: colors.text}]}>Joined</Text>
          <Text>{props?.podcast?.joinDate}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
        <Text style={[{color: colors.text}]}>Episodes</Text>
          <Text>{props?.podcast?.episodes}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
        <Text style={[{color: colors.text}]}>Rating</Text>
        <Text style={[{color: 'gold'}]}>{props?.podcast?.rating}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
        <Text style={[{color: colors.text}]}>Copyright</Text>
          <Text>{props?.podcast?.copyright}</Text>
        </View>
      </View>


    </View>
  );
};

export default PodcastInformation;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    margin: 10,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  infoContainer: {
    marginTop: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
