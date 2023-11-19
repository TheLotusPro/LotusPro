import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";

const MatchHeaderButton = () => {
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
          Match with qualifed Local professionals{" "}
        </Text>
        <Text style={{ color: "black", fontSize: 13, marginTop: 5 }}>
          Search below and follow the prompts to match with a verified <Badge />
          professionals in your area.{" "}
        </Text>
      </View>

      <TouchableOpacity
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
      </TouchableOpacity>
    </View>
  );
};

export default MatchHeaderButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fa807090",
    height: 190,
  },
});
