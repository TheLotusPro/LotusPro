import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
} from "@gluestack-ui/themed";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";

const TaskCard = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const taskText =
    "Remember to send invoice to Ms. John. Long text to demonstrate slicing if it's longer than 100 letters.";

  const sliceTaskText = (text) => {
    const maxLength = 50;
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("EditTask")}
      style={styles.container}
    >
      <Checkbox
        size="lg"
        isInvalid={false}
        aria-label="Checkbox Label"
        isDisabled={false}
      >
        <CheckboxIndicator mr="$2">
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel style={[styles.option, { color: colors.text }]}>
          Send invoice to client
        </CheckboxLabel>
      </Checkbox>

      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        {/* task */}
        <Text style={[styles.task, { color: "gray" }]}>
          {sliceTaskText(taskText)}{" "}
        </Text>
        {/* task */}
        <Avatar size="sm">
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            size="md"
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            }}
          />
        </Avatar>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderBottomWidth: 0.3,
    borderColor: "gray",
  },
  option: {
    fontWeight: "bold",
    marginLeft: 5,
  },
  task: {
    width: 290,
    fontSize: 14,
  },
});
