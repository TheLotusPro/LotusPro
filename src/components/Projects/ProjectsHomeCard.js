import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import {
  Text,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  Avatar,
  AvatarFallbackText,
} from "@gluestack-ui/themed";

const ProjectsHomeCard = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <TouchableOpacity 
     onPress={() => navigation.navigate('ProjectDetails')}
    style={styles.container}>
      <View style={styles.projectContainer}>
        <View style={{ borderBottomWidth: 0.2, borderColor: "gray" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.projectTitle, { color: colors.text }]}>
              Kitchen and Bath Remodel
            </Text>
            <TouchableOpacity onPress={handleClose}>
              <Icons.EllipsisHorizontalIcon size={25} color={colors.text} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.date, { color: colors.text }]}>
            Friday - November 24, 2023
          </Text>
        </View>
        <View
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          <View>
            <Avatar bgColor="$amber600" size="sm" borderRadius="$full">
              <AvatarFallbackText>Sam Jon</AvatarFallbackText>
            </Avatar>
          </View>

          <Text style={[styles.user, { color: colors.text }]}> Sam Jon</Text>
        </View>
      </View>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent
          style={{ backgroundColor: colors.background }}
          h="$80"
          zIndex={999}
        >
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <ActionsheetItem>
            <View>
              <Text style={[{ color: colors.text }]}>Options</Text>
            </View>
          </ActionsheetItem>
          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => handleClose()}
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
                Edit Project
              </Text>
            </View>
          </ActionsheetItem>

          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => handleClose()}
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
                Archive Project
              </Text>
            </View>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </TouchableOpacity>
  );
};

export default ProjectsHomeCard;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  projectTitle: {
    fontWeight: "bold",
  },
  projectContainer: {
    backgroundColor: "#fa807210",
    padding: 20,
    borderRadius: 10,
  },
  date: {
    marginTop: 10,
    marginBottom: 10,
  },
  user: {
    fontSize: 14,
  },
});
