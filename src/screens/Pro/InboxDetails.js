import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import InboxInput from "../../components/Pro/InboxInput";
import Message from "../../components/Pro/Message";

const InboxDetails = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
       <Message />
      </ScrollView>
      <InboxInput />
    </View>
  );
};

export default InboxDetails;

const styles = StyleSheet.create({});
