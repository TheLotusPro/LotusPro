import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { useTheme, useNavigation } from "@react-navigation/native";
import {
  Text,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from "@gluestack-ui/themed";

const ProjectsHeader = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <View>
      <View>
        <View style={[styles.searchContainer]}>
          <View
            style={{ margin: 8, flexDirection: "row", alignItems: "center" }}
          >
            <Icons.MagnifyingGlassIcon size={20} color={"gray"} />
            <TextInput
              placeholder={"Search Projects"}
              autoCapitalize="none"
              placeholderTextColor={"grey"}
              style={[styles.input, { color: colors.text }]}
            />
          </View>
        </View>
      </View>

      <View style={{ marginTop: 20, marginHorizontal: 20, marginBottom: 10 }}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleClose}>
          <Text style={styles.buttonText}>Type: Active</Text>
          <Icons.ChevronDownIcon size={10} color={"white"} />
        </TouchableOpacity>
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
              <Text style={[{ color: colors.text }]}>Filter Type:</Text>
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
                All
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
                Active
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
                Archive
              </Text>
            </View>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default ProjectsHeader;

const styles = StyleSheet.create({
  searchContainer: {
    width: "90%",
    borderColor: "#a9a9a950",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignSelf: "center",
  },
  buttonContainer: {
    backgroundColor: "#33AB5F",
    maxWidth: 110,
    padding: 5,
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 13,
  },
});
