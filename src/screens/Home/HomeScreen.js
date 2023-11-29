import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import HomeHeaderButtons from "../../components/Home/HomeHeaderButtons";
import FindProfessionals from "../../components/Home/FindProfessionals";
import proData from "../../assets/data/findProfessionals";
import FindProfessionalHeader from "../../components/Home/FindProfessionalHeader";
import PopularProductsHeader from "../../components/Home/PopularProductsHeader";
import ShopHeaderHome from "../../components/Shop/ShopHeaderHome";
import SearchProductsHome from "../../components/Shop/SearchProductsHome";
import shopHomeData from "../../assets/data/shopHomeData";
import PopularProducts from "../../components/Products/PopularProducts";
import shop from "../../assets/data/shop";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";


const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HomeHeaderButtons />
      {/* <ShopHeaderHome /> */}
      <Shop />
      {/* <FindProfessionalHeader /> */}
      {/* <Professionals /> */}
      <PopularProducts />
      {/* <PopularProductsHeader />
      <PopularProducts /> */}
    </ScrollView>
  );
};

const Professionals = () => {
  return (
    <View>
      <FlatList
        data={proData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <FindProfessionals proData={item} />}
      />
    </View>
  );
};

const Shop = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View>
     <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
      }}
    >
      <View>
        <Text style={[styles.title, { color: colors.text }]}>
          Search Products
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('ShopHome')}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Text style={styles.seeAll}>See all</Text>
        <Icons.ArrowLongRightIcon size={25} color={"#33AB5F"} />
      </TouchableOpacity>
    </View>
      <FlatList
        data={shop.slice(0, 4)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <SearchProductsHome shop={item} />}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  seeAll: {
    color: "#33AB5F",
    fontSize: 14,
    marginRight: 5,
  },
});
