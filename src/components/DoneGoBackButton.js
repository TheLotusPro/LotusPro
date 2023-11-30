import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";

const DoneGoBackButton = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.goBack();
    }, 500); // 2000 milliseconds or 2 seconds
  };

  useEffect(() => {
    // Clear loading state when the component unmounts
    return () => setIsLoading(false);
  }, []);

  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={handlePress}>
      {isLoading ? (
        <ActivityIndicator color={"#33AB5F"} />
      ) : (
        <Text style={styles.button}>Done</Text>
      )}
    </TouchableOpacity>
  );
};

export default DoneGoBackButton;

const styles = StyleSheet.create({
  button: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#33AB5F",
  },
});
