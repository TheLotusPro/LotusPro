import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

const PodcastDetailsHeader = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.background, "#33AB5F80", "#33AB5F99"]}
        style={styles.linearGradient}
      >
        <SafeAreaView>
          <Text style={[{ color: colors.text }]}>PodcastDetailsHeader</Text>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default PodcastDetailsHeader;

const styles = StyleSheet.create({
  container: {
    height: 300,
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
