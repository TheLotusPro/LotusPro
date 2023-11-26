import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CheckOutHeader from "../../components/Shop/CheckOutHeader";
import PromoCode from "../../components/Shop/PromoCode";
import OrderDetails from "../../components/Shop/OrderDetails";
import Address from "../../components/Shop/Address";
import ExpressCheckout from "../../components/Shop/ExpressCheckout";

const CheckOut = () => {
  return (
    <View>
      <ScrollView>
        <CheckOutHeader />
        <ExpressCheckout />
        <Address />
        <PromoCode />
        <OrderDetails />
      </ScrollView>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({});
