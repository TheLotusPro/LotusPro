import React, { useRef, useState } from "react";
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
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
  Progress,
  ProgressFilledTrack,
} from "@gluestack-ui/themed";
import { buttonItems, catagories } from "../../constants/ProductButtons";
import ProductCardDesign from "../../components/Products/ProductCardDesign";
import Footer from "../../components/Products/Footer";
import PopularProducts from "../../components/Products/PopularProducts";
const { width } = Dimensions.get("window");

const data = [
  { id: "1", source: require("../../assets/images/Shop/Couch.jpg") },
  // { id: "2", source: require("../../assets/images/ArchitecturalDrawing.jpeg") },
  // { id: "3", source: require("../../assets/images/BathroomRemodeling.jpeg") },
];

const ProductDetails = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Info />
        <Buy />
        <Buttons />
        <Reviews />
        <UserInfo />
        <PopularProducts />
      </ScrollView>
      <Footer />
    </View>
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

      <View style={styles.imageCountContainer}>
        <Text style={styles.imageCountText}>
          {activeSlide + 1}/{data.length}
        </Text>
      </View>

      {/* Add the Go Back button at the top left */}
    </View>
  );
};

const Info = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

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

  const AfterPlay = () => {
    return (
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 14,
            marginTop: 3,
            fontWeight: "bold",
            color: "green",
          }}
        >
          AfterPay{" "}
        </Text>
        <Icon.InformationCircleIcon
          style={{ color: "gray", marginTop: 5 }}
          size={15}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ margin: 10 }}>
      {/* Header */}
      <View style={styles.infoContainerHeader}>
        <View>
          <Text style={[styles.title, { color: colors.text }]}>
          Luxury Louis Vuitton Couch
          </Text>
        </View>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <Icons.HeartIcon style={{ color: "gray" }} size={30} />
          <Text style={{ fontWeight: "bold", color: "gray" }}>0</Text>
        </TouchableOpacity>
      </View>
      {/* Price */}
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <Text style={[styles.price, { color: colors.text }]}>$1,599</Text>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 12 }}>
            or 4 interest-free payments of $399.75 with <AfterPlay />{" "}
          </Text>
        </View>
      </View>

      {/* Reviews */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductReviews")}
        style={styles.reviewContainer}
      >
        <View style={{ margin: 12 }}>
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
            <Text style={[{ color: "gray", fontSize: 14 }]}>20 Reviews</Text>
            <Icon.ChevronRightIcon size={15} color={"gray"} />
          </View>
        </View>

        <View>
          <UserProfiles />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Buy = () => {
  return (
    <View>
      <TouchableOpacity style={styles.buyContainer}>
        <View style={styles.buyButton}>
          <FontAwesome5 name="apple-pay" size={40} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Buttons = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const carouselRef = useRef(null);

  const handleSnapToItem = (index) => {
    setActiveCategory(catagories[index].id);
  };

  return (
    <View style={styles.buttonContainer}>
      <View style={{ marginHorizontal: 20 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={catagories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            let isActive = item.id === activeCategory;
            let textColor = isActive ? "white" : "gray";

            return (
              <TouchableOpacity
                onPress={() => {
                  setActiveCategory(item.id);
                  carouselRef.current?.snapToItem(catagories.indexOf(item));
                }}
                style={[
                  styles.button,
                  { backgroundColor: isActive ? "#fa8072" : "#fa807250" },
                ]}
              >
                <Text style={{ color: textColor, fontWeight: "600" }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Carousel
          ref={carouselRef}
          containerCustomStyle={{ overflow: "visible" }}
          data={buttonItems}
          renderItem={({ item }) => <ProductCardDesign item={item} />}
          firstItem={0}
          inactiveSlideOpacity={0.75}
          inactiveSlideScale={0.77}
          sliderWidth={400}
          itemWidth={400}
          onSnapToItem={handleSnapToItem}
        />
      </View>
    </View>
  );
};

const Reviews = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.bottomReviewContainer}>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold" }}>Reviews</Text>
        <Text style={{ color: "black", fontWeight: "400", fontSize: 14 }}>
          50 Reviews
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            width: 100,
            height: 100,
            justifyContent: "center",
            borderRadius: 10,
            marginHorizontal: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 23 }}>4.98</Text>
            <Text style={{ color: "white" }}>out of 5</Text>
          </View>
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.ratingsText, { color: colors.text }]}>
              Excellent
            </Text>
            <View style={{ marginHorizontal: 5 }}>
              <Progress value={100} w={120} size="md">
                <ProgressFilledTrack bg="#fa8072" />
              </Progress>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.ratingsText, { color: colors.text }]}>
              Very Good
            </Text>
            <View style={{ marginHorizontal: 5 }}>
              <Progress value={70} w={120} size="md">
                <ProgressFilledTrack bg="#fa8072" />
              </Progress>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.ratingsText, { color: colors.text }]}>
              Average
            </Text>
            <View style={{ marginHorizontal: 5 }}>
              <Progress value={50} w={120} size="md">
                <ProgressFilledTrack bg="#fa8072" />
              </Progress>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.ratingsText, { color: colors.text }]}>
              Poor
            </Text>
            <View style={{ marginHorizontal: 5 }}>
              <Progress value={20} w={120} size="md">
                <ProgressFilledTrack bg="#fa8072" />
              </Progress>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const UserInfo = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.userInfo}>
      <Text style={[styles.userInfoText, { color: "#fa8072" }]}>
        Fulfilled by
      </Text>
      <View
        style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
      >
        <Avatar>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            }}
          />
        </Avatar>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={[styles.userInfoText, { color: colors.text }]}>
            James Architecture Group
          </Text>
        </View>
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
    width: 300
  },
  infoContainerHeader: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoContainer: {},
  price: {
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
    fontSize: 13,
    fontWeight: "300",
  },
  avatar: {
    right: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  bottomReviewContainer: {
    margin: 20,
    backgroundColor: "#d3d3d350",
    borderRadius: 10,
    marginHorizontal: 12,
    paddingBottom: 20,
  },
  ratingsText: {
    fontSize: 13,
    fontWeight: 300,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
    flex: 1,
    backgroundColor: "red",
  },
  userInfo: {
    paddingHorizontal: 20,
  },
  userInfoText: {
    fontWeight: "bold",
  },
  buyContainer: {
    margin: 20,
  },
  buyButton: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
});
