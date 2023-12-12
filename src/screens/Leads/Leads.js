import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LeadsCard from '../../components/Leads/LeadsCard'
import LeadsHeader from '../../components/Leads/LeadsHeader'

const Leads = () => {
  return (
    <View style={{flex: 1}}>
    <LeadsHeader />
    <ScrollView>
    <LeadsCard />
    </ScrollView>

    </View>
  )
}

export default Leads

const styles = StyleSheet.create({})