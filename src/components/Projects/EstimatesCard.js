import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";

const EstimatesCard = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);

    // Simulate a 5-second delay before navigating
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("EstimatesDetails");
    }, 800);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.estimateContainer}>
        <View style={{ flexDirection: "row" }}>
          {loading ? (
            <ActivityIndicator size="small" color="green" />
          ) : (
            <View style={styles.statusContainer}>
              <Text style={[{ color: colors.text }]}>Approved</Text>
            </View>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={[{ color: colors.text }]}>Total: $0.00</Text>
          <Text style={[{ color: colors.text }]}>Balance: $0.00</Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={[styles.estimateFor, { color: colors.text }]}>
            Estimate: Home Remodeling
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EstimatesCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  estimateContainer: {
    padding: 20,
    backgroundColor: "#fa807210",
  },
  estimateFor: {
    fontWeight: "bold",
  },
  statusContainer: {
    marginBottom: 10,
    borderColor: "green",
    borderWidth: 1,
    maxWidth: 190,
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },
});
