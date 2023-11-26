import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Design from "../../../assets/images/HomeDesign&Remodel/InteriorDesign.png";
import { Text } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";

const MyIdeaCard = () => {
    const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={{ margin: 10 }}>
        <Image source={Design} style={styles.image} />

        <View style={{marginTop: 10}}>
          <Text style={[styles.title, {color: colors.text}]}>My Furniture Ideas</Text>
          <Text style={[styles.ideas, {color: colors.text}]}>2 Ideas</Text>
        </View>
      </View>
    </View>
  );
};

export default MyIdeaCard;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  container: {
    backgroundColor: "#33AB5F10",
    width: 170,
    height: 240,
    margin: 15,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1
    }

  },
  title: {
fontSize: 14
  },
  ideas: {
    marginTop: 5, 
    fontWeight: 'bold', 
    fontSize: 19
  }
});
