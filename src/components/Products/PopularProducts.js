import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import popularProducts from "../../assets/data/popularProducts";

const PopularProducts = () => {
    const { colors } = useTheme();

  return (
    <View>
    <View style={styles.headerContainer}>
    <Text style={[styles.headerTitle, {color: colors.text}]}>Popular Products</Text>
    </View>



      <FlatList
        data={popularProducts}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Item popularProducts={item} />}
      />
    </View>
  );
};

const Item = (props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();


  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('ProductDetails')}
    style={styles.container}>
      <View>
        <Image source={props?.popularProducts?.image} style={styles.image} />

        <View style={{ margin: 5, marginBottom: 1 }}>
          <Text style={[{ color: colors.text }]}>
            {props?.popularProducts?.title}
          </Text>
        </View>
        <View style={{ margin: 5, marginBottom: 1, flexDirection: "row" }}>
          <Icons.StarIcon size={15} color={"gold"} />
          <Icons.StarIcon size={15} color={"gold"} />
          <Icons.StarIcon size={15} color={"gold"} />
          <Icons.StarIcon size={15} color={"gold"} />
          <Icons.StarIcon size={15} color={"gold"} />
          <Text style={[styles.reviewCount, { color: colors.text }]}>
            {" "}
            {props?.popularProducts?.reviewCount}
          </Text>
        </View>
        <View style={{ margin: 5 }}>
          <Text style={[{ color: colors.text }]}>
            ${props?.popularProducts?.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularProducts;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: 150,
    marginHorizontal: 10
  },
  image: {
    width: 150,
    height: 150,
  },
  reviewCount: {
    fontWeight: "300",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: -5
  }
});
