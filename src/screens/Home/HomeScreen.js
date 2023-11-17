import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import HomeHeaderButtons from "../../components/Home/HomeHeaderButtons";
import FindProfessionals from "../../components/Home/FindProfessionals";
import proData from "../../assets/data/findProfessionals";
import FindProfessionalHeader from "../../components/Home/FindProfessionalHeader";
import PopularProducts from "../../components/Home/PopularProducts";
import PopularProductsHeader from "../../components/Home/PopularProductsHeader";

const HomeScreen = () => {
  return (
    <View>
      <HomeHeaderButtons />
      <FindProfessionalHeader />
      <Header />
      <PopularProductsHeader />
      <PopularProducts />
    </View>
  );
};

const Header = () => {
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

export default HomeScreen;

const styles = StyleSheet.create({});
