import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/solid";

const ProDetailsHeaderRight = () => {
  return (
    <TouchableOpacity>
      <Icons.StarIcon size={25} color={"#fa8072"} />
    </TouchableOpacity>
  )
}

export default ProDetailsHeaderRight

const styles = StyleSheet.create({})