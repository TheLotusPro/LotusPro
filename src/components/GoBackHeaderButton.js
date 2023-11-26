import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';

const GoBackHeaderButton = () => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50 }}
        >
          <Icons.ChevronLeftIcon style={{ color: "#33AB5F" }} size={28} />
        </TouchableOpacity>
  )
}

export default GoBackHeaderButton

const styles = StyleSheet.create({})