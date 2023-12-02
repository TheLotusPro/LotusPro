import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";

const EstimateItem = () => {
  const { colors } = useTheme();
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <View
      style={{
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        borderColor: "gray",
        marginTop: 10,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={[{ color: colors.text }]}>Curb Cleaning</Text>

          <View style={{ marginTop: 10 }}>
            {!isHidden && (
              <Text style={[{ color: colors.text }]}>Quantity: 1</Text>
            )}
            <Text style={[{ color: colors.text }]}>$0.00</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={[{ marginRight: 20 }]}>
            <Icons.EllipsisHorizontalIcon
              style={{ color: colors.text }}
              size={25}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleVisibility}>
            {isHidden ? (
              <Icons.ChevronDownIcon size={25} color={colors.text} />
            ) : (
              <Icons.ChevronUpIcon size={25} color={colors.text} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EstimateItem;

const styles = StyleSheet.create({});
