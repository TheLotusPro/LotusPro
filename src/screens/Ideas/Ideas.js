import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import React, {useEffect }from "react";
import ChatInput from "../../components/Chat/ChatInput";
import {
  Text,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";
import IdeasHeader from "../../components/Ideas/IdeasHeader";

const Ideas = ({navigation}) => {

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
    <IdeasHeader />

      <Text>Ideas</Text>
    </View>
  );
};

export default Ideas;

const styles = StyleSheet.create({});
