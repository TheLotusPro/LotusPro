import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { BottomSheet } from "react-native-btr";
import { Calendar } from "react-native-calendars";
import ImagePicker from "react-native-image-crop-picker";
import moment from "moment";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";

const NewTask = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);


  const handleDonePress = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    navigation.goBack();
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleDonePress} style={{ marginRight: 5 }}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#33AB5F" />
          ) : (
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#33AB5F" }}
            >
              Done
            </Text>
          )}
        </TouchableOpacity>
      ),
    });
  }, [navigation, isLoading]);



  return (
    <ScrollView style={styles.container}>
      <Title />
      <Date />
      <Assign />
      <TaskDescription />
      <Attachments />
    </ScrollView>
  );
};

const Title = () => {
  const { colors } = useTheme();

  return (
    <View>
      <View>
        <TextInput
          placeholder={"Start Typing a Task"}
          autoCapitalize="none"
          autoFocus
          placeholderTextColor={"grey"}
          numberOfLines={4}
          style={[styles.titleHeader, { color: colors.text }]}
        />
      </View>
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
    todayTextColor: "#33AB5F",
    selectedDayTextColor: "#ffffff", // Set the text color for selected days
    arrowColor: "#33AB5F",
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
                selectedColor: "#33AB5F",
              },
            }}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

const Assign = () => {
  const { colors } = useTheme();
  const [selectedAssign, setSelectedAssign] = useState("Assign");
  const [visible, setVisible] = useState(false);

  const toggleBottomSheet = () => {
    setVisible((_visible) => !_visible);
  };

  return (
    <TouchableOpacity
      onPress={toggleBottomSheet}
      style={styles.assignContainer}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
      >
        <Icons.UserPlusIcon size={25} color={colors.text} />
        <View
          style={{ marginLeft: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Avatar size="xs">
            <AvatarFallbackText>SS</AvatarFallbackText>
            <AvatarImage
              size="md"
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </Avatar>
          <Text style={[styles.username, { color: colors.text }]}>
            Matt James
          </Text>
        </View>
      </View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomSheet}
        onBackdropPress={toggleBottomSheet}
      >
        <View
          style={[
            styles.bottomSheetContainerAssign,
            { backgroundColor: colors.background },
          ]}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text onPress={toggleBottomSheet} style={[{ color: colors.text }]}>
              Cancel
            </Text>
            <Text style={[styles.titleSheet, { color: colors.text }]}>
              Add Assignees
            </Text>
            <Text style={[{ color: "dodgerblue" }]}>Select</Text>
          </View>
          {/* INPUT */}
          <ScrollView>
            <View style={[styles.searchContainer]}>
              <View
                style={{
                  margin: 8,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icons.MagnifyingGlassIcon size={20} color={"gray"} />
                <TextInput
                  placeholder={"Search Assignees"}
                  autoCapitalize="none"
                  placeholderTextColor={"grey"}
                  style={[styles.input, { color: colors.text }]}
                />
              </View>
            </View>

            {/* INPUT */}

            <View style={styles.clientsContainer}>
              <Text style={[styles.titleSheet, { color: colors.text }]}>
                Clients
              </Text>
            </View>

            <View style={styles.teamMemberContainer}>
              <Text style={[styles.titleSheet, { color: colors.text }]}>
                Team Members
              </Text>
            </View>
          </ScrollView>
        </View>
      </BottomSheet>
    </TouchableOpacity>
  );
};

const TaskDescription = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.TaskDescriptionContainer}>
      <View style={{ marginBottom: 15 }}>
        <View style={{ marginLeft: 10 }}>
          <TextInput
            placeholder={"Description"}
            autoCapitalize="none"
            placeholderTextColor={"grey"}
            numberOfLines={4}
            style={[styles.inputDes, { color: colors.text }]}
          />
        </View>
      </View>
    </View>
  );
};

const Attachments = () => {
  const { colors } = useTheme();
  const [images, setImages] = useState([]);

  const handleImagePicker = async () => {
    try {
      const result = await ImagePicker.openPicker({
        multiple: true,
        mediaType: "photo",
      });

      // Update state with selected images
      setImages(result);
    } catch (error) {
      console.log("Error picking images:", error);
    }
  };

  return (
    <View style={styles.AttachmentsContainer}>
      <TouchableOpacity
        onPress={handleImagePicker}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Icons.PaperClipIcon size={20} color={"gray"} />

        <Text style={[{ color: colors.text }]}>Attachments</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {images.map((image) => (
          <Image
            key={image.path}
            source={{ uri: image.path }}
            style={styles.image}
          />
        ))}
      </View>
    </View>
  );
};

export default NewTask;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  titleHeader: {
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
  assignContainer: {
    marginTop: 30,
    borderBottomWidth: 0.3,
    borderColor: "gray",
  },
  username: {
    marginLeft: 5,
    fontSize: 14,
  },
  bottomSheetContainerAssign: {
    height: 700,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  titleSheet: {
    fontWeight: "bold",
  },
  searchContainer: {
    width: "100%",
    borderColor: "#a9a9a950",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    alignSelf: "center",
  },
  input: {
    marginLeft: 1,
    width: "82%",
  },
  clientsContainer: {
    padding: 10,
    marginTop: 15,
  },
  teamMemberContainer: {
    padding: 10,
    marginTop: 15,
  },
  TaskDescriptionContainer: {
    marginTop: 30,
    borderBottomWidth: 0.3,
    borderColor: "gray",
  },
  inputDes: {
    width: "90%",
  },
  AttachmentsContainer: {
    margin: 10,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    margin: 5,
  },
});
