import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/solid";
import { useTheme } from '@react-navigation/native';
import { Text } from "@gluestack-ui/themed";


const PopularProductsHeader = () => {
    const { colors } = useTheme();

    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15  }}>
        <View>
          <Text style={[styles.title, {color: colors.text}]}>Popular Designs</Text>
        </View>
  
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.seeAll}>See all</Text>
          <Icons.ArrowLongRightIcon size={25} color={"#fa8072"} />
        </TouchableOpacity>
      </View>
    )
  }

export default PopularProductsHeader

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 16,
      },
      seeAll: {
        color: "#fa8072",
        fontSize: 14,
        marginRight: 5,
      },
})