import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { BottomSheet } from "react-native-btr";

const EditTask = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        Send invoice to client
      </Text>
      <Date />
    </View>
  );
};

const Date = () => {
  const { colors } = useTheme();
  const [selectedDate, setSelectedDate] = useState("All");
  const [visible, setVisible] = useState(false);

  const handleRoleSelection = (date) => {
    setSelectedDate(date);
    toggleBottomSheet();
  };

  const toggleBottomSheet = () => {
    setVisible((_visible) => !_visible);
  };
  return (
    <View style={styles.dateContainer}>
      <TouchableOpacity
        onPress={toggleBottomSheet}
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
      >
        <Icons.CalendarDaysIcon size={25} color={colors.text} />
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Text style={[{ color: colors.text }]}>Dec 1, 2023</Text>
        </TouchableOpacity>
      </TouchableOpacity>

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
        ></View>
      </BottomSheet>
    </View>
  );
};

export default EditTask;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  container: {
    margin: 20,
  },
  dateContainer: {
    marginTop: 40,
    borderBottomWidth: 0.3,
    borderColor: "gray",
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
});
