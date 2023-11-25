import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProHome from "../screens/Pro/ProHome";
import ProHeaderLeft from "../components/Pro/ProHeaderLeft";
import ProHeaderRight from "../components/Pro/ProHeaderRight";
import ProjectsHome from "../screens/Projects/ProjectsHome";
import GoBackHeaderButton from "../components/GoBackHeaderButton";

const ProStack = createNativeStackNavigator();


const ProNavigator = () => {
  return (
    <ProStack.Navigator
    screenOptions={{
      // ...
      style: { borderTopWidth: 0 },
    }}
  >
  <ProStack.Screen
        name="ProHome"
        component={ProHome}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: () => <></>,
          headerLeft: () => <ProHeaderLeft />,
          headerRight: () => <ProHeaderRight />,
        }}
      />
        <ProStack.Screen
        name="Projects"
        component={ProjectsHome}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: 'Projects',
          headerLeft: () => <GoBackHeaderButton />,
        }}
      />


  </ProStack.Navigator>
  );
};

export default ProNavigator;

const styles = StyleSheet.create({});
