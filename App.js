import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Navigation from './src/navigation/index'

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
       <Navigation />
      </View>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
