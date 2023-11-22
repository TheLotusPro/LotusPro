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

const ProfessionalDetails = ({ navigation }) => {

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
    <View>
      <Text>ProfessionalDetails</Text>
    </View>
  )
}

export default ProfessionalDetails

const styles = StyleSheet.create({})