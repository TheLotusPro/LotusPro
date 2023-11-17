import { StyleSheet, View, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import Design from "../../assets/images/BathroomRemodeling.jpeg";
import { Text } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', source: require('../../assets/images/ArchitecturalDesigns.jpeg') },
  { id: '2', source: require('../../assets/images/ArchitecturalDrawing.jpeg') },
  { id: '3', source: require('../../assets/images/BathroomRemodeling.jpeg') },
];

const PopularProducts = () => {
  const { colors } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);

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
        sliderWidth={width -20}
        itemWidth={width -20}
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

      </View>
      <View style={{ margin: 5, marginTop: 5, padding: 5 }}>
        <Text style={[styles.title, { color: "white" }]}>
          Victorian Villa Designs
        </Text>
        <Text style={[styles.user, { color: "white" }]}>
          by James Architecture Group
        </Text>
      </View>
    </View>
  );
};

export default PopularProducts;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#fa8072",
    borderRadius: 10,
    maxHeight: 350,
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
    marginBottom: -30
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  inactiveDotStyle: {
    // You can customize the inactive dot style here
  },
});
