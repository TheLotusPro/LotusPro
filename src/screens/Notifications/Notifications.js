import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import NotificationsCard from "../../components/Notifications/NotificationsCard";

const Notifications = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ width: 50 }}
            >
              <Icons.ArrowLongLeftIcon style={{ color: "#33AB5F" }} size={30} />
            </TouchableOpacity>
          ),
        });
      }, [navigation]);

      
  return (
    <View>
     <NotificationsCard />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
