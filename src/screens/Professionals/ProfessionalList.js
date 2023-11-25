import {
    Button,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { useNavigation, useTheme } from "@react-navigation/native";
  import * as Icons from "react-native-heroicons/solid";
  import { Text } from "@gluestack-ui/themed";
import ProfessionalListCard from "../../components/Professionals/ProfessionalListCard";

const ProfessionalList = () => {
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

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
    <View>
      <ProfessionalListCard />
    </View>
  );
};

export default ProfessionalList;

const styles = StyleSheet.create({});
