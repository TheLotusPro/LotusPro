import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import PlaceHolder from "../../assets/images/HomeDesign&Remodel/DesignBuildFirm.jpeg";
import * as Icons from "react-native-heroicons/solid";

const MyProjects = (props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 5,
          marginBottom: 5,
        }}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={props?.myProjects?.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props?.myProjects?.title}</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.MapPinIcon size={14} color={"dodgerblue"} />
              <Text style={styles.location}>{props?.myProjects?.location}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyProjects;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 200,
    backgroundColor: "#e0ffff",
    borderRadius: 10,

    marginBottom: 20,
    shadowColor: "gray",
    shadowOpacity: 1.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1,
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
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontWeight: "500",
    color: "black",
    fontSize: 13,
  },
  location: {
    color: "gray",
    fontSize: 12,
  },
});
