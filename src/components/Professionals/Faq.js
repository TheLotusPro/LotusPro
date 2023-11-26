import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const Faq = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.header}>
      <View>
        <Text style={[styles.headerTitle, { color: colors.text }]}>FAQ's</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.faq}>
          <Text style={[styles.question,{ color: colors.text }]}>
            How is Outsider Interior Design rated?
          </Text>
          <Text style={styles.answer}>
            Outsider Interior Design is currently rated 5 overall out of 5.
          </Text>
        </View>

        <View style={styles.faq}>
          <Text style={[styles.question, { color: colors.text }]}>
            What services does Outsider Interior Design provide?
          </Text>
          <Text style={styles.answer}>
            Outsider Interior Design provides the following services: 3D
            Rendering, Art Selection, Bathroom Design, Bedroom Design, Color
            Consulting, Dining Room Design, Furniture Selection, Interior
            Design, Kitchen Design, Living Room Design, Project Management,
            Space Planning, Architectural Drawings, Landscape Design, New Home
            Construction, Staircase Design?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fa807210",
    marginBottom: 30,
    shadowColor: "gray",
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1
    },
    borderRadius: 10
  },
  header: {
    marginHorizontal: 20,
    

  },
  headerTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
  },
  question: {
    fontWeight: "bold",
  },
  answer: {
    marginTop: 10,
    color: 'gray'
 
  },
  faq: {
    marginBottom: 20,
  },
});
