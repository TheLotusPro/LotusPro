import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProHeaderButtons from '../Pro/ProHeaderButtons'
import ProjectDetailsMenu from './ProjectDetailsMenu'

const ProjectDetailsHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={[{color: 'gray'}]}>Status: Open</Text>
      <ProjectDetailsMenu />
    </View>
  )
}

export default ProjectDetailsHeader

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})