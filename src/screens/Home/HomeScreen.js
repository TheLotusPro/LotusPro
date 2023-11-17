import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import HomeHeaderButtons from "../../components/Home/HomeHeaderButtons";
import FindProfessionals from "../../components/Home/FindProfessionals";
import proData from '../../assets/data/findProfessionals'
import FindProfessionalHeader from "../../components/Home/FindProfessionalHeader";

const HomeScreen = () => {
  return (
    <View >
      <HomeHeaderButtons />
      <FindProfessionalHeader />
      <FlatList
      data={proData}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <FindProfessionals proData={item} /> }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
