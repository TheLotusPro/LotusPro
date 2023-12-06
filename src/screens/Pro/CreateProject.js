import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const CreateProject = () => {
  const {colors} = useTheme();
  return (
    <View>
      <Text style={[{color: colors.text}]}>CreateProject</Text>
    </View>
  )
}

export default CreateProject

const styles = StyleSheet.create({})