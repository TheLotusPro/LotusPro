import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MyIdeaCard from "../../components/Ideas/MyIdeas/MyIdeaCard";
import * as Icons from "react-native-heroicons/outline";
import { useNavigation, useTheme } from "@react-navigation/native";

const MyIdeas = () => {
  return (
    <View>
      <Header />
      <MyIdeaCard />
    </View>
  );
};

const Header = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();



  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('NewIdea')}
    style={{ margin: 10, marginHorizontal: 20 }}>
      <View style={styles.button}>
        <Icons.PlusIcon size={20} color={colors.text} />
        <Text style={[styles.buttonText, {color: colors.text}]}>{' '}Create</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyIdeas;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fa807210",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#33AB5F",
    borderWidth: 0.5,
  

    width: 120,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center'
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
