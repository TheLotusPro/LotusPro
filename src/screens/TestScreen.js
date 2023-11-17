import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from "@react-navigation/native";
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', source: require('../assets/images/ArchitecturalDesigns.jpeg') },
  { id: '2', source: require('../assets/images/ArchitecturalDrawing.jpeg') },
  { id: '3', source: require('../assets/images/BathroomRemodeling.jpeg') },
];
const TestScreen = () => {
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

    
      <SafeAreaView style={styles.container}>
      <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
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
   
    </SafeAreaView>

  )
}

export default TestScreen

const styles = StyleSheet.create({
  container: {


    backgroundColor: 'red',

  },
  slide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  paginationContainer: {
    marginTop: -20,
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