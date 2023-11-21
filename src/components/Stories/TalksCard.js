import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/outline";

const TalksCard = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();


  return (
    <TouchableOpacity 
     onPress={() => navigation.navigate('TalksPostScreen')}
    style={styles.container}>
      <View style={{ padding: 20 }}>
        <Text style={[styles.title, { color: colors.text }]}>
          Building a bathroom.
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.user, { color: "gray" }]}>
            Liz Taylor Monday at 1:54 AM {"\u2022"}{" "}
          </Text>
          <Text style={[styles.topic, { color: "gray" }]}>Kitchens</Text>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icons.ChatBubbleBottomCenterIcon
              style={{ color: "gray" }}
              size={18}
            />
            <Text style={styles.commentCount}> 7</Text>
          </View>

          <Text style={styles.lastUpdate}>Updated 12 minutes ago</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TalksCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fa807210",
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
  },
  user: {
    fontSize: 13,
  },
  topic: {
    fontWeight: "bold",
    fontSize: 13,
  },
  commentCount: {
    fontSize: 13,
    color: "gray",
  },
  lastUpdate: {
    fontSize: 12,
    color: "gray",
  },
});
