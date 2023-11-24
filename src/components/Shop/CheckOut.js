import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CheckOut = () => {
    const navigation = useNavigation();


  return (
    <View>
     <TouchableOpacity
      onPress={() => navigation.navigate("NewReview")}
      style={styles.messageButton}
    >
      <Text style={{ fontWeight: "bold", color: "white" }}>Apple Pay</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate("NewReview")}
      style={styles.messageButton}
    >
      <Text style={{ fontWeight: "bold", color: "white" }}>Proceed to CheckOut</Text>
    </TouchableOpacity>


    </View>
  )
}

export default CheckOut

const styles = StyleSheet.create({
    messageButton: {
      backgroundColor: "#fa8072",
      padding: 20,
      alignItems: "center",
      borderRadius: 10,
  marginTop: 10,
      marginBottom: 20,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
     
    },
  });
  