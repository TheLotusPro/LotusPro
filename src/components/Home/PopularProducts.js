import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Design from "../../assets/images/BathroomRemodeling.jpeg";
import { Text } from "@gluestack-ui/themed";
import { useNavigation, useTheme } from "@react-navigation/native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Lightbox from "react-native-lightbox-v2";

const { width } = Dimensions.get("window");

const data = [
  { id: "1", source: require("../../assets/images/ArchitecturalDesigns.jpeg") },
  { id: "2", source: require("../../assets/images/ArchitecturalDrawing.jpeg") },
  { id: "3", source: require("../../assets/images/BathroomRemodeling.jpeg") },
];

const PopularProducts = () => {
  const { colors } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        {/* You can render your image or video component here */}
        <Image source={item.source} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={width - 20}
          itemWidth={width - 20}
          style={styles.image}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.dotStyle}
          inactiveDotStyle={styles.inactiveDotStyle}
          inactiveDotOpacity={0.6}
          inactiveDotScale={0.8}
        />

        <View style={styles.imageCountContainer}>
          <Text style={styles.imageCountText}>
            {activeSlide + 1}/{data.length}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("DesignProductDetails")}
        style={{ margin: 5, marginTop: 5, padding: 5 }}
      >
        <Text style={[styles.title, { color: "black" }]}>
          Victorian Villa Designs
        </Text>
        <Text style={[styles.user, { color: "black" }]}>
          by James Architecture Group
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PopularProducts;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#e0ffff",
    borderRadius: 10,
    maxHeight: 350,
    shadowColor: "gray",
    shadowOpacity: 1.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
  },
  user: {
    fontWeight: "bold",
  },
  paginationContainer: {
    marginTop: -20,
    marginBottom: -30,
  },
  dotStyle: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#fa8072",
  },
  inactiveDotStyle: {
    // You can customize the inactive dot style here
  },
  imageCountContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fa807250",
    padding: 5,
    borderRadius: 10,
  },
  imageCountText: {
    color: "white",
    fontSize: 14,
  },
});
