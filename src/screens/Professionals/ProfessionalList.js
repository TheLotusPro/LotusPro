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
import ProfessionalListHeader from "../../components/Professionals/ProfessionalList/ProfessionalListHeader";

const ProfessionalList = () => {
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

  return (
    <View>
  <ProfessionalListHeader />
  
      <ProfessionalListCard />
    </View>
  );
};


export default ProfessionalList;

const styles = StyleSheet.create({});
