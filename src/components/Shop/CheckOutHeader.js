import { StyleSheet, View, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import Couch from "../../assets/images/Shop/Couch.jpg";
import { Text } from "@gluestack-ui/themed";

const CheckOutHeader = () => {
  const { colors } = useTheme();
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Pressable
          onPress={toggleVisibility}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Icons.ShoppingCartIcon size={25} color={colors.text} />
          <Text style={[styles.itemHeader, { color: colors.text }]}>
            {" "}
            (1 Item){" "}
          </Text>
          {isHidden ? (
            <Icons.ChevronDownIcon size={20} color={colors.text} />
          ) : (
            <Icons.ChevronUpIcon size={20} color={colors.text} />
          )}
        </Pressable>

        <View>
          <Text style={[styles.boldText, { color: colors.text }]}>
            $2,784.00
          </Text>
        </View>
      </View>

      {/* showmore */}
      {!isHidden && (
        <View style={styles.hiddenContainer}>
          <View style={styles.hiddenRow}>
            <View>
              <Image source={Couch} style={styles.image} />
            </View>

            <View style={{ marginLeft: 10 }}>
              <Text style={[styles.itemText, { color: colors.text }]}>
                Louis Vuitton Couch
              </Text>
              <Text style={[styles.soldBY, { color: colors.text }]}>
                Sold by Louis Vuitton
              </Text>

              <Text style={[styles.cost, { color: colors.text }]}>
                $2,784.00
              </Text>
              <Text style={[styles.delivery, { color: colors.text }]}>
                Est. Delivery: Dec. 1 - Dec. 5
              </Text>
            </View>
          </View>
        </View>
      )}
      {/* showmore */}
    </View>
  );
};

export default CheckOutHeader;

const styles = StyleSheet.create({
  hiddenContainer: {
    marginTop: 15,
    borderTopWidth: 0.3,
    paddingTop: 15,
    backgroundColor: "#fa807210",
    marginBottom: 20,
  },
  hiddenRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 15,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 5,
  },
  delivery: {
    fontSize: 13,
    marginTop: 5,
  },
  cost: {
    fontWeight: "bold",
    marginTop: 5,
  },
  soldBY: {
    fontSize: 13,
    fontWeight: "600",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 18,
    width: 250,
  },
  image: {
    height: 100,
    width: 100,
  },
  delivery: {
    fontSize: 13,
    marginTop: 5,
  },
  itemHeader: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
