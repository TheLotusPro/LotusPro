import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import HistoryCard from "../../components/History/HistoryCard";
import { useTheme } from "@react-navigation/native";

const History = ({ navigation }) => {
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
    <View style={{margin: 15}}>
    <Date />
      <HistoryCard />
    </View>
  )
}

const Date = () => {
  const { colors } = useTheme();

  return (
    <View style={{margin: 10}}>
      <Text style={[styles.date, {color: colors.text}]}>Today</Text>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  date: {
    fontWeight: 'bold'
  }
})