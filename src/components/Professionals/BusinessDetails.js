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
              <Icons.UserIcon style={{ color: "#33AB5F" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, { color: colors.text }]}>
                  Business Name
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.mine}>James Contractors</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <Icons.PhoneIcon style={{ color: "#33AB5F" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, {color: colors.text  }]}>
                  Phone Number
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.mine}>801-801-1000</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <Icons.GlobeAltIcon style={{ color: "#33AB5F" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, { color: colors.text  }]}>
                  Website
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.mine}>james.com</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <Icons.BuildingStorefrontIcon style={{ color: "#33AB5F" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, { color: colors.text  }]}>
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
              <Icons.CurrencyDollarIcon style={{ color: "#33AB5F" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, { color: colors.text  }]}>
                  Typical Job Cost
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.mineAddress}>10k - 400k</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <Icons.DocumentCheckIcon style={{ color: "#33AB5F" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, { color: colors.text  }]}>
                  License Number
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.mineAddress}>1020394</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <Icons.UserGroupIcon style={{ color: "#33AB5F" }} size={18} />
              <View style={{ marginLeft: 5 }}>
                <Text style={[styles.business, {color: colors.text }]}>
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
    backgroundColor: "#fa807210",
    shadowColor: "gray",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }

  },
  mine: {
    color: "gray",
    width: 130
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
