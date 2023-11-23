import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
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
import ProfileButtons from "../../components/Profile/ProfileButtons";

const { width } = Dimensions.get("window");

const ClientProfile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <ProfileButtons />
    </ScrollView>
  );
};

const Header = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View>
      <Image style={{ width: width, height: 200 }} source={PlaceHolder} />

      <View>
        <View style={styles.avatar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ bottom: 40 }}>
              <Avatar
                style={{ borderWidth: 3, borderColor: "white" }}
                size="xl"
              >
                <AvatarFallbackText>SS</AvatarFallbackText>
                <AvatarImage
                  size="xl"
                  source={{
                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  }}
                />
              </Avatar>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("EditClientProfile")}
              style={{ marginHorizontal: 10, marginTop: 19 }}
            >
              <Text style={[styles.username, { color: "gray" }]}>
                Sam Atwell
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={[styles.username, { color: colors.text }]}>
                  Matt Jacobs Designers{" "}
                </Text>
                <Icon.CheckBadgeIcon
                  size={20}
                  color={"dodgerblue"}
                  style={styles.icon}
                />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon.StarIcon
                  size={18}
                  color={colors.text}
                  style={styles.star}
                />
                <Icon.StarIcon
                  size={18}
                  color={colors.text}
                  style={styles.star}
                />
                <Icon.StarIcon
                  size={18}
                  color={colors.text}
                  style={styles.star}
                />
                <Icon.StarIcon
                  size={18}
                  color={colors.text}
                  style={styles.star}
                />
                <Icon.StarIcon
                  size={18}
                  color={colors.text}
                  style={styles.star}
                />

                <Text style={styles.reviewText}>(20)Reviews</Text>
              </View>
              <Icons.CogIcon
                size={30}
                color={colors.text}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ClientProfile;

const styles = StyleSheet.create({
  avatar: {
    position: "relative",
    bottom: 10,
    left: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 18,
  },
  icon: {
    marginTop: 5,
  },
  star: {
    color: "gold",
  },
  reviewText: {
    color: "gray",
    fontSize: 13,
  },


});
