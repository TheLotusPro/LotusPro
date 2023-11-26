import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CheckOut = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);

    // Simulate a 5-second delay before navigating
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("CheckOut");
    }, 2000);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.messageButton}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Proceed to CheckOut
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  messageButton: {
    backgroundColor: "#33AB5F",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

