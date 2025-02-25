import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import PlaceHolder from "../../assets/images/HomeReno.jpeg";

const HomeDesignCard = (props) => {
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
        style={styles.container}>
          <Image style={styles.image} source={props?.homeDesign?.image} />
          <View style={styles.textContainer}>
            <Text style={[styles.title, {color: colors.text}]}>{props?.homeDesign?.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeDesignCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#33AB5F10",
    width: "100%",
    borderRadius: 5,
    height: 200,
    shadowColor: "#2f4f4f",
    shadowColor: "gray",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }

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

    fontSize: 13,
  },
});
