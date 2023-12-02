import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { BottomSheet } from "react-native-btr";
import EstimatesCard from "../../components/Projects/EstimatesCard";
import { Text } from "@gluestack-ui/themed";


const Estimates = () => {
  return (
    <ScrollView>
      <Header />
      <EstimatesCard />
    </ScrollView>
  );
};

const Header = () => {
  const { colors } = useTheme();
  const [selectedType, setSelectedType] = useState("All");
  const [visible, setVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [visible2, setVisible2] = useState(false);

  const handleRoleSelection = (type) => {
    setSelectedType(type);
    toggleBottomSheet();
  };

  const toggleBottomSheet = () => {
    setVisible((_visible) => !_visible);
  };

  const handleRoleSelection2 = (status) => {
    setSelectedStatus(status);
    toggleBottomSheet2();
  };

  const toggleBottomSheet2 = () => {
    setVisible2((_visible) => !_visible);
  };

  return (
    <View style={styles.containerHeader}>
      <View style={styles.header}>
        <View>
          <Text style={[{ color: colors.text }]}>Total</Text>
          <Text style={[styles.cost, { color: colors.text }]}>$0.00</Text>
        </View>

        <View>
          <Text style={[{ color: colors.text }]}>Paid</Text>
          <Text style={[styles.cost, { color: colors.text }]}>$0.00</Text>
        </View>

        <View>
          <Text style={[{ color: colors.text }]}>Balance</Text>
          <Text style={[styles.cost, { color: colors.text }]}>$0.00</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={toggleBottomSheet} style={styles.button}>
            <Text style={[styles.filterText, { color: colors.text }]}>
              File Type: {selectedType}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleBottomSheet2}
            style={[styles.button, { marginLeft: 10 }]}
          >
            <Text style={[styles.filterText, { color: colors.text }]}>
              File Type: {selectedStatus}
            </Text>
          </TouchableOpacity>
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
            <View style={{ marginBottom: 30 }}>
              <Text style={{ fontSize: 16, color: colors.text }}>
                Select Type *
              </Text>
            </View>

            <TouchableOpacity
              style={{ marginBottom: 30 }}
              onPress={() => handleRoleSelection("All")}
            >
              <Text style={[styles.bottomText, { color: colors.text }]}>
                All
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginBottom: 30 }}
              onPress={() => handleRoleSelection("Active")}
            >
              <Text style={[styles.bottomText, { color: colors.text }]}>
                Active
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleRoleSelection("Archived")}>
              <Text style={[styles.bottomText, { color: colors.text }]}>
                Archived
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={visible2}
          onBackButtonPress={toggleBottomSheet2}
          onBackdropPress={toggleBottomSheet2}
        >
          <View
            style={[
              styles.bottomSheetContainer2,
              { backgroundColor: colors.background },
            ]}
          >
            <View style={{ marginBottom: 30 }}>
              <Text style={{ fontSize: 16, color: colors.text }}>Status:</Text>
            </View>

            <TouchableOpacity
              style={{ marginBottom: 30 }}
              onPress={() => handleRoleSelection2("All")}
            >
              <Text style={[styles.bottomText, { color: colors.text }]}>
                All
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginBottom: 30 }}
              onPress={() => handleRoleSelection2("Approved")}
            >
              <Text style={[styles.bottomText, { color: colors.text }]}>
                Approved
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginBottom: 30 }}
              onPress={() => handleRoleSelection2("Declined")}
            >
              <Text style={[styles.bottomText, { color: colors.text }]}>
                Declined
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginBottom: 30 }}
              onPress={() => handleRoleSelection2("Draft")}
            >
              <Text style={[styles.bottomText, { color: colors.text }]}>
                Draft
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginBottom: 30 }}
              onPress={() => handleRoleSelection2("Sent")}
            >
              <Text style={[styles.bottomText, { color: colors.text }]}>
                Sent
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginBottom: 30 }}
              onPress={() => handleRoleSelection2("Partially Paid")}
            >
              <Text style={[styles.bottomText, { color: colors.text }]}>
                Partially Paid
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginBottom: 30 }}
              onPress={() => handleRoleSelection2("Paid")}
            >
              <Text style={[styles.bottomText, { color: colors.text }]}>
                Paid
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginBottom: 30 }}
              onPress={() => handleRoleSelection2("Partially Invoiced")}
            >
              <Text style={[styles.bottomText, { color: colors.text }]}>
                Partially Invoiced
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleRoleSelection2("Invoiced")}>
              <Text style={[styles.bottomText, { color: colors.text }]}>
                Invoiced
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};

export default Estimates;

const styles = StyleSheet.create({
  containerHeader: {},
  header: {
    backgroundColor: "#fa807210",
    padding: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cost: {
    fontWeight: "bold",
  },
  footer: {
    padding: 30,
    flexDirection: "row",
  },
  bottomSheetContainer: {
    height: 250,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  button: {
    borderColor: "green",
    borderWidth: 1,
    maxWidth: 290,
    alignItems: "center",
    padding: 5,
    borderRadius: 5
  },
  bottomSheetContainer2: {
    height: 550,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
});
