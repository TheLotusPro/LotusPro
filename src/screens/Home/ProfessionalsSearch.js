import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import MatchHeaderButton from "../../components/Match/MatchHeaderButton";
import HomeDesignCard from "../../components/Professionals/HomeDesignCard";
import homeDesign from "../../assets/data/homeDesign";

const ProfessionalsSearch = ({ navigation }) => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50 }}
        >
          <Icons.ArrowLongLeftIcon style={{ color: "#fa8072" }} size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <MatchHeaderButton />
      <HomeDesign />
    </ScrollView>
  );
};

const HomeDesign = () => {
  const { colors } = useTheme();

  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ marginTop: 10, marginBottom: 20 }}>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.title, { color: colors.text }]}>
            Home Design & Remodeling
          </Text>
          <Text style={{ fontSize: 13, color: "#fa807290" }}>
            Swift to see more
          </Text>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={homeDesign}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <HomeDesignCard homeDesign={item} />}
          // ListHeaderComponent={Header}
        />
      </View>
    </View>
  );
};

const HomeImprovement = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <Text style={styles.title}>Home Improvement</Text>
      </View>
      <View style={{ marginTop: 10, marginBottom: 20 }}>
        <HomeDesignCard />
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
    marginBottom: 10,
  },
  listContainer: {
    flexDirection: "row",
  },
});
