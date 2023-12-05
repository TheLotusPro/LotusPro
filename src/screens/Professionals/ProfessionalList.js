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
import ProfessionalListCard from "../../components/Professionals/ProfessionalListCard";
import MatchHeaderButton from "../../components/Match/MatchHeaderButton";

const ProfessionalList = () => {
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

  return (
    <View>
    <Header />
  
      <ProfessionalListCard />
    </View>
  );
};

const Header = () => {
  return (
    <View>
      <View>
        <Text>Header</Text>
      </View>
    </View>
  )
}
export default ProfessionalList;

const styles = StyleSheet.create({});
