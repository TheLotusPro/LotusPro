import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";
import { BottomSheet } from "react-native-btr";
import EstimateItem from "../../components/Projects/EstimateItem";
import EstimatesDetailsFooter from "../../components/Projects/EstimatesDetailsFooter";

const EstimatesDetails = ({ route }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [termsText, setTermsText] = useState("");
  const [memoText, setMemoText] = useState("");

  useEffect(() => {
    if (route.params && route.params.termsText) {
      setTermsText(route.params.termsText);
    }
  }, [route.params]);

  useEffect(() => {
    if (route.params && route.params.memoText) {
      setMemoText(route.params.memoText);
    }
  }, [route.params]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Items />
        <Payments />
        <Terms termsText={termsText} />
        <Memo memoText={memoText} />
      </ScrollView>
      <EstimatesDetailsFooter />
    </View>
  );
};

const Header = () => {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);
  const [estimateName, setEstimateName] = useState("Home Remodeling");

  const toggleBottomSheet = () => {
    setVisible((_visible) => !_visible);
  };

  const updateEstimateName = (newName) => {
    setEstimateName(newName);
    toggleBottomSheet();
  };

  return (
    <View style={styles.headerContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.statusContainer}>
              <Text style={[{ color: colors.text }]}>Approved</Text>
            </View>
          </View>
          <Text style={[styles.caption, { color: "gray" }]}>
            Estimate name*
          </Text>
          <Text style={[styles.title, { color: colors.text }]}>
            {estimateName}
          </Text>
        </View>

        <TouchableOpacity onPress={toggleBottomSheet}>
          <Icons.PencilIcon style={{ color: "gray" }} size={20} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 5 }}>
        <Text style={[styles.user, { color: colors.text }]}>
          for <Text style={{ color: "dodgerblue" }}>James Carson</Text>{" "}
        </Text>
      </View>

      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomSheet}
        onBackdropPress={toggleBottomSheet}
      >
        <View
          style={[
            styles.bottomSheetContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 30,
              marginHorizontal: 10
            }}
          >
            <Text style={[{ color: colors.text, fontWeight: 'bold' }]}>Cancel</Text>
            <Text style={[{ color: colors.text, fontWeight: "bold" }]}>
              Estimate Name
            </Text>
            <Text
              onPress={() => updateEstimateName(estimateName)}
              style={[{ color: "dodgerblue", fontWeight: 'bold' }]}
            >
              Done
            </Text>
          </View>
          <TextInput
            style={[styles.input, {color: colors.text}]}
            autoFocus
            placeholder="Enter new estimate name"
            onChangeText={(text) => setEstimateName(text)}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

const Items = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.itemContainer}>
      <Text style={[styles.title, { color: colors.text, marginTop: 10 }]}>
        Items
      </Text>

      <EstimateItem />

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={[{ color: "white", fontWeight: "bold" }]}>
            Add items
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.totalContainer}>
        <View style={{ borderBottomWidth: 0.3, borderBottomColor: "gray" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={[styles.totalText, { color: colors.text }]}>
              Subtotal
            </Text>
            <Text style={[{ color: colors.text }]}>$5.00</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={[styles.totalText, { color: colors.text }]}>
              Markup
            </Text>
            <Text style={[{ color: colors.text }]}>$0.00</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={[styles.totalText, { color: colors.text }]}>Tax</Text>
            <Text style={[{ color: colors.text }]}>$0.00</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Text style={[styles.finalTotalText, { color: colors.text }]}>
            Total
          </Text>
          <Text style={[styles.finalTotalText, { color: colors.text }]}>
            $5.00
          </Text>
        </View>
      </View>
    </View>
  );
};

const Payments = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.paymentContainer}>
      <Text style={[styles.title, { color: colors.text, marginBottom: 10 }]}>
        Payments
      </Text>

      <View
        style={{
          backgroundColor: "#fa807210",
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={[{ color: "#33AB5F" }]}>Upcoming</Text>

          <TouchableOpacity>
            <Icons.EllipsisHorizontalIcon
              style={{ color: colors.text }}
              size={25}
            />
          </TouchableOpacity>
        </View>

        <Text style={[styles.payment, { color: colors.text }]}>
          $0.00 (30.00%)
        </Text>

        <Text style={[{ color: "gray", marginTop: 5 }]}>Deposit</Text>
      </View>

      <View
        style={{
          backgroundColor: "#fa807210",
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={[{ color: "#33AB5F" }]}>Upcoming</Text>

          <TouchableOpacity>
            <Icons.EllipsisHorizontalIcon
              style={{ color: colors.text }}
              size={25}
            />
          </TouchableOpacity>
        </View>

        <Text style={[styles.payment, { color: colors.text }]}>
          $0.00 (70.00%)
        </Text>

        <Text style={[{ color: "gray", marginTop: 5 }]}>Upon completion</Text>
      </View>
    </View>
  );
};

const Terms = ({ termsText }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.termContainer}>
      <Text style={[styles.title, { color: colors.text }]}>
        Terms and Conditions
      </Text>

      <View>
        <Text style={[styles.terms, { color: colors.text }]}>{termsText}</Text>
      </View>

      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TermsInputScreen")}
          style={styles.buttonContainer}
        >
          <Text style={[{ color: "white", fontWeight: "bold" }]}>
            Add Terms and Conditions
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Memo = ({ memoText }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.termContainer}>
      <Text style={[styles.title, { color: colors.text }]}>Memo</Text>

      <View>
        <Text style={[styles.terms, { color: colors.text }]}>{memoText}</Text>
      </View>

      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Memo")}
          style={styles.buttonContainer}
        >
          <Text style={[{ color: "white", fontWeight: "bold" }]}>Memo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default EstimatesDetails;

const styles = StyleSheet.create({
  headerContainer: {
    margin: 20,
  },
  statusContainer: {
    marginBottom: 10,
    borderColor: "green",
    borderWidth: 1,
    maxWidth: 190,
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    width: 250,
  },
  caption: {
    fontSize: 13,
    marginBottom: 5,
  },
  user: {
    fontSize: 14,
  },
  bottomSheetContainer: {
    height: 500,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  itemContainer: {
    marginHorizontal: 20,
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: "#fa807210",
    alignItems: "center",
    borderRadius: 10,
    borderWidth:1,
    borderStyle: 'dashed',
    borderColor: "#33AB5F",


  },
  totalContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fa807210",
    borderRadius: 10,
  },
  totalText: {
    fontWeight: "600",
  },
  finalTotalText: {
    fontWeight: "bold",
    fontSize: 22,
  },
  paymentContainer: {
    margin: 20,
  },
  payment: {
    fontWeight: "600",
    fontSize: 18,
  },
  termContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  terms: {
    fontSize: 14,
  },
});
