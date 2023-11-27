import { Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { Text } from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";

const PhotosHeaderBar = () => {
  return (
    <ScrollView horizontal 
    showsHorizontalScrollIndicator={false}
    style={styles.container}>
      <Filter />
   
    </ScrollView>
  );
};

const Filter = () => {
  const { colors } = useTheme();

  return (
    <Pressable style={styles.button}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icons.AdjustmentsHorizontalIcon style={{ color: colors.text }} size={20} />

        <Text style={[styles.option,{ color: colors.text }]}>Filter</Text>
      </View>
    </Pressable>
  );
};

export default PhotosHeaderBar;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 20,
  
  },
  button: {
    padding: 10,
    backgroundColor: "#fa807210",
    borderWidth: 0.3,
    borderColor: "#33AB5F",
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  option: {
    fontWeight: '600'
  }
});
