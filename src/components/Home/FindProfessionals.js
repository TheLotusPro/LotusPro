import { StyleSheet, TouchableWithoutFeedback, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import HomeReno from "../../assets/images/HomeReno.jpeg";

const FindProfessionals = (props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback style={styles.imageContainer}>
        <View style={{ flexDirection: "column" }}>
          <Image source={props?.proData?.image} style={styles.image} />
          <Text style={styles.imageTitle}>{props?.proData?.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FindProfessionals;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#708090',
    shadowColor: "gray",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 0.5,
      width: 0.5
    },
    borderRadius: 10,
    height: 135,
    marginBottom: 20

  
  },
  image: {
    height: 100,
    width: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  imageContainer: {
    marginTop: 15,
    backgroundColor: "white",

    borderRadius: 10,
  
  },
  imageTitle: {
    fontWeight: "bold",
    fontSize: 13,
    alignSelf: "center",
    marginTop: 5,
    color: 'white'

  },
});
