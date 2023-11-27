import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import { BottomSheet } from "react-native-btr";

const Size = () => {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);

  const toggleBottomSheet = () => {
    setVisible((_visible) => !_visible);
  };

  return (
    <Pressable onPress={toggleBottomSheet} style={styles.button}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.option, { color: colors.text }]}>Size</Text>
        <Icons.ChevronDownIcon style={{ color: colors.text }} size={20} />
      </View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomSheet}
        onBackdropPress={toggleBottomSheet}
      >
       <View
          style={[ styles.sheetBackground, {backgroundColor: colors.background}]}
        >
          <View>
            <View style={{ marginHorizontal: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity onPress={toggleBottomSheet}>
                  <Text style={[styles.headerTitle, { color: colors.text }]}>
                    Cancel
                  </Text>
                </TouchableOpacity>

                <Text style={[styles.headerTitle, { color: colors.text }]}>
                  All Filters
                </Text>

                <TouchableOpacity onPress={toggleBottomSheet}>
                  <Text style={[styles.close, { color: "#33AB5F" }]}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </BottomSheet>
    </Pressable>
  );
};

export default Size;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#fa807210",
    borderWidth: 0.3,
    borderColor: "#33AB5F",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    borderRadius: 5,
  },
  option: {
    fontWeight: "600",
  },

  iconTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    marginLeft: 10,
  },

  headerTitle: {
    fontWeight: "bold",
  },
  close: {
    fontWeight: "bold",
  },
  sheetBackground: {
    height: 450,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 13,
  }
});
