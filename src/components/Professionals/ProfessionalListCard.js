import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import PlaceHolder from "../../assets/images/HomeImprovement/Cabinets.jpeg";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import NewMessageButton from "../Chat/NewMessageButton";

const ProfessionalListCard = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("ProfessionalDetails")}
      style={styles.container}
    >
      <View>
        <Image source={PlaceHolder} style={styles.image} />
      </View>
      <View style={styles.avatar}>
        <Avatar style={styles.userImage}>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            size="xl"
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            }}
          />
        </Avatar>
        <View style={styles.userContainer}>
          <View>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 230 }}
            >
              <Text style={[styles.username, { color: colors.text }]}>
                James General Contractors{" "}
              </Text>
              <Icons.CheckBadgeIcon size={14} color={"dodgerblue"} />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.GlobeAmericasIcon size={14} color={"dodgerblue"} />
              <Text style={[styles.location, { color: colors.text }]}>
                {" "}
                Park City, Utah
              </Text>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <Icons.StarIcon size={14} color={"gold"} />
              <Icons.StarIcon size={14} color={"gold"} />
              <Icons.StarIcon size={14} color={"gold"} />
              <Icons.StarIcon size={14} color={"gold"} />
              <Icons.StarIcon size={14} color={"gold"} />
            </View>

            <Text style={[styles.reviewText, { color: colors.text }]}>
              (20) Reviews
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: -10 }}>
          <NewMessageButton />
        </View>
      </View>
    </Pressable>
  );
};

export default ProfessionalListCard;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderRadius: 10,
    backgroundColor: "#33AB5F10",
    shadowColor: "gray",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  avatar: {
    // position: "absolute",
    bottom: 20,

    marginHorizontal: 10,
  },
  userImage: {
    width: 70,
    height: 70,
    borderWidth: 3,
    borderColor: "white",
  },
  userContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontWeight: "bold",
  },
  location: {
    fontSize: 12,
    color: "gray",
  },
  reviewText: {
    fontSize: 12,
  },
});
