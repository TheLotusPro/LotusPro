import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";
import leadOptions from "../../assets/data/leads/leadOptions";

const LeadsOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (index) => {
    setSelectedOption(index);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {leadOptions.map((item, index) => (
        <View
          key={index}
          style={{
            alignItems: "center",
            left: 10,
            marginBottom: 1,
          }}
        >
          <Options
            leadOptions={item}
            selected={selectedOption === index}
            onPress={() => handleOptionPress(index)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const Options = ({ leadOptions, selected, onPress }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { borderColor: selected ? "green" : "gray" },
      ]}
    >
      <View
        style={[
          styles.button,
          { borderColor: selected ? "green" : "gray" },
        ]}
      >
        <Text style={[{ color: colors.text }]}>{leadOptions?.title} {leadOptions?.total}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fa807210",
    flexDirection: "row",
    padding: 8,
    borderRadius: 17,
    borderWidth: 1,
  },
  container: {
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 5,
  },
});

export default LeadsOptions;
