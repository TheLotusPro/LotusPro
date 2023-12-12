import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import {
  Text,
  Avatar,
  AvatarFallbackText,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";

const LeadsCard = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("LeadDetails")}>
          <Text style={[styles.title, { color: colors.text }]}>
            Landscape Job for Sam
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleClose}>
          <Icons.EllipsisHorizontalIcon size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("LeadDetails")}
        style={{ flexDirection: "row" }}
      >
        <Avatar bgColor="$amber600" size="md" borderRadius="$full">
          <AvatarFallbackText>Sam Jon</AvatarFallbackText>
        </Avatar>

        <View style={{ marginLeft: 10 }}>
          <Text style={[styles.username, { color: colors.text }]}>
            Sam John
          </Text>
          <Text style={[styles.address, { color: colors.text }]}>
            1234 Peace Tree Lane
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.status}>
        <Icons.CircleStackIcon size={15} />
        <Text style={[styles.statusText, { color: colors.text }]}>
          Followed Up
        </Text>
      </View>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent
          style={{ backgroundColor: colors.background }}
          h="$79"
          zIndex={999}
        >
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <View
            style={{
              alignSelf: "flex-start",
              marginHorizontal: 10,
              marginBottom: 10,
            }}
          >
            <Text style={[{ color: colors.text }]}>Options</Text>
          </View>

          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={handleClose}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                marginLeft={2}
                style={styles.option}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                Snooze Lead
              </Text>
            </View>
          </ActionsheetItem>

          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={handleClose}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                marginLeft={2}
                style={styles.option}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                Archive Lead
              </Text>
            </View>
          </ActionsheetItem>

          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={handleClose}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Text
                marginLeft={2}
                style={styles.option}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                Delete Lead
              </Text>
            </View>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default LeadsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fa807210",
    padding: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    margin: 20,
  },
  title: {
    fontWeight: "bold",
  },
  username: {
    fontSize: 13,
    fontWeight: "500",
  },
  address: {
    fontSize: 14,
  },
  statusText: {
    fontWeight: "500",
    fontSize: 14,
    marginLeft: 5,
  },
  status: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
