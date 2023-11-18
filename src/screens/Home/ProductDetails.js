import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";
import * as Icon from "react-native-heroicons/solid";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import { buttonItems, catagories} from "../../constants/ProductButtons";

const { width } = Dimensions.get("window");

const data = [
  { id: "1", source: require("../../assets/images/ArchitecturalDesigns.jpeg") },
  { id: "2", source: require("../../assets/images/ArchitecturalDrawing.jpeg") },
  { id: "3", source: require("../../assets/images/BathroomRemodeling.jpeg") },
];

const ProductDetails = () => {
  return (
    <ScrollView>
      <Header />
      <Info />
      <Buttons />
    </ScrollView>
  );
};

const Header = () => {
  const { colors } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
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

      {/* <View style={styles.imageCountContainer}>
        <Text style={styles.imageCountText}>
          {activeSlide + 1}/{data.length}
        </Text>
      </View> */}

      {/* Add the Go Back button at the top left */}
    </View>
  );
};

const Info = () => {
  const { colors } = useTheme();

  const UserProfiles = () => {
    return (
      <View style={{ marginHorizontal: 5, flexDirection: "row" }}>
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
    );
  };

  return (
    <View style={{ margin: 10 }}>
      {/* Header */}
      <View style={styles.infoContainerHeader}>
        <View>
          <Text style={[styles.title, { color: colors.text }]}>
            Victorian Villa Designs
          </Text>
        </View>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <Icons.HeartIcon style={{ color: "gray" }} size={30} />
          <Text style={{ fontWeight: "bold", color: "gray" }}>0</Text>
        </TouchableOpacity>
      </View>
      {/* Price */}
      <View style={{ marginHorizontal: 10, marginTop: 20 }}>
        <Text style={styles.price}>$1,599</Text>
      </View>

      {/* Reviews */}
      <TouchableOpacity style={styles.reviewContainer}>
        <View style={{ margin: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Icon.StarIcon size={25} color={"gold"} />
            <Icon.StarIcon size={25} color={"gold"} />
            <Icon.StarIcon size={25} color={"gold"} />
            <Icon.StarIcon size={25} color={"gold"} />
            <Icon.StarIcon size={25} color={"gold"} />
            <View>
              <Text style={[styles.rating, { color: colors.text }]}>5.0</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[{ color: colors.text }]}>20 Reviews</Text>
            <Icon.ChevronRightIcon size={20} color={"black"} />
          </View>
        </View>

        <View>
          <UserProfiles />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Buttons = () => {
  const [activeCategory, setActiveCategory] = useState(1)
  return (
    <View style={styles.buttonContainer}>
      <Text>hi</Text>
      <View>
        <FlatList
          horizontal
          showsVerticalScrollIndicator={false}
          data={catagories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            let isActive = item.id === activeCategory;
            let textColor = isActive ? 'white' : 'black'; // Change text color prop

            return (
              <TouchableOpacity
                onPress={() => setActiveCategory(item.id)} // Update the active category
                style={[styles.button, { backgroundColor: isActive ? '#fa8072' : '#fa807250' }]}>
                <Text style={{ color: textColor, fontWeight: '600' }}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
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
    top: 20,
    right: 20,
    backgroundColor: "#fa807250",
    padding: 5,
    borderRadius: 10,
  },
  imageCountText: {
    color: "white",
    fontSize: 14,
  },
  backButton: {
    position: "absolute",
    top: 43,
    left: 20,
    zIndex: 1,
    backgroundColor: "#fa807250",
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
  infoContainerHeader: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoContainer: {},
  price: {
    color: "#fa8072",
    fontWeight: "bold",
    fontSize: 22,
  },
  reviewContainer: {
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: "#d3d3d350",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    marginLeft: 10,
  },
  avatar: {
    right: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
  },
  buttonContainer: {
    margin: 20,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    margin: 5

    
    
  }
});
