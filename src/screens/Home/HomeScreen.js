import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
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

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HomeHeaderButtons />
      <ShopHeaderHome />
      <Shop />
      <FindProfessionalHeader />
      <Professionals />
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
  return (
    <View>
      <FlatList
        data={shopHomeData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <SearchProductsHome shopHomeData={item} />}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
