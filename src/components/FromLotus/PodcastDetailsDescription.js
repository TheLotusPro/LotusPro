import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";

const PodcastDetailsDescription = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.description, { color: colors.text }]}>
        Building your first home is an exhilarating journey of turning dreams
        into reality. Begin by outlining your needs, desires, and budget.
        Consult with architects to design a space that reflects your lifestyle.
        Choose a reputable builder and secure necessary permits. Select durable
        materials and energy-efficient systems for long-term sustainability.
        Stay actively engaged throughout construction, attending regular site
        visits. Embrace the process, addressing challenges with flexibility. As
        the foundation takes shape, witness the evolution of your vision into a
        tangible haven. Finally, celebrate the joy of crafting a personalized
        abode that welcomes you home for years to come.
      </Text>
    </View>
  );
};

export default PodcastDetailsDescription;

const styles = StyleSheet.create({
  description: {
    fontWeight: "400",
    marginBottom: 15

  },
  container: {
    margin: 10,
    marginBottom: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray'
  },
});
