import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Text } from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import HomeReno from "../../assets/images/HomeReno.jpeg";

const FindProfessionals = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={styles.title}>Find Professionals</Text>
        </View>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={styles.seeAll}>See all</Text>
          <Icons.ArrowLongRightIcon size={25} color={"dodgerblue"} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.imageContainer}>
        <View style={{flexDirection: 'column'}}>
          <Image source={HomeReno} style={styles.image} />
          <Text style={styles.imageTitle}>Home Renovations</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FindProfessionals;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  seeAll: {
    color: "dodgerblue",
    fontSize: 14,
    marginRight: 5,
  },
  image: {
    height: 100,
    width: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  imageContainer: {
    marginTop: 15,
    backgroundColor: 'white',
    width: 200,
    height: 140,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 0.1,
      width: 0.5
    }
  },
  imageTitle: {
    fontWeight: "bold",
    fontSize: 13,
    alignSelf: 'center',
    marginTop: 7
    
  },
});
