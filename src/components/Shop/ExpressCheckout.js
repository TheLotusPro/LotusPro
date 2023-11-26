import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { Entypo } from "@expo/vector-icons";


const ExpressCheckout = () => {
    const { colors } = useTheme();

  const handlePress = async () => {
    const url = "https://www.paypal.com/us/signin";

    // Checking if the link is supported
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link in the default browser
      await Linking.openURL(url);
    } else {
      console.error("Don't know how to open URI: " + url);
    }
  };
  
    return (
      <View
        style={{
          backgroundColor: "#fa807210",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <View style={{ padding: 10 }}>
          <Text style={[styles.boldText, { color: colors.text }]}>Express</Text>
        </View>
  
        <TouchableOpacity 
         onPress={handlePress}
        style={styles.buttonContainer}>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="paypal" size={24} color="white" />
            <Text style={{ marginLeft: 5, fontWeight: "bold", color: "white" }}>
              PayPal
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

export default ExpressCheckout

const styles = StyleSheet.create({
    boldText: {
        fontWeight: "bold",
        fontSize: 18,
      },
      buttonContainer: {
        backgroundColor: "black",
        width: "90%",
        marginBottom: 10,
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
      },
})