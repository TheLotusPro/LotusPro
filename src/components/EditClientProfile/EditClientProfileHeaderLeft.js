import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';

const EditClientProfileHeaderLeft = () => {

    const { colors } = useTheme();

  return (
    <View>
      <Text style={[{color: colors.text}]}>EditClientProfileHeaderLeft</Text>
    </View>
  )
}

export default EditClientProfileHeaderLeft

const styles = StyleSheet.create({})