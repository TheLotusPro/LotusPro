import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import { useTheme, useNavigation } from "@react-navigation/native";
  import * as Icons from "react-native-heroicons/solid";

const SearchHeader = () => {
    const {colors} = useTheme();
    const navigation = useNavigation();



  return (
    <Pressable 
     onPress={() => navigation.navigate('Search')}
    style={[styles.searchContainer]}>
    <View style={{ margin: 8, flexDirection: "row", alignItems: "center" }}>
      <Icons.MagnifyingGlassIcon size={20} color={"gray"} />
      <Text style={[{color: 'gray'}]}>Search</Text>
    </View>
    <TouchableOpacity style={{ marginRight: 10 }}>
      <Icons.CameraIcon size={20} color={"gray"} />
    </TouchableOpacity>
  </Pressable>
  )
}

export default SearchHeader

const styles = StyleSheet.create({
    searchContainer: {
        width: "82%",
        borderColor: "#a9a9a950",
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        right: 40
      },
})