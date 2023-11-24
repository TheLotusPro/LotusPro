import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import PlaceHolder from "../../assets/images/Ideas/Bedroom.jpg";
import { useNavigation, useTheme } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const NotificationsCard = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.notification}>
        <Image source={PlaceHolder} style={styles.image} />

        <View style={{ marginLeft: 5 }}>
          <View>
            <Text style={[styles.notificationText, { color: colors.text }]}>
              Kitchen Magazine: Layout Inspiration | Air source heat pump
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.date}>Monday at 1:30PM</Text>
            <Text style={[styles.date, { color: "red" }]}>New</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationsCard;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderBottomWidth: 0.2,
    borderBlockColor:'gray'
  },
  notification: {
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom:25
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  notificationText: {
    width: width - 150,
    fontWeight: "bold",
  },
  date: {
    fontSize: 13,
    color: "gray",
  },
});
