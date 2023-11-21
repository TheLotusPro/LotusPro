import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import React, {useEffect }from "react";
import ChatInput from "../../components/Chat/ChatInput";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
import * as Icons from "react-native-heroicons/solid";

const DesignProductDetails = ({navigation}) => {
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
      <Text>DesignProductDetails</Text>
    </View>
  );
};

export default DesignProductDetails;

const styles = StyleSheet.create({});
