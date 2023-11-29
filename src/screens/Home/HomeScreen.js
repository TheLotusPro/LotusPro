import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import HomeHeaderButtons from "../../components/Home/HomeHeaderButtons";
import FindProfessionals from "../../components/Home/FindProfessionals";
import proData from "../../assets/data/findProfessionals";
import FindProfessionalHeader from "../../components/Home/FindProfessionalHeader";
import ShopHeaderHome from "../../components/Shop/ShopHeaderHome";
import SearchProductsHome from "../../components/Shop/SearchProductsHome";
import PopularProducts from "../../components/Products/PopularProducts";
import shop from "../../assets/data/shop";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";


const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HomeHeaderButtons />
      <Shop />
      {/* <FindProfessionalHeader /> */}
      {/* <Professionals /> */}
      <PopularProducts />
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
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  

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
          Shop Products
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
        data={shuffleArray([...shop]).slice(0, 4)}
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
    fontSize: 20,
  },
  seeAll: {
    color: "#33AB5F",
    fontSize: 14,
    marginRight: 5,
  },
});
