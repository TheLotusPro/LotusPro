import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import CheckOutHeader from "../../components/Shop/CheckOutHeader";
import CheckOutPayments from "../../components/Shop/CheckOutPayments";
import PromoCode from "../../components/Shop/PromoCode";
import OrderDetails from "../../components/Shop/OrderDetails";

const CheckOutFinal = () => {
  return (
    <ScrollView>
      <CheckOutHeader />
      <Shipping />
      <Payment />
      <PromoCode />
      <OrderDetails />
    </ScrollView>
  );
};

const Shipping = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: "#33AB5F50", marginBottom: 10 }}>
      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.boldText, { color: colors.text }]}>
            Shopping Address
          </Text>
          <TouchableOpacity>
            <Text style={[styles.boldText, { color: "#33AB5F" }]}>Change</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={[styles.address, { color: colors.text }]}>Sam John</Text>
          <Text style={[styles.address, { color: colors.text }]}>
            1234 Park Ave
          </Text>
          <Text style={[styles.address, { color: colors.text }]}>
            Park City, UT 84060
          </Text>
          <Text style={[styles.address, { color: colors.text }]}>
            435-898-9898
          </Text>
        </View>
      </View>
    </View>
  );
};

const Payment = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: "#33AB5F50", marginBottom: 10 }}>
      <View style={{ padding: 20 }}>
        <Text style={[styles.boldText, { color: colors.text }]}>Payment</Text>

        <View style={{ marginTop: 10 }}>
          <Text style={[{ color: colors.text }]}>Payment Method</Text>
          <View>
            <CheckOutPayments />
          </View>
        </View>
      </View>
    </View>
  );
};
export default CheckOutFinal;

const styles = StyleSheet.create({
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  address: {
    fontSize: 14,
    fontWeight: "600",
  },
});
