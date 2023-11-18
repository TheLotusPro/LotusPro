import React, { useState, forwardRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";

const Footer = () => {
  const { colors } = useTheme();
  const [message, setMessage] = useState("");

  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.button}>
        <Icons.DevicePhoneMobileIcon size={15} color={"white"} style={{marginRight: 5}}/>
        <Text style={styles.buttonText}>Try with AR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {backgroundColor: "#fa8072"}]}>
      <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    paddingHorizontal:20,
    paddingVertical: 20,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: 'space-around',
   
  
  },

  button: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    flexDirection: "row",
    width: 160,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white'
  }
});
