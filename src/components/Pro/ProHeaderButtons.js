import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";
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

const { width } = Dimensions.get("window");

const ProHeaderButtons = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClose} style={styles.button}>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Icons.PlusCircleIcon size={25} style={styles.icon} />
          <Text style={styles.options}> Create</Text>
        </View>
      </TouchableOpacity>
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

          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => navigation.navigate("CreateTask") || handleClose()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.FolderPlusIcon size={28} color={"#33AB5F"} />
              <Text
                marginLeft={2}
                style={styles.option}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                Task
              </Text>
            </View>
          </ActionsheetItem>

          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => navigation.navigate("CreateProject") || handleClose()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.WrenchScrewdriverIcon size={28} color={"#33AB5F"} />
              <Text
                marginLeft={2}
                style={styles.option}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                Project
              </Text>
            </View>
          </ActionsheetItem>

          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => navigation.navigate("CreateLead") || handleClose()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.UserCircleIcon size={28} color={"#33AB5F"} />
              <Text
                marginLeft={2}
                style={styles.option}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                Lead
              </Text>
            </View>
          </ActionsheetItem>
          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => navigation.navigate("CreateInvoice") || handleClose()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.DocumentTextIcon size={28} color={"#33AB5F"} />
              <Text
                marginLeft={2}
                style={styles.option}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                Invoice
              </Text>
            </View>
          </ActionsheetItem>
          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => navigation.navigate("CreateEstimate") || handleClose()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.CalculatorIcon size={28} color={"#33AB5F"} />
              <Text
                marginLeft={2}
                style={styles.option}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                Estimate
              </Text>
            </View>
          </ActionsheetItem>
          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => navigation.navigate("CreateNote") || handleClose()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.ClipboardDocumentCheckIcon size={28} color={"#33AB5F"} />
              <Text
                marginLeft={2}
                style={styles.option}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                Note
              </Text>
            </View>
          </ActionsheetItem>
          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => navigation.navigate("UploadFiles") || handleClose()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.ArrowUpOnSquareIcon size={28} color={"#33AB5F"} />
              <Text
                marginLeft={2}
                style={styles.option}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                Upload Files
              </Text>
            </View>
          </ActionsheetItem>
          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => navigation.navigate("CreateMessage") || handleClose()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icons.EnvelopeIcon size={28} color={"#33AB5F"} />
              <Text
                marginLeft={2}
                style={styles.option}
                color={"#33AB5F"}
                _dark={{
                  color: "gray.300",
                }}
              >
                Message
              </Text>
            </View>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default ProHeaderButtons;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    backgroundColor: "#33AB5F",
    width: 120,
    padding: 5,
    margin: 5,
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  title: {
    color: "#fa8072",
    marginTop: 10,
    fontSize: 14,
  },
  options: {
    color: "white",
    fontWeight: "500",
  },
  icon: {
    color: "white",
  },
  option: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
