import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import FollowersCard from "../../components/Follow/FollowersCard";

const Followers = ({ navigation }) => {
 
  return (
    <View>
     <FollowersCard />
    </View>
  )
}

export default Followers

const styles = StyleSheet.create({})