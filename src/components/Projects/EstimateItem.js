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

const EstimateItem =  ({ selectedItem, removeItem}) => {
  const { colors } = useTheme();
  const [isHidden, setIsHidden] = useState(true);
  const { title, price } = selectedItem || {};


  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <View
      style={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "#33AB5F",
        marginTop: 10,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={[styles.itemTitle,{ color: colors.text }]}>{title}</Text>

          <View style={{ marginTop: 10 }}>
            {!isHidden && (
              <Text style={[{ color: colors.text }]}>Quantity: 1</Text>
            )}
            <Text style={[{ color: colors.text }]}>{price}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => removeItem()} style={[{ marginRight: 20 }]}>
            <Icons.TrashIcon
              style={{ color: 'red' }}
              size={22}
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

const styles = StyleSheet.create({
  itemTitle: {
    width: 230
  }
});
