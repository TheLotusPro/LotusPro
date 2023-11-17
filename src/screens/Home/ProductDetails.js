import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from 'react-native-heroicons/outline';

const { width } = Dimensions.get("window");

const data = [
  { id: "1", source: require("../../assets/images/ArchitecturalDesigns.jpeg") },
  { id: "2", source: require("../../assets/images/ArchitecturalDrawing.jpeg") },
  { id: "3", source: require("../../assets/images/BathroomRemodeling.jpeg") },
];

const ProductDetails = () => {
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

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
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

      {/* Add the Go Back button at the top left */}
      <Icons.ArrowLeftCircleIcon
        onPress={goBack}
        size={40}
  
        style={[styles.backButton, {color: '#fa8072'}]}
      />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  slide: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 300,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
    top: 50,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 20,
  },
  imageCountText: {
    color: "white",
    fontSize: 14,
  },
  backButton: {
    position: "absolute",
    top: 43,
    left: 20,
    zIndex: 1, // Set a higher zIndex to make sure it's on top
  },
});
