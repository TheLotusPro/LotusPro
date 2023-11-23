import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as Icons from "react-native-heroicons/solid";
import { Text } from "@gluestack-ui/themed";


const Activity = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50 }}
        >
          <Icons.ArrowLongLeftIcon style={{ color: "#fa8072" }} size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Activity</Text>
    </View>
  )
}

export default Activity

const styles = StyleSheet.create({})