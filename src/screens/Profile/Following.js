import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import FollowingCard from "../../components/Follow/FollowingCard";

const Following = ({ navigation }) => {

  return (
    <View>
      <FollowingCard />
    </View>
  )
}

export default Following

const styles = StyleSheet.create({})