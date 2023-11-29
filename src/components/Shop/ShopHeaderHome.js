import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";

const ShopHeaderHome = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
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
  );
};

export default ShopHeaderHome;

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
