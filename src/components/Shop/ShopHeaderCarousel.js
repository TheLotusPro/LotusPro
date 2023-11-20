import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Video from 'react-native-video';

const mediaData = [
  { type: 'image', source: require('../../assets/images/HomeReno.jpeg') },
  { type: 'video', source: require('../../assets/images/Video.mp4') },
  { type: 'image', source: require('../../assets/images/Kitchen.jpeg') },
  { type: 'image', source: require('../../assets/images/LandscapeDesign.jpeg') },
  // Add more media items as needed
];

const ShopHeaderCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);
  
    const renderItem = ({ item }) => {
      if (item.type === 'image') {
        return <Image style={styles.media} source={item.source} />;
      } else if (item.type === 'video') {
        return (
          <Video
            source={item.source}
            style={styles.media}
            muted={true}
            resizeMode="cover"
            repeat={true}
            controls={false}
          />
        );
      }
    };
  
    const handleSnapToItem = (index) => {
      setActiveIndex(index);
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const newIndex = (activeIndex + 1) % mediaData.length;
        carouselRef.current.snapToItem(newIndex);
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, [activeIndex]);
  
    return (
      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          data={mediaData}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          onSnapToItem={handleSnapToItem}
        />
        <Pagination
          dotsLength={mediaData.length}
          activeDotIndex={activeIndex}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.dotStyle}
          inactiveDotStyle={styles.inactiveDotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      marginBottom: -20
    },
    media: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    paginationContainer: {
    
      bottom: 10,
      alignSelf: 'center',
    },
    dotStyle: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "#fa8072",
    },
    inactiveDotStyle: {
      // Customize inactive dot style if needed
    },
  });
  

export default ShopHeaderCarousel;
