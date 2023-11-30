import { StyleSheet, View, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const MatchHeaderButton = () => {
  const navigation = useNavigation();
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);

  const handlePress = () => {
    setShowActivityIndicator(true);
    setTimeout(() => {
      setShowActivityIndicator(false);
      navigation.navigate('MatchPros');
    }, 500);
  };

  const Badge = () => {
    return (
      <View style={{ marginBottom: -3, marginHorizontal: 2 }}>
        <Icons.CheckBadgeIcon
          style={{ color: "dodgerblue", marginBottom: 2 }}
          size={18}
        />
      </View>
    );
  };



  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>
          Match with qualifed local professionals{" "}
        </Text>
        <Text style={{ color: "black", fontSize: 13, marginTop: 5 }}>
          Search below and follow the prompts to match with a verified <Badge />
          professionals in your area.{" "}
        </Text>
      </View>

      <TouchableOpacity
      onPress={handlePress}
        style={{
          marginHorizontal: 20,
          backgroundColor: "black",
          borderRadius: 10,

        }}
      >
        <View style={{ margin: 10, flexDirection: "row" }}>
          <Icons.MagnifyingGlassCircleIcon
            style={{ color: "white" }}
            size={20}
          />
          <Text style={{ color: "white", fontSize: 13, marginHorizontal: 5 }}>
            Search to match
          </Text>
        </View>
        {/* Show the activity indicator if showActivityIndicator is true */}
      {showActivityIndicator && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="small" color="white" />
        </View>
      )}
      </TouchableOpacity>
    </View>
  );
};

export default MatchHeaderButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#33AB5F90",
    height: 190,
  },
});
