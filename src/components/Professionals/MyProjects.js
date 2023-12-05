import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import PlaceHolder from "../../assets/images/HomeDesign&Remodel/DesignBuildFirm.jpeg";
import * as Icons from "react-native-heroicons/solid";

const MyProjects = (props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("MyProjects")}>
      <View
        style={{
         
          marginBottom: 5,
        }}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={props?.myProjects?.image} />
          <View style={styles.textContainer}>
            <Text style={[styles.title, { color: colors.text }]}>
              {props?.myProjects?.title}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.MapPinIcon size={14} color={"dodgerblue"} />
              <Text style={styles.location}>{props?.myProjects?.location}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MyProjects;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 220,
    backgroundColor: "#fa807210",
    borderRadius: 10,

    marginHorizontal: 10,

    marginBottom: 20,
    shadowColor: "gray",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
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
