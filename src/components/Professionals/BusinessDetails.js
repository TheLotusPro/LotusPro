import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";

const BusinessDetails = () => {
  const { colors } = useTheme();

  return (
    <View>
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={[{ color: colors.text, fontWeight: "bold", fontSize: 18 }]}
        >
          Business Details
        </Text>
      </View>

      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View style={styles.row}>
              <Icons.UserIcon style={{ color: "dodgerblue" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, { color: 'black' }]}>
                  Business Name
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.mine}>James Contractors</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <Icons.UserIcon style={{ color: "dodgerblue" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, { color: 'black' }]}>
                  Phone Number
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.mine}>801-801-1000</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <Icons.UserIcon style={{ color: "dodgerblue" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, { color: 'black' }]}>
                  Website
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.mine}>james.com</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <Icons.UserIcon style={{ color: "dodgerblue" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, { color: 'black' }]}>
                  Address
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.mineAddress}>
                    1234 Park Ave, Park City, Utah 84060
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* bottom */}
          <View>
            <View style={styles.row}>
              <Icons.UserIcon style={{ color: "dodgerblue" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, { color: 'black' }]}>
                  Typical Job Cost
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.mineAddress}>10k - 400k</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <Icons.UserIcon style={{ color: "dodgerblue" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, { color: 'black' }]}>
                  License Number
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.mineAddress}>1020394</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <Icons.UserIcon style={{ color: "dodgerblue" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, {color: 'black' }]}>
                  Followers
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.mineAddress}>2,380</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BusinessDetails;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#e0ffff",
    shadowColor: "#2f4f4f",
    shadowOpacity: 1.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 2,
    },


  },
  mine: {
    color: "gray",
  },
  row: {
    flexDirection: "row",
    marginBottom: 25,
  },
  business: {
    fontWeight: "bold",
  },
  mineAddress: {
    color: "gray",
    width: 130,
  },
});
