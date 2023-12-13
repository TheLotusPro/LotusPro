import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  Modal,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
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
} from "@gluestack-ui/themed";
import LeadsOptions from "./LeadsOptions";

const LeadsHeader = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Filter />
      <LeadsOptions />
 
    </View>
  );
};

const Filter = () => {
  const { colors } = useTheme();
  const [selectedType, setSelectedType] = useState("Current");
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  const navigation = useNavigation();

  const handleRoleSelection = (type) => {
    setSelectedType(type);
    handleClose();
  };

  return (
    <View>
      <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
        <TouchableOpacity onPress={handleClose} style={styles.button}>
          <Text style={[styles.filterText, { color: colors.text }]}>
            {selectedType}
          </Text>
          <Icons.ChevronDownIcon
            size={18}
            color={colors.text}
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity 
      onPress={handleClose} style={styles.button}>
        <Text style={[styles.filterText, { color: colors.text }]}>
         {selectedType}
        </Text>
      </TouchableOpacity> */}
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

          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => handleRoleSelection("Current")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                marginLeft={2}
                style={styles.option}
                color={colors.text}
                _dark={{
                  color: "gray.300",
                }}
              >
                Current
              </Text>
            </View>
          </ActionsheetItem>

          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => handleRoleSelection("Won")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                marginLeft={2}
                style={styles.option}
                color={colors.text}
                _dark={{
                  color: "gray.300",
                }}
              >
                Won
              </Text>
            </View>
          </ActionsheetItem>

          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            onPress={() => handleRoleSelection("Inactive")}
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
                color={colors.text}
                _dark={{
                  color: "gray.300",
                }}
              >
                Inactive
              </Text>
            </View>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default LeadsHeader;

const styles = StyleSheet.create({
  filterText: {
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#fa807210",
    padding: 8,
    margin: 10,

    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    flexDirection: "row",
    alignItems: "center",
  },
});
