import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import NotificationsCard from "../../components/Notifications/NotificationsCard";

const Notifications = ({ navigation }) => {
 

      
  return (
    <View>
     <NotificationsCard />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
