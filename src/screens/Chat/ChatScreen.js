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


const ChatScreen = ({navigation}) => {

    useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ width: 50 }}
            >
              <Icons.ArrowLongLeftIcon style={{ color: "#33AB5F" }} size={30} />
            </TouchableOpacity>
          ),
        });
      }, [navigation]);



  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.header}>
          <Avatar style={styles.userImage}>
            <AvatarFallbackText>SS</AvatarFallbackText>
            <AvatarImage
              style={styles.userImage}
              source={{
                uri: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

              }}
            />
          </Avatar>
          <View style={{ marginTop: 10, alignItems: "center" }}>
            <Text style={styles.username}>Black Diamond</Text>
            <Text style={styles.info}>Typically replies within 10 minutes</Text>
          </View>
        </View>
      </ScrollView>

      <ChatInput />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginTop: 10,
  },
  username: {
    fontWeight: "bold",
  },
  userImage: {
    width: 80,
    height: 80,
  },
  info: {
    color: "#33AB5F",
    fontSize: 13,
    fontWeight: "bold",
  },
});
