import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme, useNavigation } from "@react-navigation/native";
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

const IdeaDetailsHeaderRight = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  const { colors } = useTheme();
  return (
    <View>
      <TouchableOpacity onPress={handleClose}>
        <View>
          <Icons.EllipsisHorizontalIcon size={25} color={colors.text} />
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
            // onPress={() => navigation.navigate("NewTask") || handleClose()}
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
                Option 1
              </Text>
            </View>
          </ActionsheetItem>

          <ActionsheetItem
            style={{ backgroundColor: colors.background }}
            // onPress={() => navigation.navigate("NewTask") || handleClose()}
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
                Option 1
              </Text>
            </View>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default IdeaDetailsHeaderRight;

const styles = StyleSheet.create({
  option: { fontWeight: "600" },
});
