import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from "react-native";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Navigation from './src/navigation/index'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
       <Navigation />
      </View>
    </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
});
