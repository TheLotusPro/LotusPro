import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/outline";
import * as Icon from "react-native-heroicons/solid";
import { useNavigation, useTheme } from "@react-navigation/native";
import PlaceHolder from "../../assets/images/BuildingDesign.jpeg";

const { width } = Dimensions.get("window");

const ClientProfile = () => {
  return (
    <ScrollView>
      <Header />
    </ScrollView>
  );
};

const Header = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View>
      <Image style={{ width: width, height: 200 }} source={PlaceHolder} />

      <View style={styles.avatar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar size="xl">
            <AvatarFallbackText>SS</AvatarFallbackText>
            <AvatarImage
              size="xl"
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </Avatar>

          <TouchableOpacity 
          onPress={() => navigation.navigate('EditClientProfile')}
          style={{ marginHorizontal: 10, marginTop: 50 }}>
            <Text style={[styles.username, {color: colors.text}]}>Sam Atwell</Text>
            <Icons.CogIcon size={35} color={colors.text} style={styles.icon}/>


          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ClientProfile;

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    top: 160,
    left: 20,
    zIndex: 1,
  },
  username: {
    fontWeight: "bold",
    fontSize: 20,
  },
  icon: {
    marginTop: 5
  }
});
