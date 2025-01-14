import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import MatchHeaderButton from "../../components/Match/MatchHeaderButton";
import HomeDesignCard from "../../components/Professionals/HomeDesignCard";
import homeDesign from "../../assets/data/homeDesign";
import homeImprovement from "../../assets/data/homeImprovement";
import HomeImprovementCard from "../../components/Professionals/HomeImprovementCard";

const ProfessionalsSearch = ({ navigation }) => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MatchHeaderButton />
      <HomeDesign />
      <HomeImprovement />
    </ScrollView>
  );
};


const HomeDesign = () => {
  const { colors } = useTheme();

  return (
    <View style={{ marginTop: 10, flexDirection: "row", flexWrap: "wrap", marginBottom: 10 }}>
      <View
        style={{
          width: "100%", // Set the width of the container to 100%
          marginHorizontal: 15,
          marginTop: 10,
        }}
      >
        <Text style={[styles.title, { color: colors.text }]}>
          Home Design & Remodeling
        </Text>
      </View>
      {homeDesign.map((item, index) => (
        <View
          key={index}
          style={{
            width: "48%", // Set the width of each HomeDesignCard
            margin: "1%", // Adjust margin as needed
          }}
        >
          <HomeDesignCard homeDesign={item} />
        </View>
      ))}
    </View>
  );
};

const HomeImprovement = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <Text style={[styles.title, {color: colors.text}]}>Home Improvement</Text>
      </View>
      <View style={{ marginTop: 10, marginBottom: 20 }}>
      {homeImprovement.map((item, index) => (
        <View
          key={index}
          style={{
            width: "48%", // Set the width of each HomeDesignCard
            margin: "1%", // Adjust margin as needed
          }}
        >
          <HomeImprovementCard homeImprovement={item} />
        </View>
      ))}
      
      </View>
    </View>
  );
};

// const HomeServices = () => {
//     return (
//       <View style={{  marginTop: 10 }}>
//       <View style={{ marginHorizontal: 10, marginTop: 10 }}>
//         <Text style={styles.title}>Home Services</Text>
//       </View>
//       <View style={{ marginTop: 10, marginBottom: 20 }}>
//         <HomeDesignCard />
//       </View>
//     </View>
//     );
//   };

export default ProfessionalsSearch;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  listContainer: {
    flexDirection: "row",
  },
});
