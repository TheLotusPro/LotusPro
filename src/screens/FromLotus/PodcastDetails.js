import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PodcastDetailsHeader from '../../components/FromLotus/PodcastDetailsHeader'
import PodcastDetailsDescription from '../../components/FromLotus/PodcastDetailsDescription'
import PodcastHost from '../../components/FromLotus/PodcastHost'
import PodcastInformation from './PodcastInformation'

const PodcastDetails = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <PodcastDetailsHeader />
    <PodcastDetailsDescription />
    <PodcastHost />
    <PodcastInformation />

   
    </ScrollView>
  )
}

export default PodcastDetails

const styles = StyleSheet.create({})