import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";

const SelectProfessionals = (props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);

  const handlePress = () => {
    setShowActivityIndicator(true);
    setTimeout(() => {
      setShowActivityIndicator(false);
      navigation.navigate("Zip");
    }, 500);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.matchContainer}>
        <Text style={[styles.title, { color: colors.text }]}>
          {props?.match?.title}
        </Text>
      </View>

      {showActivityIndicator && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="small" color="#33AB5F" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SelectProfessionals;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
  },
  matchContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
  },
});
