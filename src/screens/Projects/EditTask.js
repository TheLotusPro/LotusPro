import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { BottomSheet } from "react-native-btr";
import { Calendar } from "react-native-calendars";
import moment from "moment";

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
  const [selectedDate, setSelectedDate] = useState("Date");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Set selectedDate to the current date in the format "Dec 1, 2023" on component mount
    setSelectedDate(moment().format("MMM D, YYYY"));
  }, []);

  const handleDateSelection = (day) => {
    const selectedDateString = moment(day.dateString).format("MMM D, YYYY");
    setSelectedDate(selectedDateString);
    toggleBottomSheet();
  };

  const toggleBottomSheet = () => {
    setVisible((_visible) => !_visible);
  };

  const calendarTheme = {
    backgroundColor: colors.background, // Set your desired background color here
    calendarBackground: colors.background, // Set your desired background color here
    textSectionTitleColor: colors.text,
    dayTextColor: colors.text,
    todayTextColor: '#33AB5F',
    selectedDayTextColor: "#ffffff", // Set the text color for selected days
    arrowColor: '#33AB5F',
    monthTextColor: colors.text,
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  };

  return (
    <View style={styles.dateContainer}>
      <TouchableOpacity
        onPress={toggleBottomSheet}
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
      >
        <Icons.CalendarDaysIcon size={25} color={colors.text} />
        <View style={{ marginLeft: 10 }}>
          <Text style={[{ color: colors.text }]}>{selectedDate}</Text>
        </View>
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
        >
          <Calendar
            onDayPress={(day) => handleDateSelection(day)}
            theme={calendarTheme}
            markedDates={{
              [moment(selectedDate, "MMM D, YYYY").format("YYYY-MM-DD")]: {
                selected: true,
                selectedColor: '#33AB5F',
              },
            }}
          />
        </View>
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
    height: 400,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
});
