import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import DarkTheme from '../theming/DarkTheme';
import DefaultTheme from '../theming/DefaultTheme';
import {useColorScheme} from 'react-native';

const index = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
    <RootNavigator />
  </NavigationContainer>
  );
};

export default index;
