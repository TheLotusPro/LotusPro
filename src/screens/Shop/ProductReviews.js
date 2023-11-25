import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import ChatInput from "../../components/Chat/ChatInput";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import Couch from "../../assets/images/Shop/Couch.jpg";
import { useTheme } from "@react-navigation/native";
import Review1 from "../../assets/images/StoriesCarousel/Stories1.jpg";
import Review2 from "../../assets/images/StoriesCarousel/Stories2.jpg";
import Review3 from "../../assets/images/StoriesCarousel/Stories3.jpg";
import WriteReviewButton from "../../components/Shop/WriteReviewButton";

const ProductReviews = ({ navigation }) => {
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
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <ReviewContainer />
      </ScrollView>
      <View
        style={{
          marginBottom: 40,
          width: "90%",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <WriteReviewButton />
      </View>
    </View>
  );
};

const Header = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.headerContainer}>
      <Image source={Couch} style={styles.productImage} />
      <View style={{ marginHorizontal: 10, alignItems: "center" }}>
        <Text style={[styles.itemText, { color: colors.text }]}>
          Louis Vuitton Couch
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Icons.StarIcon size={25} color={"gold"} />
          <Text style={[styles.ratingNumber, { color: colors.text }]}>
            {" "}
            5.0
          </Text>
        </View>

        <Text style={[styles.reviews, { color: colors.text }]}>10 Reviews</Text>
      </View>
    </View>
  );
};

const ReviewContainer = () => {
  const { colors } = useTheme();

  return (
    <View style={{ margin: 20, marginTop: 30 }}>
      <View style={styles.reviewContainer}>
        <View style={styles.user}>
          <View style={styles.avatar}>
            <Avatar>
              <AvatarFallbackText>SS</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                }}
              />
            </Avatar>
          </View>
        </View>

        <View style={styles.reviewInfoContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={[styles.username, { color: colors.text }]}>
              Josh Matthew
            </Text>
            <Text style={styles.time}>12/12/2023</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Icons.StarIcon size={20} color={"gold"} />
            <Icons.StarIcon size={20} color={"gold"} />
            <Icons.StarIcon size={20} color={"gold"} />
            <Icons.StarIcon size={20} color={"gold"} />
            <Icons.StarIcon size={20} color={"gold"} />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text>
              Nice Furniture with good delivery. The delivery time is very fast.
              Then products look like exactly the picture in the app.
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Image source={Review1} style={styles.reviewImage} />
            <Image source={Review2} style={styles.reviewImage} />
            <Image source={Review3} style={styles.reviewImage} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductReviews;

const styles = StyleSheet.create({
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemText: {
    fontWeight: "bold",
  },
  ratingNumber: {
    fontWeight: "bold",
    fontSize: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  reviews: {
    fontSize: 14,
    fontWeight: "500",
  },
  avatar: {
    right: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
  },
  reviewContainer: {
    backgroundColor: "#33AB5F20",
    bottom: 10,
    borderRadius: 10,
  },
  user: {
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
  },
  reviewInfoContainer: {
    marginHorizontal: 10,
    padding: 10,
  },
  username: {
    fontWeight: "bold",
  },
  time: {
    fontSize: 14,
    color: "gray",
  },
  reviewImage: {
    width: 60,
    height: 60,
  },
});
