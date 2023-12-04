import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import AddItemsSearch from "../../components/Projects/AddItemsSearch";
import CategoryList from "../../components/Projects/CategoryList";
import categoryItems from "../../assets/data/projectItems/categoryItems";

const AddItems = () => {
  return (
    <View>
      <AddItemsSearch />
      <Categories />
    </View>
  );
};

const Categories = () => {
  return (
    <View>
     {categoryItems.map((item, index) => (
          <CategoryList key={index.toString()} categoryItems={item} />
        ))}
    </View>
  );
};

export default AddItems;

const styles = StyleSheet.create({});
