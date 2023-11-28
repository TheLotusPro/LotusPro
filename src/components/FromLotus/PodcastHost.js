import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";

const PodcastHost = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      {/* user */}
      <View style={styles.userContainer}>
        <Avatar size="xl">
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            size="xl"
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            }}
          />
        </Avatar>
        <View>
          <Text style={[styles.user, { color: colors.text }]}>James David</Text>

          <Text style={[styles.userTitle, { color: colors.text }]}>
            Lotus CEO
          </Text>
        </View>
        {/* user */}
      </View>

         {/* user */}
         <View style={styles.userContainer}>
        <Avatar size="xl">
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            size="xl"
            source={{
              uri: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
        </Avatar>
        <View>
          <Text style={[styles.user, { color: colors.text }]}>Morgan Lindsey</Text>

          <Text style={[styles.userTitle, { color: colors.text }]}>
            Lotus CFO
          </Text>
        </View>
        {/* user */}
      </View>
      
    </View>
  );
};

export default PodcastHost;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  userTitle: {
    fontWeight: "500",
    fontSize: 14,
  },
  user: {
    fontWeight: "bold",
    fontSize: 16,
  },
  userContainer: {
    padding: 10
  }
});
