import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/outline";
import { useTheme } from "@react-navigation/native";

const OrderDetails = () => {
  const { colors } = useTheme();
  const AfterPlay = () => {
    return (
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 14,
            marginTop: 3,
            fontWeight: "bold",
            color: "green",
          }}
        >
          AfterPay{" "}
        </Text>
        <Icons.InformationCircleIcon
          style={{ color: "gray", marginTop: 5 }}
          size={15}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "#33AB5F50",
        marginBottom: 10,
      }}
    >
      <View style={{ margin: 20 }}>
        <Text style={[styles.boldText, { color: colors.text }]}>
          Order Details
        </Text>

        <View style={{ borderBottomWidth: 1, borderBottomColor: "#a9a9a9" }}>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[{ color: colors.text }]}>Subtotal:</Text>
            <Text style={[styles.cost, { color: colors.text }]}>$2,784.00</Text>
          </View>

          <View
            style={{
              marginTop: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 5,
            }}
          >
            <Text style={[{ color: colors.text }]}>Shipping:</Text>
            <Text style={[styles.cost, { color: colors.text }]}>FREE</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.boldText, { color: "#33AB5F" }]}>Total</Text>
          <Text style={[styles.cost, { color: colors.text }]}>$2,784.00</Text>
        </View>

        <View style={{ marginTop: 5, alignItems: "flex-end" }}>
          <Text style={{ fontSize: 14, color: "gray" }}>
            or 4 interest-free payments of $399.75 with <AfterPlay />{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  cost: {
    fontWeight: "bold",
    marginTop: 5,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
