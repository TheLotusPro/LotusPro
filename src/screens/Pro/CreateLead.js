import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import { BottomSheet } from "react-native-btr";
import { Calendar } from "react-native-calendars";
import moment from "moment";

const CreateLead = ({ route }) => {
  const [selectedClient, setSelectedClient] = useState(
    route.params?.selectedClient || "Select Client"
  );

  const [selectedLeadSource, setSelectedLeadSource] = useState(
    route.params?.selectedLeadSource || "Select Lead Source"
  );

  useEffect(() => {
    // Update the state when route params change
    setSelectedClient(route.params?.selectedClient || "Select Project");
    setSelectedLeadSource(
      route.params?.selectedLeadSource || "Select Lead Source"
    );
  }, [route.params]);

  return (
    <ScrollView>
      <ContactDetails selectedClient={selectedClient} />
      <LeadDetails selectedLeadSource={selectedLeadSource} />
    </ScrollView>
  );
};

const ContactDetails = ({ selectedClient }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleClientPress = () => {
    navigation.navigate("Client", {
      handleClientSelection: selectedClient,
    });
  };

  return (
    <View>
      <View style={{ margin: 20 }}>
        {/* header */}
        <View style={{ marginBottom: 30 }}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>
            Contact Details
          </Text>
        </View>
        {/* header */}

        {/* input */}
        <TouchableOpacity
          onPress={handleClientPress}
          style={{
            marginTop: 10,
            borderBottomWidth: 0.3,
            borderBottomColor: "gray",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={[{ color: colors.text, marginBottom: 10 }]}>
              {selectedClient}
            </Text>
            <Icons.ChevronDownIcon size={20} color={colors.text} />
          </View>
        </TouchableOpacity>
        {/* input */}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("CreateNewClient")}
        style={{ margin: 20, flexDirection: "row", alignItems: "center" }}
      >
        <Icons.UserPlusIcon size={25} color={"#33AB5F"} />
        <View style={{ marginLeft: 5 }}>
          <Text style={[{ color: "#33AB5F" }]}>Create New Client</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const LeadDetails = ({ selectedLeadSource }) => {
  const { colors } = useTheme();
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState("Date");
  const [visible, setVisible] = useState(false);

  const handleLeadPress = () => {
    navigation.navigate("LeadSource", {
      handleLeadSelection: selectedLeadSource,
    });
  };

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
    todayTextColor: "#33AB5F",
    selectedDayTextColor: "#ffffff", // Set the text color for selected days
    arrowColor: "#33AB5F",
    monthTextColor: colors.text,
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  };

  return (
    <View>
      <View style={{ margin: 20 }}>
        <View style={{ marginBottom: 30 }}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>
            Lead Details
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={120}
        >
          <View>
            <TextInput
              style={[styles.input, { color: colors.text }]}
              placeholder="Lead Name*"
              value={name}
              placeholderTextColor={"gray"}
              onChangeText={(text) => setName(text)}
            />
          </View>
          {/* input */}
          <TouchableOpacity
            onPress={handleLeadPress}
            style={{
              marginTop: 10,
              borderBottomWidth: 0.3,
              borderBottomColor: "gray",
            }}
          >
            <Text
              style={[{ color: colors.text, marginBottom: 10, fontSize: 13 }]}
            >
              Lead Source *
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[{ color: colors.text, marginBottom: 10 }]}>
                {selectedLeadSource.title || "Select Lead Source"}
              </Text>
              <Icons.ChevronDownIcon size={20} color={colors.text} />
            </View>
          </TouchableOpacity>
          {/* input */}

          {/* Date */}

          <View style={styles.dateContainer}>
            <Text
              style={[{ color: colors.text, marginBottom: 10, fontSize: 13 }]}
            >
              Expected Start Date *
            </Text>
            <TouchableOpacity
              onPress={toggleBottomSheet}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
              }}
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
                    [moment(selectedDate, "MMM D, YYYY").format("YYYY-MM-DD")]:
                      {
                        selected: true,
                        selectedColor: "#33AB5F",
                      },
                  }}
                />
              </View>
            </BottomSheet>
          </View>

          {/* Date */}

              {/* Revenue */}

              {/* <TouchableOpacity
            onPress={handleLeadPress}
            style={{
              marginTop: 10,
              borderBottomWidth: 0.3,
              borderBottomColor: "gray",
            }}
          >
            <Text
              style={[{ color: colors.text, marginBottom: 10, fontSize: 13 }]}
            >
              Estimated revenue *
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[{ color: colors.text, marginBottom: 10 }]}>
                {selectedLeadSource.title || "Select Lead Source"}
              </Text>
              <Icons.ChevronDownIcon size={20} color={colors.text} />
            </View>
          </TouchableOpacity> */}

             {/* Revenue */}

        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default CreateLead;

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: "600",
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
    marginBottom: 20,
    paddingVertical: 10,

    fontSize: 15,
  },
  dateContainer: {
    marginTop: 30,
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
