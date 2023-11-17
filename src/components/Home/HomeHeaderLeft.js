import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {useNavigation, useTheme} from '@react-navigation/native';
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from '@gluestack-ui/themed';

const HomeHeaderLeft = () => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View>
      <Avatar style={styles.userImage}>
      <AvatarFallbackText>SS</AvatarFallbackText>
      <AvatarImage
     style={styles.userImage}
        source={{
          uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        }}
      />
    </Avatar>
      </View>
      <View style={{marginLeft: 5}}>
        <Text style={[styles.greeting, {color: colors.text}]}>Good Day</Text>
        <Text style={[styles.username, {color: colors.text}]}>Sam!</Text>
      </View>
    </View>
  );
};

export default HomeHeaderLeft;

const styles = StyleSheet.create({
  username: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    height: 35,
    width: 35
  },
  greeting: {
    fontSize: 11
  }
  
});
