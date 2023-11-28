import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import PlaceHolder from "../../assets/images/HomeDesign&Remodel/DesignBuildFirm.jpeg";
import MyProjects from "../../components/Professionals/MyProjects";
import myProjects from "../../assets/data/myProjects";
import BusinessDetails from "../../components/Professionals/BusinessDetails";
import NewMessageButton from "../../components/Chat/NewMessageButton";
import Reviews from "../../components/Professionals/Reviews";
import reviews from "../../assets/data/reviews";
import Faq from "../../components/Professionals/Faq";

const ProfessionalDetails = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <AboutUs />
        <Projects />
        <BusinessDetails />
        <Review />
        <Faq />
      </ScrollView>
      <View
        style={{
          marginBottom: 40,
          width: "90%",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <NewMessageButton />
      </View>
    </View>
  );
};

const Header = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View>
      <View>
        <Image source={PlaceHolder} style={styles.image} />
      </View>

      <View style={styles.userContainer}>
        <View style={{ flexDirection: "row" }}>
          <Avatar style={styles.userImage}>
            <AvatarFallbackText>SS</AvatarFallbackText>
            <AvatarImage
              size="xl"
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </Avatar>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.username, { color: "black" }]}>
                {" "}
                James General Contractors{" "}
              </Text>
              <Icons.CheckBadgeIcon style={{ color: "dodgerblue" }} size={20} />
            </View>

            <View style={styles.reviewContainer}>
              <View style={{ flexDirection: "row" }}>
                <Icons.StarIcon size={14} color={"gold"} />
                <Icons.StarIcon size={14} color={"gold"} />
                <Icons.StarIcon size={14} color={"gold"} />
                <Icons.StarIcon size={14} color={"gold"} />
                <Icons.StarIcon size={14} color={"gold"} />
              </View>

              <Text style={[styles.reviewText, { color: "black" }]}>
                (20) Reviews
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Icons.CheckBadgeIcon style={{ color: "dodgerblue" }} size={15} />
              <Text style={[{ color: "black", fontSize: 13 }]}>
                {" "}
                Verified User
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Icons.FireIcon style={{ color: "red" }} size={15} />
              <Text style={[{ color: "black", fontSize: 13 }]}>
                {" "}
                Responds Quickly
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Icons.ClockIcon style={{ color: "gold" }} size={15} />
            <Text style={[{ color: "black", fontSize: 13 }]}>
              {" "}
              General Contractor
            </Text>
          </View>
        </View>
      </View>

    
    </View>
  );
};

const AboutUs = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.aboutContainer}>
      <Text style={[styles.title, { color: colors.text }]}>About Us</Text>
      <View style={{ marginTop: 10 }}>
        <Text style={[styles.aboutUs, { color: colors.text }]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Text>
      </View>
    </View>
  );
};

const Projects = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.projectsContainer}>
      <Text style={[styles.title, { color: colors.text }]}>Projects</Text>
      <FlatList
        data={myProjects}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <MyProjects myProjects={item} />}
      />
    </View>
  );
};

const Review = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.projectsContainer}>
      <Text style={[styles.title, { color: colors.text }]}>Reviews</Text>
      <FlatList
        data={reviews}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Reviews reviews={item} />}
      />
    </View>
  );
};

export default ProfessionalDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  backButton: {
    position: "absolute",
    top: 60,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    padding: 5,
    borderRadius: 10,
  },
  userContainer: {
    padding: 30,
    backgroundColor: "#e0ffff",
    bottom: 30,

    alignSelf: "center",
    borderRadius: 25,
    shadowColor: "#2f4f4f",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  username: {
    fontWeight: "bold",
  },
  reviewContainer: {
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  reviewText: {
    fontSize: 12,
  },
  respond: {
    fontSize: 12,
    marginTop: 10,
  },
  aboutContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
  },
  aboutUs: {
    fontSize: 14,
  },
  projectsContainer: {
    marginHorizontal: 20,
  },
});
