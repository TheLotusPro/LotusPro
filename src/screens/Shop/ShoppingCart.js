import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { styledResolvedToOrderedSXResolved, Text } from "@gluestack-ui/themed";
import PlaceHolder from "../../assets/images/Shop/Couch.jpg";
import CheckOut from "../../components/Shop/CheckOut";

const ShoppingCart = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TouchableOpacity style={{ width: 50, marginLeft: 20 }}>
          <Icons.ShoppingBagIcon style={{ color: "#fa8072" }} size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={{flex: 1}}>

   
    <ScrollView>
      <Items />
      <GiftCode />
      <Summery />
    </ScrollView>
    <CheckOut />
    </View>
  );
};

const Items = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.containerItems}>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.boldText, { color: colors.text }]}>Total</Text>
          <Text style={{ color: colors.text }}> (1 Item)</Text>
        </View>
        <View>
          <Text style={[styles.boldText, { color: colors.text }]}>
            $2,784.00
          </Text>
        </View>
      </View>

      {/* item */}

      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={PlaceHolder} style={styles.product} />
          </View>

          <View style={{ marginLeft: 10 }}>
            <Text style={[styles.text, { color: colors.text }]}>
              Louis Vuitton Couch
            </Text>
            <Text style={[styles.price, { color: colors.text }]}>
              $2,784.00
            </Text>
            <Text style={[styles.delivery, { color: colors.text }]}>
              Est. Delivery: Nov.25 - Dec 4
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              borderColor: "#fa807250",
              width: 80,
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>1</Text>
            <Icons.ChevronDownIcon size={20} color={colors.text} />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 30 }}>
            <Text style={[styles.text, { color: colors.text }]}>Remove</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 30 }}>
            <Text style={[styles.text, { color: colors.text }]}>
              Save for Later
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const GiftCode = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.giftContainer}>
     <Text style={[styles.boldText, { color: colors.text }]}>Gift Code</Text>

     <TouchableOpacity>
     <Text style={{ color: colors.text }}>Add</Text>
     </TouchableOpacity>



    </View>
  )
}

const Summery = () => {
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
    <View style={styles.summeryContainer}>
    <View style={{borderBottomWidth: 1, borderBottomColor: 'gray'}}>
       <Text style={[styles.boldText, { color: colors.text }]}>Order Summery</Text>

       <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 25}}>
       <Text style={[styles.text, { color: colors.text }]}>Subtotal:</Text>
        <Text style={[styles.boldText, { color: colors.text }]}>$2,784.00</Text>
       </View>

       <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
       <Text style={[styles.text, { color: colors.text }]}>Shipping:</Text>
        <Text style={[styles.boldText, { color: colors.text }]}>Free</Text>
       </View>

       <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginBottom: 10}}>
       <Text style={[styles.text, { color: colors.text }]}>Promo or Gift Code:</Text>

<TouchableOpacity>
<Icons.ChevronDownIcon size={25} color={colors.text} />
</TouchableOpacity>
       </View>

       </View>

       <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
       <Text style={[styles.text, { color: colors.text }]}>Total:</Text>
        <Text style={[styles.boldText, { color: colors.text }]}>$2,784.00</Text>
       </View>

       <View style={{marginTop: 5}}>
        <Text style={{fontSize: 14, color: 'gray'}}>
        or 4 interest-free payments of $399.75 with <AfterPlay />{" "}
        </Text>
       </View>
    </View>
  )
}

export default ShoppingCart;

const styles = StyleSheet.create({
  containerItems: {
    margin: 20,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  product: {
    height: 100,
    width: 100,
  },
  text: {
    fontWeight: "500",
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  delivery: {
    fontSize: 14,
    marginTop: 5,
  },
  giftContainer: {
  
    backgroundColor: "#fa807230",
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  summeryContainer: {
    backgroundColor: "#fa807230",
    marginTop: 20,
    padding: 20
  },
});
