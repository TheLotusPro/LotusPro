import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const IdeasHeader = () => {
  return (
    <View style={styles.container}>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}> 
            All Photos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Videos
          </Text>
        </TouchableOpacity>
      </View>


      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            From Lotus
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            IdeasHeader
          </Text>
        </TouchableOpacity>
      </View>





    </View>
  );
};

export default IdeasHeader;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: "#fa8072",
    width: 170,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
});
