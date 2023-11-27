import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./RootNavigator";
import DarkTheme from "../theming/DarkTheme";
import DefaultTheme from "../theming/DefaultTheme";
import { useColorScheme } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const index = () => {
  const scheme = useColorScheme();

  return (
    <BottomSheetModalProvider>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
};

export default index;
