import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/solid";
import { useTheme, useNavigation } from "@react-navigation/native";


const SearchIdeas = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();

  return (
    <View>
    <View style={[styles.searchContainer]}>
    <View style={{ margin: 8, flexDirection: "row", alignItems: "center" }}>
      <Icons.MagnifyingGlassIcon size={20} color={"gray"} />
      <TextInput
        placeholder={"Search"}
        autoCapitalize="none"
        placeholderTextColor={"grey"}
        style={[styles.input, { color: colors.text }]}
      />
    </View>
    <TouchableOpacity style={{ marginRight: 10 }}>
      <Icons.CameraIcon size={20} color={"gray"} />
    </TouchableOpacity>
  </View>

  <View style={{alignItems: 'center'}}>
      <Text style={{color: 'gray'}}>Search through the ideas you have saved. </Text>
    </View>

  </View>
  )
}

export default SearchIdeas

const styles = StyleSheet.create({
    searchContainer: {
        width: "90%",
        borderColor: "#a9a9a950",
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 20
      },
      input: {
        marginLeft: 3,
      },
})