import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";

const HomeImprovementCard = (props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity  onPress={() => navigation.navigate("ProfessionalList")}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 5,
          marginBottom: 5,
        }}
      >
        <View
          onPress={() => navigation.navigate("Professionals")}
          style={styles.container}
        >
          <Image style={styles.image} source={props?.homeImprovement?.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props?.homeImprovement?.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeImprovementCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0ffff",
    width: "100%",
    borderRadius: 5,
    height: 200,
    shadowColor: "#2f4f4f",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  image: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textContainer: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  title: {
    fontWeight: "500",
    color: "black",
    fontSize: 13,
  },
});
